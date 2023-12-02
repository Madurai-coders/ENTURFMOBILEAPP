import {View, Text, StyleSheet} from 'react-native';
import {Button, Image} from 'native-base';
import {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tournament = () => {
  return (
    <View style={{height: '100%', width: '100%',backgroundColor:"#FFFFFF"}}>
      <View
        style={{
          height: '10%',
          width: '100%',
          flexDirection: 'row',
        }}>
        <View style={{marginTop: 20, marginLeft: 15, width: '10%'}}>
          <AntDesign name="left" size={24} color={'#3A3A3A'}></AntDesign>
        </View>
        <View
          style={{
            width: '80%',
            marginTop:3,
            
          }}>
          <Text style={styles.notificationtitle}>Tournament</Text>
        </View>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '85%',
          width: '100%',
        }}>
        <Image source={require('../../assets/General/tournament.png')}
         accessibilityLabel="Description of your image for accessibility"
         alt="Alternative Text"></Image>
        <Text style={styles.trnmtTxt}>Coming soon, Stay tune</Text>
      </View>
    </View>
  );
};

export default Tournament;
const styles = StyleSheet.create({
  notificationtitle: {
    fontFamily: 'Nunito',
    fontWeight: 600,
    fontSize: 21,
    lineHeight: 55,
    letterSpacing: 1,
    color: '#222222',
    alignSelf:"center"
  },
  trnmtTxt: {
    fontFamily: 'Nunito',
    fontWeight: 400,
    fontSize: 13,
    color: 'rgba(86, 86, 86, 0.87)',
    marginTop:20,
  },
});
