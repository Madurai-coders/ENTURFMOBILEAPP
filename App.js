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
import GalleryPage from './components/Gallery/Gallery';
import TopNav from './subcomponents/TopNav';
const Stack = createStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Navbar"
          screenOptions={{
            headerShown: false,
            cardStyle: {
              borderBottomWidth: 0,
              shadowOpacity: 0,
              elevation: 0,
            }, // Set background color
          }}>
          <Stack.Screen
            name="Navbar"
            options={{
              headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
              },
            }}
            component={Navbar}></Stack.Screen>
          <Stack.Screen
            name="GalleryPage"
            component={GalleryPage}></Stack.Screen>
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
