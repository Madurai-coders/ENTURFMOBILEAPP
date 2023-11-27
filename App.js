import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeBaseProvider} from 'native-base';
import Homepage from './components/Home/Homepage';
import BookingPayment from './components/Booking-Payment/BookingPayment';
import BookingDetail from './components/Booking/BookingDetail';
import PaymentDetail from './components/Payment/PaymentDetail';
import Navbar from './components/Navbar/Navbar';
import Tournament from './components/Tournament/Tournament';
import Notification from './components/Notification/Notification';
import Gallery from './components/Gallery/gallery';

const Stack = createStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Navbar`"
          screenOptions={{
            headerShown: false,
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
            borderTopwidth: 0,
          }}>
          <Stack.Screen
            name="Navbar"
            options={{
              headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                borderTopWidth: 0,
              },
            }}
            component={Navbar}></Stack.Screen>
          <Stack.Screen name="Gallery" component={Gallery}></Stack.Screen>
          <Stack.Screen
            name="BookingPayment"
            component={BookingPayment}></Stack.Screen>
          <Stack.Screen name="Homepage" component={Homepage}></Stack.Screen>

          <Stack.Screen
            name="BookingDetail"
            component={BookingDetail}></Stack.Screen>
          <Stack.Screen name="Detail" component={PaymentDetail}></Stack.Screen>
          <Stack.Screen
            name="Tournament"
            options={{
              headerShown: false, // Set to false to hide the header title
            }}
            component={Tournament}></Stack.Screen>
          <Stack.Screen
            name="Notification"
            component={Notification}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
