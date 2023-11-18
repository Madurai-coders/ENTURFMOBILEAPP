import React from 'react';
import {Button} from 'native-base';
import {Image, Text, View, ImageBackground, Pressable} from 'react-native';
import {StyleSheet, ScrollView} from 'react-native';
import BookingDetailCard from '../../subcomponents/BookingDetailCard';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BookingDetail = ({navigation, route}) => {
  return (
    <View style={styles.Transactions}>
      <View style={styles.Group707}>
        <View
          style={{
            height: '10%',
            width: '100%',
            flexDirection: 'row',
          }}>
          <View style={{marginTop: 18, marginLeft: 15, width: '20%'}}>
            <AntDesign name="left" size={25} color={'#3A3A3A'}></AntDesign>
          </View>
          <View
            style={{
              width: '60%',
              marginTop: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.notificationtitle}>BookingHistory</Text>
          </View>
        </View>

        <ScrollView>
          <BookingDetailCard
            uri="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/bq0sbwauwoj-7000%3A3359?alt=media&token=e038ed25-8df8-4896-a56d-d80ecfefaac6"
            GroundName="Hatric Sports Arena"
            Hours="6 hours ago"
            Amount=" ₹1400"
            UpdateAmountStatus="Completed"
            Time="Nov 20, 2022 | 5pm - 6pm"
            Id="rsyqsk861ks8"
            BookingId="igtD861ks8"
            styles={styles.Completed}></BookingDetailCard>
        </ScrollView>
      </View>
    </View>
  );
};
export default BookingDetail;

const styles = StyleSheet.create({
  Transactions: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255,255,255,1)',
  },
 
  Group717: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 70,

    boxSizing: 'border-box',
  },
  notificationtitle: {
    fontFamily: 'Nunito',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 1,
    color: '#222222',
  },

  Back: {
    width: 50,
    height: '30%',
  },
  History: {
    flex: 1,
    flexDirection: 'column',
    color: 'rgba(34,34,34,1)',
    fontSize: 18,
    lineHeight: 26,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 600,
    letterSpacing: 1,
  },
  TabBar: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxSizing: 'border-box',
  },
  Options: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 62,
    paddingRight: 60,
    boxSizing: 'border-box',
  },
  Booking: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'rgba(23,23,23,1)',
    fontSize: 14,
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
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
    textAlign: 'center',
  },
  Group5: {
    width: '100%',
    height: 4,
    marginTop: 20,
  },
  Completed: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    color: 'rgba(95,208,104,1)',
    fontSize: 11,
    lineHeight: 25,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 400,
    textAlign: 'left',
    letterSpacing: 0.3,
   
  },
  Failed: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    color: 'rgba(255,112,112,1)',
    fontSize: 11,
    lineHeight: 25,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 400,
    textAlign: 'left',
    letterSpacing: 0.3,
  },
  Refunded: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    color: 'rgba(255,210,52,1)',
    fontSize: 11,
    lineHeight: 25,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 400,
    textAlign: 'left',
    letterSpacing: 0.3,
  },
});
