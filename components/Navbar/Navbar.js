// import React from 'react';
// import {TouchableOpacity, Image} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {
//   NavigationContainer,
//   useIsFocused,
//   useNavigation,
// } from '@react-navigation/native';
// import Svg, {G} from 'react-native-svg';
// import Gallery from '../Gallery/Gallery';
// import TournamentPage from '../Tournament/Tournament';
// import GallerySvg from '../../assets/Navbar/Gallery.svg';

// const Tab = createBottomTabNavigator();

// const CustomTabBarButton = ({label, onPress, color}) => {
//   const isFocused = useIsFocused();
//   const navigation = useNavigation();

//   const getImageSource = routeName => {
//     switch (routeName) {
//       case 'Gallery':
//         return (
//           <Svg width="22" height="22" viewBox="0 0 24 24">
//          <GallerySvg/>

//             <G fill={isFocused ? color.focused : color.unfocused}>

//             </G>
//           </Svg>
//         );
//       case 'Tournament':
//         return (
//           <Svg width="22" height="22" viewBox="0 0 24 24">
//          <GallerySvg/>
//             <G fill={isFocused ? color.focused : color.unfocused}>
//             </G>
//           </Svg>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <TouchableOpacity
//       onPress={() => {
//         onPress();
//         navigation.navigate(label);
//       }}
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'row',
//         marginLeft: 17,
//         marginRight: 17,
//         marginBottom: 4,
//         marginTop: 4,
//       }}>
//       {getImageSource(label)}
//     </TouchableOpacity>
//   );
// };

// const Navbar = () => (
//   <NavigationContainer independent={true}>
//     <Tab.Navigator
//       screenOptions={{
//         tabBarStyle: [
//           {
//             display: 'flex',
//             backgroundColor: 'white',
//             elevation: 0,
//             borderTopWidth: 0,
//           },
//           null,
//         ],
//       }}
//       screenOptions={({route}) => ({
//         headerShown: false,
//         tabBarButton: props => (
//           <CustomTabBarButton
//             label={route.name}
//             onPress={props.onPress}
//             color={{focused: '#5FD068', unfocused: 'black'}}
//           />
//         ),
//       })}>
//       <Tab.Screen name="Gallery" component={Gallery} />
//       <Tab.Screen name="Tournament" component={TournamentPage} />
//     </Tab.Navigator>
//   </NavigationContainer>
// );

// export default Navbar;

import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import HomePage from '../Home/Homepage';
import HistoryPage from '../Booking-Payment/BookingPayment';
import NotificationPage from '../Notification/Notification';
import GalleryIndex from '../Gallery/GalleryIndex';
import TournamentPage from '../Tournament/Tournament';
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({label, imageSource, onPress, iconWidth}) => {
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
        flexDirection: 'row',
        marginBottom: 4,
        marginTop: 4,
      }}>
     
       {label === 'Gallery' && (
        <Image
          source={imageSource}
          style={{
            width: 32,
            height: 30,
            tintColor: isFocused ? '#5FD068' : 'black',
            marginRight: 8,
          }}
          resizeMode="contain"
        />
      )}
      {label === 'Tournament' && (
        <Image
          source={imageSource}
          style={{
            width: 31,
            height: 40,
            tintColor: isFocused ? '#5FD068' : 'black',
            marginRight: 8, 
          }}
          resizeMode="contain"
        />
      )}
      {label === 'Home' && (
        <Image
          source={imageSource}
          style={{
            width: 27,
            height: 27,
            tintColor: isFocused ? '#5FD068' : 'black',
            marginRight: 8, 
          }}
          resizeMode="contain"
        />
      )}
      {label === 'History' && (
        <Image
          source={imageSource}
          style={{
            width: 27,
            height: 27,
            tintColor: isFocused ? '#5FD068' : 'black',
            marginRight: 8, 
          }}
          resizeMode="contain"
        />
      )}
      {label === 'Notification' && (
        <Image
          source={imageSource}
          style={{
            width: 30,
            height: 29,
            tintColor: isFocused ? '#5FD068' : 'black',
            marginRight: 8, 
          }}
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
};

const Navbar = () => (
  <NavigationContainer independent={true}>
    <Tab.Navigator
    //   screenOptions={{
    //     tabBarStyle: [
    //       {
    //         display: 'flex',
    //         backgroundColor: 'white', // Background color of the tab bar
    //         elevation: 0, // Remove shadow on Android
    //         borderTopWidth: 0,
    //       },
    //       null,
    //     ],
    //   }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarButton: props => (
          <CustomTabBarButton
            label={route.name}
            imageSource={getImageSource(route.name)}
            {...props}
          />
        ),
      })}>
      <Tab.Screen name="Gallery" component={GalleryIndex} />
      <Tab.Screen name="Tournament" component={TournamentPage} />
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="History" component={HistoryPage} />
      <Tab.Screen name="Notification" component={NotificationPage} />
    </Tab.Navigator>
  </NavigationContainer>
);
const getImageSource = routeName => {
  switch (routeName) {
    case 'Gallery':
      return require('../../assets/Navbar/Gallery.png');
    case 'Tournament':
      return require('../../assets/Navbar/Tournament.png');
    case 'Home':
      return require('../../assets/Navbar/Homepage.png');
    case 'History':
      return require('../../assets/Navbar/History.png');
    case 'Notification':
      return require('../../assets/Navbar/Notification.png');

    default:
      return null;
  }
};
export default Navbar;
