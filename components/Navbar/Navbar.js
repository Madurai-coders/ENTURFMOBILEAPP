import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import BookingPayment from '../Booking-Payment/BookingPayment';
import Gallery from '../Gallery/Gallery';
import Homepage from '../Home/Homepage';
import Notification from '../Notification/Notification';
import TournamentPage from '../Tournament/Tournament';
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
        color: isFocused ? 'black' : "#5FD068",
        flexDirection: 'row',
        marginLeft:17,
        marginRight:17,
        marginBottom:4,
        marginTop:4,
      }}>
      {iconType === 'simple-line-icons' ? (
        <SimpleLineIcons
          name={iconName}
          size={22}
          color={isFocused ? '#5FD068' : 'black'}
          
        />
      ) : iconType === 'foundation' ? (
        <Foundation
          name={iconName}
          size={32}
          color={isFocused ? '#5FD068' : 'black'}
        />
       ) : iconType === 'entypo' ? (
          <Entypo
            name={iconName}
            size={24}
            color={isFocused ? '#5FD068' : 'black'}
          />
      ) : iconType === 'material-community' ? (
        <MaterialCommunityIcons
          name={iconName}
          size={27}
          color={isFocused ? '#5FD068' : 'black'}
        />
      ) : iconType === 'fontisto' ? (
        <Fontisto
          name={iconName}
          size={24}
          color={isFocused ? '#5FD068' : 'black'}
        />
      ) : (
        <>
          <Text>{iconName}</Text>
        </>
      )}
    
    </TouchableOpacity>
  );
};

const Navbar = () => (
  <NavigationContainer independent={true}>
    <Tab.Navigator
     screenOptions={{
      tabBarStyle: [
        {
          display: 'flex',
          backgroundColor: 'white', // Background color of the tab bar
          elevation: 0, // Remove shadow on Android
          borderTopwidth: 0,
         
        },
        null,
      ],
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
        name="Gallery"
        component={Gallery}
        initialParams={{iconType: 'foundation', iconName: 'play-video'}}
      />
      <Tab.Screen
        name="Tournment"
        component={TournamentPage}
        initialParams={{iconType: 'simple-line-icons', iconName: 'trophy'}}
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
