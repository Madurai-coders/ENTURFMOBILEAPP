import React from 'react';
import {Button} from 'native-base';
import {Image, Text, View, ImageBackground, Pressable} from 'react-native';
import {StyleSheet, ScrollView} from 'react-native';
import PaymentDetailCard from '../../subcomponents/PaymentDetailCard';
import {useNavigation} from '@react-navigation/native';

const PaymentDetail = ({navigation, route}) => {
  return (
    <View style={styles.Transactions}>
      <View style={styles.Group707}>
        <View style={styles.Group717}>
          {/* <Pressable onPress={() => navigation.navigate('Payment')}> */}
            <Image
              style={styles.Back}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1zqka2hb0fl-6761%3A3121?alt=media&token=cf8d1414-473c-4015-9812-b4ff37b1d64e',
              }}
            />
          {/* </Pressable> */}
          <Text style={styles.History}>PaymentHistory</Text>
        </View>

        <ScrollView>
          <PaymentDetailCard
            Day="Today"
            uri="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dcpdwi7i9dq-6761%3A3048?alt=media&token=ca0b3877-b908-43c5-a577-222dad59d7c5"
            GroundName="Hatric Sports Arena"
            Hours="6 hours ago"
            Amount="₹1400"
            UpdateAmountStatus="Completed"
            Mode="Online"
            Paid="500"
            Id="rsyqsk861ks8"
            BookingId="rsyqsk861ks8"
            styles={styles.Completed}></PaymentDetailCard>
        </ScrollView>
      </View>
    </View>
  );
};
export default PaymentDetail;

const styles = StyleSheet.create({
  Transactions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: 707,
    paddingLeft: 10.16,
    paddingRight: 10.16,
    paddingTop: 10.16,
    paddingBottom: 60.16,
    boxSizing: 'border-box',
    backgroundColor: 'rgba(255,255,255,1)',
  },
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
    height: 70,
    boxSizing: 'border-box',
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
    color: 'rgba(95,208,104,1)',
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
    color: 'rgba(95,208,104,1)',
    fontSize: 11,
    lineHeight: 25,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 400,
    textAlign: 'left',
    letterSpacing: 0.3,
  },
});
