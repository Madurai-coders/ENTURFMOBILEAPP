import Address from './Address';
import PersonelDetails from './PersonelDetails';
import Swiper from 'react-native-swiper';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {Button} from 'native-base';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {color} from 'react-native-reanimated';
import React, {useState} from 'react';

function PersonelScreen() {
  return (
    <View style={styles.Group707}>
      <PersonelDetails />
    </View>
  );
}
function AddressScreen() {
  return (
    <View style={styles.Group707}>
      <Address />
    </View>
  );
}
const Tab = createMaterialTopTabNavigator();

const PersonelAddress = ({navigation, route}) => {
  const [activeTab, setActiveTab] = useState('Personel Detail'); // Track the active tab

  return (
    <>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarLabelStyle: {
             
              fontSize: 14,
              fontFamily: ' Inter, sans-serif',
              fontWeight: 600,
              textTransform: 'capitalize',
              width: '100%',
              alignItems:"center",
              color: route.name === activeTab ? 'white' : 'rgba(30, 30, 30, 1)', // Dynamically set text color based on active tab
            },
            tabBarItemStyle: {marginTop: -4},
            tabBarStyle: {
              marginTop: 15,
              marginLeft: 15,
              marginRight:15,
              backgroundColor: '#E5E5E5',
              color: 'rgba(30, 30, 30, 1)',
              height: 45,
              shadowOpacity: 0,
              shadowColor: 'white',
              borderBottomEndRadius: 32,
              borderBottomLeftRadius: 32,
              borderTopEndRadius: 32,
              borderTopLeftRadius: 32,
            }, // Corrected syntax
            tabBarIndicatorStyle: {
              backgroundColor: '#2D3A3A',
              width: '50%',
              height: '100%',
              alignItems:"center",
              borderBottomEndRadius: 32,
              borderBottomLeftRadius: 32,
              borderTopEndRadius: 32,
              borderTopLeftRadius: 32,
            },
          })}>
          <Tab.Screen
            name="Personel Detail"
            component={PersonelScreen}
            listeners={({navigation}) => ({
              tabPress: e => {
                setActiveTab('Personel Detail');
              },
            })}
          />
          <Tab.Screen
            name="Address"
            component={AddressScreen}
            listeners={({navigation}) => ({
              tabPress: e => {
                setActiveTab('Address');
              },
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default PersonelAddress;
const styles = StyleSheet.create({
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
