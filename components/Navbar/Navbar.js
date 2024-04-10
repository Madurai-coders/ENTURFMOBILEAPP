import React, {useState} from 'react';
import {TouchableOpacity, Image, View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import VideoOption from '../Gallery/VideoOption';
import HomePage from '../Home/Homepage';
import HistoryPage from '../Booking-Payment/BookingPayment';
import NotificationPage from '../Notification/Notification';
import TournamentPage from '../Tournament/Tournament';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import GalleryTab from '../../core/GalleryTab';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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
      <Image
        source={imageSource}
        style={{
          width: 32, // Adjust the width here
          height: 32, // Adjust the height here
          tintColor: isFocused ? '#5FD068' : 'black',
          marginRight: 8,
        }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const Navbar = ({navigation}) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const getImageSource = routeName => {
    switch (routeName) {
      case 'GalleryTab':
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

  const CustomDrawerContent = props => {
    return (
      <View style={{flex: 1}}>

      <DrawerContentScrollView {...props}>
      <View>
          <DrawerItem
            label={() => (
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require('../../assets/Profile/profile.png')} // Specify the path to your image
                    style={{width: 35, height: 35, marginRight: 10}} // Adjust the width, height, and margin as needed
                  />
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{fontSize: 16, color: 'black'}}>Richard</Text>
                  <Text style={{fontSize: 11, color: 'black'}}>
                    richard@gmail.com
                  </Text>
                </View>
              </View>
            )}
            onPress={() => {
              navigation.navigate('BookingPayment'); // Replace 'ScreenName1' with the name of the screen you want to navigate to
            }}
          />
          <DrawerItem
            label="Profile"
            icon={({color, size}) => (
              <AntDesign
                name="user"
                color="rgba(15,20,25,1)"
                size={22}
                style={{marginRight: -18}}
              />
            )}
            onPress={() => {
              navigation.navigate('Profile');
            }}
            labelStyle={{
              fontSize: 16,
              color: 'rgba(15,20,25,1)',
              fontFamily: 'Inter, sans-serif',
            }}
            style={{marginLeft: 17, marginTop: 20}}
          />
          <DrawerItem
            label="Favourite"
            icon={({color, size}) => (
              <FontAwesome
                name="heart-o"
                color="rgba(15,20,25,1)"
                size={22}
                style={{marginRight: -18}}
              />
            )}
            onPress={() => {
              navigation.navigate('Gallery');
            }}
            labelStyle={{
              fontSize: 16,
              color: 'rgba(15,20,25,1)',
              fontFamily: 'Inter, sans-serif',
            }}
            style={{marginLeft: 17}}
          />

          <DrawerItem
            label="Report"
            icon={({color, size}) => (
              <Feather
                name="alert-octagon"
                color="rgba(15,20,25,1)"
                size={22}
                style={{marginRight: -18}}
              />
            )}
            labelStyle={{
              fontSize: 16,
              color: 'rgba(15,20,25,1)',
              fontFamily: 'Inter, sans-serif',
            }}
            style={{marginLeft: 17}}
            onPress={() => {
              navigation.navigate('Notification');
            }}
          />
        </View>
        </DrawerContentScrollView>

        <DrawerItem
          label="Logout"
          icon={({color, size}) => (
            <SimpleLineIcons
              name="logout"
              color="rgba(15,20,25,1)"
              size={22}
              style={{marginRight: -18}}
            />
          )}
          labelStyle={{
            fontSize: 16,
            color: 'rgba(15,20,25,1)',
            fontFamily: 'Inter, sans-serif',
          }}
          style={{marginLeft: 17, marginTop: 'auto' }}
        />
        </View>
    );
  };
  return (
    <NavigationContainer independent={true} style={{backgroundColor: 'blue'}}>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: '#FFFFFF',
            width: 210,
            borderBottomEndRadius: 20,
            borderTopEndRadius: 20,
            height: '100%',
          },
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}
        drawerStyle={{
          backgroundColor: 'red',
          width: 10,
        }}
        edgeWidth={100}
        defaultStatus={showDrawer ? 'open' : 'closed'}
        drawerType="front"
        overlayColor="transparent"
        onClose={() => setShowDrawer(false)}
        drawerPosition="left">
        <Drawer.Screen name="m" component={MainNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );

  function MainNavigation() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: [
            {
              display: 'flex',
              elevation: 0, // Remove shadow on Android
              borderTopWidth: 0,
            },
            null,
          ],
        }}
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
        <Tab.Screen name="GalleryTab" component={GalleryTab} />
        <Tab.Screen name="Tournament" component={TournamentPage} />
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="History" component={HistoryPage} />
        <Tab.Screen name="Notification" component={NotificationPage} />
      </Tab.Navigator>
    );
  }
};

export default Navbar;
const styles = StyleSheet.create({
  Navcontainer: {
    flex: 1,
  },
});
