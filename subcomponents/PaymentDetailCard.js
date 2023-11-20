import {Image, Text, View, ImageBackground} from 'react-native';
import {StyleSheet} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import React, {useState} from 'react';
import {Button} from 'native-base';

function PaymentCard(props) {
  return (
    <>
      {/* <View style={{height: 600}}>
        <Text style={styles.Today}>{props.Day}</Text>
        <View style={styles.Deposit}>
          <View style={styles.Frame8}>
            <Image style={styles.Frame7} source={{uri: props.uri}} />
            <View style={styles.Frame6}>
              <Text style={styles.HatricSportsArena}>{props.GroundName}</Text>
              <Text style={styles._6HoursAgo}>{props.Hours}</Text>
            </View>
          </View>
          <View style={styles.Frame9}>
            <Text style={styles._1400}>{props.Amount}</Text>
            <Text style={props.styles}>{props.UpdateAmountStatus}</Text>
          </View>
          <View
            style={{
              height: 0.5,
              width: '100%',
              borderRadius: 1,
              borderWidth: 1.2,
              borderColor: '#A9A9A9',
              borderStyle: 'dotted',
              position: 'absolute',
              left: 0,
              top: 80,
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: 85,
              left: 20,
              flexDirection: 'row',
            }}>
            <Text style={styles.Mode}>
              Mode:
              <Text style={{color: 'rgba(95,208,104,1)'}}> {props.Mode}</Text>
            </Text>
            <Text style={styles.Paid}>
              Advance paid:
              <Text style={{color: 'rgba(95,208,104,1)'}}> {props.Paid}</Text>
            </Text>
          </View>
        </View>
        <View style={styles.PaymentId}>
          <Text style={styles.Id}>
            Payment id :<Text style={{fontWeight: 400}}> {props.Id}</Text>
          </Text>
        </View>
        <View style={styles.PaymentId}>
          <Text style={styles.Id}>
            Booking id :
            <Text style={{fontWeight: 400}}> {props.BookingId}</Text>
          </Text>
          <Fontisto name="copy" size={20} style={{marginLeft: 350}}></Fontisto>
        </View>
        <View style={styles.PaymentId}>
          <Text style={styles.Support}>Contact Enturf Support</Text>
        </View>
      </View> */}

      <View style={styles.Bookingbox}>
        <View style={styles.booking}>
          <View style={styles.history}>
            <View style={{width: '21%'}}>
              <Image
                style={styles.Frame7}
                source={{uri: props.uri}}
                accessibilityLabel="Description of your image for accessibility"
              />
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
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              marginLeft: 15,
              marginTop: 5,
            }}>
            <View style={{width: '35%'}}>
              <Text style={{color: 'black'}}>
                Mode:
                <Text style={{color: 'rgba(95,208,104,1)'}}> {props.Mode}</Text>
              </Text>
            </View>
            <View style={{width: '40%'}}>
              <Text style={{color: 'black'}}>
                Advance Paid:
                <Text style={{color: 'rgba(95,208,104,1)'}}> {props.Mode}</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.PaymentId}>
          <Text style={styles.Id}>
            Payment id :<Text style={{fontWeight: 300}}> {props.Id}</Text>
          </Text>
        </View>
        <View style={styles.PaymentId}>
          <Text style={styles.Id}>
            Booking id :
            <Text style={{fontWeight: 300}}> {props.BookingId}</Text>
          </Text>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Fontisto
              name="copy"
              color="#838383"
              size={20}
              style={{marginLeft: 30}}></Fontisto>
          </View>
        </View>
        <View style={styles.PaymentId}>
          <Text style={styles.Id}>Contact Enturf Support</Text>
        </View>
      </View>
    </>
  );
}

export default PaymentCard;

const styles = StyleSheet.create({
  Bookingbox: {
    width: '100%',
    padding: 4,
  },
  booking: {
    width: '100%',
    height: 110,
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
    height: 75,
  },
  Frame7: {
    width: 50,
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
    shadowRadius: 2,
    elevation: 3,
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
  Mode: {
    color: '#5FD068',
    fontSize: 10,
  },
  PaymentId: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 40,
    borderRadius: 6.73,
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
    shadowColor: '#171717',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 30,
  },
  Id: {
    fontFamily: 'Nunito',
    color: 'black',
    fontWeight: 500,
    marginLeft: 10,
    marginTop: 10,
    width: '80%',
  },
});

// const styles = StyleSheet.create({
//   Today: {
//     color: 'rgba(58,58,58,1)',
//     fontSize: 17,
//     lineHeight: 70,
//     fontFamily: 'Nunito, sans-serif',
//     fontWeight: 700,
//     letterSpacing: 0.4,
//   },

//   Frame7: {
//     width: 50,
//     height: '45%',
//     marginLeft: 10,
//     position: 'absolute',
//     top: 20,
//     left: -10,
//   },

//   Deposit: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 385,
//     height: 110,
//     borderRadius: 6.73,
//     boxSizing: 'border-box',
//     backgroundColor: '#ffffff',
//     shadowColor: '#171717',
//     shadowOffset: {width: 1, height: 1},
//     shadowOpacity: 0.4,
//     shadowRadius: 5,
//     elevation: 10,
//     marginLeft: 5,
//   },
//   Frame8: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 210,
//     height: '100%',
//     boxSizing: 'border-box',
//   },

//   Frame6: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 170,
//     height: '100%',
//     boxSizing: 'border-box',
//   },
//   HatricSportsArena: {
//     color: 'rgba(58,58,58,1)',
//     fontSize: 16,
//     lineHeight: 29,
//     fontFamily: 'Nunito, sans-serif',
//     fontWeight: 700,
//     letterSpacing: 0.4,
//     position: 'absolute',
//     top: 20,
//     left: 40,
//   },
//   _6HoursAgo: {
//     justifyContent: 'flex-start',
//     textAlign: 'left',
//     alignSelf: 'flex-start',
//     color: 'rgba(58,58,58,1)',
//     fontSize: 14,
//     lineHeight: 20,
//     fontFamily: 'Nunito, sans-serif',
//     fontWeight: 400,
//     letterSpacing: 0.2,
//     marginLeft: 40,
//   },
//   Frame9: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'flex-end',
//     width: 160,
//     height: '100%',
//     boxSizing: 'border-box',
//     paddingTop: 30,
//   },
//   _1400: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'flex-end',
//     color: 'rgba(40,40,40,1)',
//     fontSize: 16,
//     lineHeight: 25,
//     fontFamily: 'Nunito, sans-serif',
//     fontWeight: 700,
//     textAlign: 'left',
//     letterSpacing: 0.4,
//     position: 'absolute',
//     top: 30,
//   },
//   Mode: {
//     color: 'black',
//     fontFamily: 'Nunito',
//   },
//   Paid: {
//     color: 'black',
//     marginLeft: 50,
//     fontFamily: 'Nunito',
//   },

//   PaymentId: {

//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 385,
//     height: 40,
//     borderRadius: 6.73,
//     boxSizing: 'border-box',
//     backgroundColor: '#ffffff',
//     shadowColor: '#171717',
//     shadowOffset: {width: 1, height: 1},
//     shadowOpacity: 0.4,
//     shadowRadius: 5,
//     elevation: 10,
//     marginLeft: 5,
//     marginTop: 30,
//   },
//   Id: {
//     fontFamily: 'Nunito',
//     color: 'black',
//     fontWeight: 500,
//     position: 'absolute',
//     left: 15,
//   },
//   copy: {
//     position: 'absolute',
//     left: 60,
//   },
//   Support: {
//     fontFamily: 'Nunito',
//     fontWeight: 500,
//     fontSize: 13,
//     lineHeight: 16,
//     color: '#353535',
//     position:"absolute",
//     left:15,
//   },
// });
