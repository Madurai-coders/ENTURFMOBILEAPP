import BookingPayment from '../Booking-Payment/BookingPayment';
import BookingDetail from '../Booking/BookingDetail';
import PaymentDetail from '../Payment/PaymentDetail';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Homepage from '../Home/Homepage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const Navbar = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Homepage"
        activeColor="#e91e63"
        barStyle={{backgroundColor: 'tomato'}}>
        <Tab.Screen
          name="homepage"
          component={Homepage}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="BookingDetail"
          component={BookingDetail}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="PaymentDetail"
          component={PaymentDetail}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navbar;
