/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {React, useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
  ImageURISource,
  Button,
} from 'react-native';

import Video from 'react-native-video';

const App = ({}) => {
  const [messages, setMessages] = useState([]);
  const ws = new WebSocket('ws://3.108.86.115:8000/AIController/');

  useEffect(() => {
    StatusBar.setHidden(true, 'none');
    const handleOpen = () => {
      console.log('WebSocket connected');
    };

    const handleMessage = event => {
      const message = event.data;
      console.log(event.data);
      setMessages(prevMessages => [...prevMessages, message]);
    };

    const handleClose = () => {
      console.log('WebSocket closed');
    };

    const handleError = error => {
      console.error('WebSocket error:', error);
    };

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
  }, []);
  function TriggerAI(val) {
    console.log(val);
    ws.send(
      JSON.stringify({
        name: 'name',
        value: val,
      }),
    );
  }
  return (
    <SafeAreaView>
      <Button title="on" onPress={() => TriggerAI('on')} />
      <Button title="off" onPress={() => TriggerAI('off')} />
      <ScrollView  horizontal={true}>
        <View style={{width: 1400}}>
          <Video
            source={{uri: 'http://3.108.86.115:9000/media/output.m3u8'}}
            controls={true}
            bufferConfig={{
              minBufferMs: 15000,
              maxBufferMs: 50000,
              bufferForPlaybackMs: 2500,
              bufferForPlaybackAfterRebufferMs: 5000,
            }}
            onProgress={val => console.log(val)}
            progressUpdateInterval={1000}
            hls={true}
            onLoad={val => console.log(val)}
            // resizeMode="fit"
            posterResizeMode={'cover'}
            onBuffer={this.onBuffer}
            onError={this.videoError}
            style={styles.backgroundVideo}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

var styles = StyleSheet.create({
  backgroundVideo: {
    height: 2000,
    width: 1400,
  },
  logo: {
    width: 266,
    height: 258,
  },
});

export default App;
