import {View, Text, Image, StyleSheet} from 'react-native';
import Header from '../../subcomponents/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';
import React, {useState} from 'react';
import {Button} from 'native-base';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import PersonelAddress from './PersonelAddress';
const Profile = () => {

 

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <Header Title="Profile" />
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          flexDirection: 'row',
          marginTop: 30,
          position: 'relative',
          width: '100%',
          marginLeft: 20,
        }}>
        <Image
          source={require('../../assets/Homepage/profile.png')} // Specify the path to your image
          style={{width: 60, height: 60}} // Adjust the width, height, and margin as needed
        />

        <View style={styles.overlay}>
          <Image
            source={require('../../assets/Navbar/profilebg.png')} // Specify the path to your image
            style={{width: 65, height: 65}} // Adjust the width, height, and margin as needed
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          marginLeft: 20,
        }}>
        <Text style={styles.profilename}>Richard</Text>
        <MaterialIcons
          name="edit"
          color="#5FD068"
          size={20}
          style={{marginTop: -5}}></MaterialIcons>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <Image
            source={require('../../assets/Navbar/Notify.png')} // Specify the path to your image
            style={{width: 30, height: 32}} // Adjust the width, height, and margin as needed
          />
          <Text style={styles.iconname}>Notification</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <Image
            source={require('../../assets/Navbar/Trmnt.png')} // Specify the path to your image
            style={{width: 30, height: 38}} // Adjust the width, height, and margin as needed
          />
          <Text style={styles.iconname}>Tournament</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <Image
            source={require('../../assets/Navbar/Htry.png')} // Specify the path to your image
            style={{width: 30, height: 32}} // Adjust the width, height, and margin as needed
          />
          <Text style={styles.iconname}>History</Text>
        </View>
      </View>

      {/* clickable button */}
<PersonelAddress/>

    </View>
  );
};
export default Profile;
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0)', // Semi-transparent black overlay
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    marginTop: -20,
  },
  profilename: {
    color: 'rgba(32, 32, 32, 1)',
    fontSize: 13,
    lineHeight: 30,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 100,
    marginRight: 10,
    marginLeft: 15,
  },
  iconname: {
    color: 'rgba(0,0,0,1)',
    fontSize: 14,
    lineHeight: 40,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 300,
  },
  Group707: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
  },
  Group717: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
  },
});
