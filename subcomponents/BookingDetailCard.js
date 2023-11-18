import {Image, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Button} from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState} from 'react';

function BookingDetailCard(props) {
  const [Cancel, setCancel] = useState(false);

  return (
    <>
      <View style={styles.Bookingbox}>
        <View style={styles.booking}>
          <View style={styles.history}>
            <View style={{width: '21%'}}>
              <Image style={styles.Frame7} source={{uri: props.uri}} />
            </View>
            <View
              style={{
                width: '61%',
                flexDirection: 'column',
                marginTop: 18,
              }}>
              <Text style={styles.HatricSportsArena}>{props.GroundName}</Text>
              <Text style={styles._6HoursAgo}>{props.Hours}</Text>
            </View>
            <View
              style={{
                width: '20%',
                flexDirection: 'column',
              }}>
              <Text style={styles._1400}>{props.Amount}</Text>
              <Text style={props.styles}>{props.UpdateAmountStatus}</Text>
            </View>
          </View>

          <View
            style={{
              height: 0.5,
              width: '100%',
              borderRadius: 1,
              borderWidth: 0.9,
              borderColor: '#A9A9A9',
              borderStyle: 'dashed',
            }}
          />
          <View style={{flexDirection: 'row', width: '100%'}}>
            <Text style={styles.Time}>{props.Time}</Text>
            <Button style={styles.cancel} onPress={() => setCancel(true)}>
              <Text style={{fontSize: 11, color: '#656565'}}>Cancel</Text>
            </Button>
          </View>
        </View>
        {Cancel && (
          <>
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 25,
              }}>
              <View style={styles.overlay}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 125,
                  }}>
                  {/* <Image source={require('../assets/General/user.png')}></Image> */}
                  <MaterialCommunityIcons
                    name="account-cancel"
                    size={40}
                    style={{
                      color: 'black',
                    }}></MaterialCommunityIcons>
                  <Text style={styles.slot}>Cancel Slot</Text>
                  <Text style={styles.sure}>Are You Sure ?</Text>
                </View>
                <View
                  style={{height: 130, width: '100%', flexDirection: 'row'}}>
                  <View
                    style={{
                      flexDirection: 'column',
                      width: '80%',
                      paddingLeft: 20,
                    }}>
                    <Text style={styles.bookingtxt}>Booking Amount</Text>
                    <Text style={styles.bookingtxt}>Cancellation Charge</Text>
                    <Text style={styles.bookingtxt}>Refundable Amount</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      width: '20%',
                      alignContent: 'center',
                      alignItems: 'flex-end',
                      paddingRight: 15,
                    }}>
                    <Text style={styles.bookingtxt}>1200</Text>
                    <Text style={styles.bookingtxt}>200</Text>
                    <Text style={styles.bookingtxt}>1000</Text>
                  </View>
                </View>
                <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                  <Button
                    onPress={() => setCancel(false)}
                    style={styles.cancelbtn}>
                    <Text style={styles.btntxt}>Cancel</Text>
                  </Button>
                  <Button
                    onPress={() => setCancel(false)}
                    style={styles.yesbtn}>
                    <Text style={styles.btntxt1}>Yes</Text>
                  </Button>
                </View>
              </View>
            </View>
          </>
        )}
      </View>
    </>
  );
}

export default BookingDetailCard;

const styles = StyleSheet.create({
  Bookingbox: {
    width: '100%',
    padding: 10,
  },
  booking: {
    width: '100%',
    height: 120,
    marginTop: 20,
    borderRadius: 6.73,
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
    shadowColor: '#171717',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 10,
  },
  history: {
    flexDirection: 'row',
    height: 80,
  },
  Frame7: {
    width: 52,
    height: '65%',
    marginTop: 15,
    marginLeft: 10,
  },

  HatricSportsArena: {
    color: 'rgba(58,58,58,1)',
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
    letterSpacing: 0.4,
  },
  _6HoursAgo: {
    color: 'rgba(58,58,58,1)',
    fontSize: 14,
    lineHeight: 25,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 400,
    letterSpacing: 0.2,
  },

  _1400: {
    color: 'rgba(40,40,40,1)',
    fontSize: 16,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
    textAlign: 'left',
    letterSpacing: 0.4,
    marginTop: 20,
  },
  Time: {
    fontFamily: 'Nunito',
    fontWeight: 500,
    letterSpacing: 0.025,
    color: 'black',
    fontSize: 12,
    width: '80%',
    marginTop: 8,
    marginLeft: 5,
  },
  cancel: {
    paddingTop: 4.5,
    paddingBottom: 4.5,
    fontSize: 10,
    backgroundColor: '#F1F1F1',
    borderRadius: 4.59184,
    marginTop: 7,
  },

  slot: {
    fontFamily: 'Nunito',
    fontWeight: 500,
    fontSize: 14,
    color: 'black',
    lineHeight: 30,
  },
  sure: {
    marginTop: 10,
    fontFamily: 'Nunito',
    fontWeight: 400,
    fontSize: 12,
    color: 'black',
    lineHeight: 15,
  },
  overlay: {
    flex: 1,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#171717',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    width: 320,
    height: 305,
    marginLeft: 5,
  },
  bookingtxt: {
    fontFamily: 'Nunito',
    fontWeight: 400,
    fontSize: 13,
    color: 'black',
    lineHeight: 35,
  },

  cancelbtn: {
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#F1F1F1',
    borderRadius: 4.59184,
  },
  yesbtn: {
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 10,
    backgroundColor: '#5FD068',
    borderRadius: 4.59184,
    marginLeft: 35,
  },
  btntxt: {
    color: '#5F5F5F',
    fontFamily: 'Nunito',
    fontSize: 12,
  },
  btntxt1: {
    color: 'white',
    fontFamily: 'Nunito',
    fontSize: 12,
  },
});
