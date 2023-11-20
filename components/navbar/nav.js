
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  NavigationContainer,
  useNavigation,
  useIsFocused,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import BookingPayment from '../Booking-Payment/BookingPayment';
import BookingDetail from '../Booking/BookingDetail';
import PaymentDetail from '../Payment/PaymentDetail';
import Homepage from '../Home/Homepage';
import TournamentPage from '../Tournament/Tournament';
import Notification from '../Notification/Notification';
import Gallery from '../Gallery/gallery';
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({label, iconType, iconName, onPress}) => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  return (
      <TouchableOpacity
        onPress={() => {
          onPress();
          navigation.navigate(label);
        }}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: isFocused ? '#5FD068' : 'white',
          flexDirection: 'row',
          borderRadius: 20,
          position:"relative",
          left:10,
       
        }}>
        {iconType === 'simple-line-icons' ? (
          <SimpleLineIcons
            name={iconName}
            size={24}
            color={isFocused ? 'white' : 'black'}
          />
        ) : iconType === 'entypo' ? (
          <Entypo
            name={iconName}
            size={24}
            color={isFocused ? 'white' : 'black'}
          />
        ) : iconType === 'material-community' ? (
          <MaterialCommunityIcons
            name={iconName}
            size={24}
            color={isFocused ? 'white' : 'black'}
          />
        ) : iconType === 'fontisto' ? (
          <Fontisto
            name={iconName}
            size={24}
            color={isFocused ? 'white' : 'black'}
          />
        ) : (
          <>
            <Text>{iconName}</Text>
          </>
        )}
        {isFocused && (
          <View>
            <Text style={{marginLeft: 5, color: 'white',}}>{label}</Text>
          </View>
        )}
      </TouchableOpacity>
  );
};

const Navbar = () => (
  <NavigationContainer independent={true}>
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: 'white', // Background color of the tab bar
          elevation: 0, // Remove shadow on Android
          borderTopwidth: 0,

        },  
      }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarButton: props => (
          <CustomTabBarButton
            label={route.name}
            iconType={route.params?.iconType || 'Homepage'}
            iconName={route.params?.iconName || 'home-variant-outline'}
            {...props}
          />
        ),
      })}>
      <Tab.Screen
   
        name="Tournment"
        component={TournamentPage}
        initialParams={{iconType: 'simple-line-icons', iconName: 'trophy'}}
      />
      <Tab.Screen
        name="Gallery"
        component={Gallery}
        initialParams={{iconType: 'entypo', iconName: 'folder-video'}}
      />
      <Tab.Screen
        name="Home"
        component={Homepage}
        initialParams={{
          iconType: 'material-community',
          iconName: 'home-variant-outline',
        }}
      />
      <Tab.Screen
        name="History"
        component={BookingPayment}
        initialParams={{iconType: 'entypo', iconName: 'back-in-time'}}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        initialParams={{iconType: 'fontisto', iconName: 'bell'}}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Navbar;
