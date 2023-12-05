import React from 'react';
// import {Button} from 'native-base';
import {Image, Text, View, ImageBackground, Pressable,Button} from 'react-native';
import {StyleSheet, ScrollView} from 'react-native';
import PaymentCard from '../../subcomponents/paymentcard';
import { useNavigation } from '@react-navigation/native';
import PaymentDetail from './PaymentDetail';



const Payment = ({navigation}) => {

  return (
    <View style={styles.Transactions}>
     
  

      <ScrollView>
        <PaymentCard
          Day="Today"
          uri="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dcpdwi7i9dq-6761%3A3048?alt=media&token=ca0b3877-b908-43c5-a577-222dad59d7c5"
          GroundName="Hatric Sports Arena"
          Hours="6 hours ago"
          Amount="₹1400"
          UpdateAmountStatus="Completed"
          styles={styles.Completed}></PaymentCard>

        <PaymentCard
          uri="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dcpdwi7i9dq-6761%3A3096?alt=media&token=f2fd3023-8455-4e17-83d1-f5a220e02894"
          GroundName="Hatric Sports Arena"
          Hours="13 hours ago"
          Amount="₹1400"
          UpdateAmountStatus="Failed"
          styles={styles.Failed}></PaymentCard>

        <PaymentCard
          uri="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dcpdwi7i9dq-6761%3A3096?alt=media&token=f2fd3023-8455-4e17-83d1-f5a220e02894"
          GroundName="Hatric Sports Arena"
          Hours="20 hours ago"
          Amount="₹1400"
          UpdateAmountStatus="Refunded"
          styles={styles.Refunded}></PaymentCard>

        <View style={{marginTop: 20}}>
          <PaymentCard
            Day="Yesterday"
            uri="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dcpdwi7i9dq-6761%3A3048?alt=media&token=ca0b3877-b908-43c5-a577-222dad59d7c5"
            GroundName="Hatric Sports Arena"
            Hours="Dec 25,2022"
            Amount="₹1400"
            UpdateAmountStatus="Completed"
            styles={styles.Completed}></PaymentCard>

          <PaymentCard
            uri="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dcpdwi7i9dq-6761%3A3048?alt=media&token=ca0b3877-b908-43c5-a577-222dad59d7c5"
            GroundName="Hatric Sports Arena"
            Hours="Dec 25,2022"
            Amount="₹1400"
            UpdateAmountStatus="Completed"
            styles={styles.Completed}></PaymentCard>
        </View>
        <View style={{marginTop: 20, marginBottom: 60}}>
          <PaymentCard
            Day="Dec 25,2022"
            uri="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dcpdwi7i9dq-6761%3A3048?alt=media&token=ca0b3877-b908-43c5-a577-222dad59d7c5"
            GroundName="Hatric Sports Arena"
            Hours="Dec 25,2022"
            Amount="₹1400"
            UpdateAmountStatus="Completed"
            styles={styles.Completed}></PaymentCard>
        </View>
      </ScrollView>
    </View>
  );
};
export default Payment;

const styles = StyleSheet.create({
  Transactions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10.16,
    boxSizing: 'border-box',
    backgroundColor: 'rgba(255,255,255,1)',
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
    justifyContent: 'flex-end',
    color: 'rgba(95,208,104,1)',
    fontSize: 11,
    lineHeight: 15,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 400,
    textAlign: 'right',
    letterSpacing: 0.3,
    marginRight:16,
  },
  Failed: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    color: 'rgba(255,112,112,1)',
    fontSize: 11,
    lineHeight: 15,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 400,
    textAlign: 'right',
    letterSpacing: 0.3,
    marginLeft:5

  },
  Refunded: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    color: 'rgba(255,210,52,1)',
    fontSize: 11,
    lineHeight: 15,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 400,
    textAlign: 'right',
    letterSpacing: 0.3,
    marginRight:10
  },
});
