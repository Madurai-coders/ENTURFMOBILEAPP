import BookingPayment from '../Booking-Payment/BookingPayment';
import BookingDetail from '../Booking/BookingDetail';
import PaymentDetail from '../Payment/PaymentDetail';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Homepage from '../Home/Homepage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Tournament from '../../assets/Navbar/home.png';
import {Image, View} from 'react-native';
import TournamentPage from '../Tournament/Tournament';
import Notification from '../Tournament/Notification';
const Tab = createMaterialBottomTabNavigator();

const Navbar = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Tournament"
        barStyle={{backgroundColor: '#FFFFFF', height: 57}}>
        <Tab.Screen
          name="Tournament"
          component={TournamentPage}
          options={{
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{color: focused ? 'red' : 'black', size: 20}}>
                Updates
              </Text>
            ),
            tabBarIcon: ({focused, color}) => (
              <View
                style={{
                  backgroundColor: '#F0FFF1',
                  borderRadius: 25,
                  width: 50,
                  height: 50,
                  marginTop: -12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <SimpleLineIcons
                  name="trophy"
                  size={28}
                  style={{color: focused ? '#5FD068' : ''}}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="BookingDetail"
          component={PaymentDetail}
          options={{
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{color: focused ? 'red' : 'black'}}>Updates</Text>
            ),
            tabBarIcon: ({color, focused}) => (
              <View
                style={{
                  backgroundColor: '#F0FFF1',
                  borderRadius: 25,
                  width: 50,
                  height: 50,
                  marginTop: -12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FontAwesome
                  name="picture-o"
                  size={28}
                  style={{color: focused ? 'green' : '#5FD068'}}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Homepage"
          component={Homepage}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, focused}) => (
              <View
                style={{
                  backgroundColor: '#F0FFF1',
                  borderRadius: 25,
                  width: 50,
                  height: 50,
                  marginTop: -12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="home-variant-outline"
                  size={28}
                  style={{color: focused ? 'green' : '#5FD068'}}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Bookingpayment"
          component={BookingPayment}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, focused}) => (
              <View
                style={{
                  backgroundColor: '#F0FFF1',
                  borderRadius: 25,
                  width: 50,
                  height: 50,
                  marginTop: -12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Entypo
                  name="back-in-time"
                  size={28}
                  style={{color: focused ? 'green' : '#5FD068'}}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          screenOptions={{
            tabBarShowLabel: false,
          }}



          options={{
            tabBarLabel:"no",

            tabBarIcon: ({color, focused}) => (
              <View
                style={{

                  backgroundColor: '#F0FFF1',
                  borderRadius: 25,
                  width: 50,
                  height: 50,
                  marginTop: -12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Fontisto
                  name="bell"
                  size={28}
                  style={{color: focused ? 'green' : '#5FD068'}}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navbar;
