import Payment from '../Payment/Payment';
import Booking from '../Booking/Booking';
import Swiper from 'react-native-swiper';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'native-base';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

function HomeScreen() {
  return (
    <View style={styles.Group707}>
      {/* <View style={styles.TabBar}>
      <View style={styles.Options}> */}
      <Booking />
    </View>
    // </View>
    // </View>
  );
}
function Setting() {
  return (
    <View style={styles.Group707}>
      <Payment />
    </View>
  );
}
const Tab = createMaterialTopTabNavigator();

const BookingPayment = ({navigation, route}) => {
  const [keyNumber, setKeyNumber] = useState(0);

  return (
    <>
      {/* <View style={{height: 100, backgroundColor: 'rgba(255,255,255,1)'}}> */}
      {/* <BookingPaymentTitle /> */}
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: 15,
              fontFamily: 'Nunito',
              fontWeight: 700,
              color: 'rgba(23,23,23,1)',
              textTransform: 'capitalize',
              width:"100%"
            },
            tabBarItemStyle: {marginTop: 20, marginBottom: 13},
            tabBarStyle: {backgroundColor: 'white'},
            tabBarIndicatorStyle: {backgroundColor: '#5FD068',width:"50%"},
          }}>
          <Tab.Screen name="Booking" component={HomeScreen}></Tab.Screen>
          <Tab.Screen name="Payment" component={Setting}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
      {/* </View> */}
      {/* <View style={{flexDirection: 'row'}}>
        <Button
          style={{
            marginLeft: 20,
            marginRight: 50,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
          onPress={() => swiperRef.current?.scrollBy(-1)}>
          prev
        </Button>
        <Button
          style={{marginLeft: 170, marginRight: 20}}
          onPress={() => swiperRef.current?.scrollBy(1)}>
          next
        </Button>
      </View> */}
      {/* <Swiper
        vertical
        ref={swiperRef}
        slidesPerView={2}
        onBeforeInit={swiper => {
          swiperRef.current = swiper;
        }}
        loop={false}
        style={styles.wrapper}
        dot={<View style={{display: 'none'}} />}
        activeDot={<View style={{display: 'none'}} />}>
        <View style={styles.slide1}>
          <Booking />
        </View>
        <View style={styles.slide2}>
          <Payment />
        </View>
      </Swiper> */}
    </>
  );
};

export default BookingPayment;
const styles = StyleSheet.create({
  Group707: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
  },
  Group717: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
  },

  History: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 100,
    color: 'rgba(34,34,34,1)',
    fontSize: 22,
    lineHeight: 26,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 600,
    letterSpacing: 1,
  },
  TabBar: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingRight: 0.44,
    paddingBottom: 0.02,
    boxSizing: 'border-box',
  },
  Options: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 62,
    paddingRight: 60,
    paddingBottom: 1,
    boxSizing: 'border-box',
  },
  Booking: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'rgba(23,23,23,1)',
    fontSize: 14,
    lineHeight: 100,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
    textAlign: 'center',
  },
  Payment: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'rgba(23,23,23,1)',
    fontSize: 14,
    lineHeight: 100,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
    textAlign: 'center',
  },
});
