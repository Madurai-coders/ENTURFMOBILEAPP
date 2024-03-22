import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const GalleryList = () => {
  const [data, setData] = useState([]);
  const [webSocket, setWebSocket] = useState();

  async function getList(val) {
    try {
      const response = await axios.get('http://192.168.0.6:8000/Gallery/');
      setData(response.data);
    //   console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching data: ', error);
      throw error; // Re-throw the error to propagate it to the caller
    }
  }
  async function TriggerAI(val) {
    webSocket?.send(
      JSON.stringify({
        name: 'name',
        value: val,
      }),
    );
  
    // Use a self-invoking async function inside setTimeout

    setTimeout(async () => {
      try {
        var responseData = await getList();
        if (Array.isArray(responseData) && responseData.length > 0) {
          const lastValue = responseData[responseData.length - 1];
          console.log(lastValue?.videoPath)
          navigateToGalleryPage(lastValue?.videoPath);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }, 36000);
  }


  useEffect(() => {
    getList();
  }, []);

  const handleOpen = useCallback(() => {
    console.log('WebSocket connected');
  }, []);

  const handleMessage = useCallback(event => {
    const message = JSON.parse(event.data);
  }, []);

  const handleClose = useCallback(() => {
    console.log('WebSocket closed');
  }, []);

  const handleError = useCallback(error => {
    console.error('WebSocket error:', error);
  }, []);

  useEffect(() => {
    StatusBar.setHidden(true, 'none');
    const ws = new WebSocket('ws://106.51.20.72:8081/AIController/');
    setWebSocket(ws);

    ws.addEventListener('open', handleOpen);
    ws.addEventListener('message', handleMessage);
    ws.addEventListener('close', handleClose);
    ws.addEventListener('error', handleError);

    return () => {
      ws.close();
      ws.removeEventListener('open', handleOpen);
      ws.removeEventListener('message', handleMessage);
      ws.removeEventListener('close', handleClose);
      ws.removeEventListener('error', handleError);
    };
  }, [handleOpen, handleMessage, handleClose, handleError]);

  const navigation = useNavigation();

  // Function to navigate to GalleryPage with props
  const navigateToGalleryPage = val => {
    // Use navigation.navigate to move to GalleryPage and pass props
    navigation.navigate('GalleryPage', {
      // Pass any data you want to send to GalleryPage
      // For example, you can pass an ID
      galleryId: val,
    });
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Button
            title="Go Live"
            color={'grey'}
            onPress={() => TriggerAI('on')}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {data.map((item, index) => (
          <View
            key={index}
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
            }}>
            <TouchableOpacity
              onPress={() => navigateToGalleryPage(item.videoPath)}>
              <Text style={{color: 'black', fontSize: 16}}>
                {item.videoPath}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};
export default GalleryList;

const styles = StyleSheet.create({});
