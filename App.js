import React from 'react';
import {useEffect} from 'react';
import {Text, View, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeBaseProvider} from 'native-base';
import BookingDetail from './components/Booking/BookingDetail';
import PaymentDetail from './components/Payment/PaymentDetail';
import Navbar from './components/Navbar/Navbar';
import SplashScreen from 'react-native-splash-screen';
import Profile from './components/Profile/profile';
import PersonelAddress from './components/Profile/PersonelAddress';
// import GalleryTab from './core/GalleryTab';
import LoginTab from './core/LoginTab';
// import VideoOption from './components/Gallery/VideoOption';
import SelectSport from './components/Gallery/SelectSport';

const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, []);
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginTab"
          screenOptions={{
            headerShown: false,
            cardStyle: {
              borderBottomWidth: 0,
              shadowOpacity: 0,
              elevation: 0,
            }, // Set background color
          }}>
          <Stack.Screen
            name="LoginTab"
            options={{
              headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
              },
            }}
            component={LoginTab}></Stack.Screen>

          <Stack.Screen name="Navbar" component={Navbar}></Stack.Screen>
          <Stack.Screen name="SelectSport" component={SelectSport} />

          {/* <Stack.Screen name="VideoOption" component={VideoOption} /> */}

          <Stack.Screen name="Profile" component={Profile}></Stack.Screen>

          <Stack.Screen
            name="BookingDetail"
            component={BookingDetail}></Stack.Screen>
          <Stack.Screen name="Detail" component={PaymentDetail}></Stack.Screen>
          <Stack.Screen
            name="PersonelAddress"
            component={PersonelAddress}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
