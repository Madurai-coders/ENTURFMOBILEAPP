import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeBaseProvider} from 'native-base';
import Homepage from './components/Home/Homepage';
import BookingPayment from './components/Booking-Payment/BookingPayment';
import BookingDetail from './components/Booking/BookingDetail';
import PaymentDetail from './components/Payment/PaymentDetail';
import Navbar from './components/navbar/nav';
import Tournament from './components/Tournament/Tournament';
import Notification from './components/Tournament/Notification';

const Stack = createStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Navbar`"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Navbar" component={Navbar}>

          </Stack.Screen>

          <Stack.Screen
            name="BookingPayment"
            component={BookingPayment}>

            </Stack.Screen>
          <Stack.Screen name="Homepage" component={Homepage}>

          </Stack.Screen>

          <Stack.Screen
            name="BookingDetail"
            component={BookingDetail}>

            </Stack.Screen>
          <Stack.Screen
            name="Detail"
            
            component={PaymentDetail}>

            </Stack.Screen>
          <Stack.Screen name="Tournament" component={Tournament}>

          </Stack.Screen>
          <Stack.Screen
            name="Notification"
            component={Notification}>
              
            </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
