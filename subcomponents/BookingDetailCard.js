import {Image, Text, View, ImageBackground} from 'react-native';
import {StyleSheet} from 'react-native';
import {Button} from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState} from 'react';

function BookingDetailCard(props) {
  const [Cancel, setCancel] = useState(false);

  return (
    <>
      <View style={{height: 600,marginTop:30}}>
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
            <Text style={styles.Time}>{props.Time}</Text>
            <Button style={styles.cancel} onPress={() => setCancel(true)}>
              <Text style={{fontSize: 11, color: '#656565'}}>Cancel</Text>
            </Button>
          </View>
        </View>
        <View style={styles.PaymentId}>
          <Text style={styles.Id}>
            Booking id :<Text style={{fontWeight: 400}}> {props.Id}</Text>
          </Text>
        </View>
        <View style={styles.PaymentId}>
          <Text style={styles.Id}>
            Payment id :
            <Text style={{fontWeight: 400}}> {props.BookingId}</Text>
          </Text>
          <Fontisto name="copy" size={20} style={{marginLeft: 350}}></Fontisto>
        </View>
        <View style={styles.PaymentId}>
          <Text style={styles.Support}>Contact Enturf Support</Text>
        </View>
        {Cancel && (
          <>
            <View style={styles.overlay}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                 
                  height:50,
                }}>
                <MaterialCommunityIcons
                  name="account-cancel"
                  size={40}
                  style={{
                    color: 'black',
                  }}></MaterialCommunityIcons>
                <Text style={styles.slot}>Cancel Slote</Text>
                <Text style={styles.sure}>Are You Sure ?</Text>
              </View>
              <View style={styles.BookingBox}>
                <Text style={styles.bookingtxt}>Booking Amount</Text>
                <View style={styles.amount}>
                  <Text style={{color: 'black'}}>1200</Text>
                </View>
              </View>
              <View style={styles.BookingBox1}>
                <Text style={styles.bookingtxt}>Cancellation Charge</Text>
                <View style={styles.cancelamount}>
                  <Text style={{color: 'black'}}>200</Text>
                </View>
              </View>
              <View style={styles.BookingBox2}>
                <Text style={styles.bookingtxt}>Refundable Amount</Text>
                <View style={styles.refundamount}>
                  <Text style={{color: 'black'}}>1000</Text>
                </View>
              </View>
              <View style={styles.button}>
                <Button
                  onPress={() => setCancel(false)}
                  style={styles.cancelbtn}>
                  <Text style={styles.btntxt}>Cancel</Text>
                </Button>
                <Button onPress={() => setCancel(false)} style={styles.yesbtn}>
                  <Text style={styles.btntxt1}>Yes</Text>
                </Button>
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
  Today: {
    color: 'rgba(58,58,58,1)',
    fontSize: 17,
    lineHeight: 70,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
    letterSpacing: 0.4,
  },

  Frame7: {
    width: 50,
    height: '45%',
    marginLeft: 10,
    position: 'absolute',
    top: 20,
    left: -10,
  },

  Deposit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 110,
    borderRadius: 6.73,
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
    shadowColor: '#171717',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 10,
    marginLeft: 1,
    marginRight: 1,
  },
  Frame8: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 210,
    height: '100%',
    boxSizing: 'border-box',
  },

  Frame6: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,
    height: '100%',
    boxSizing: 'border-box',
  },
  HatricSportsArena: {
    color: 'rgba(58,58,58,1)',
    fontSize: 16,
    lineHeight: 29,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
    letterSpacing: 0.4,
    position: 'absolute',
    top: 20,
    left: 40,
  },
  _6HoursAgo: {
    justifyContent: 'flex-start',
    textAlign: 'left',
    alignSelf: 'flex-start',
    color: 'rgba(58,58,58,1)',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 400,
    letterSpacing: 0.2,
    marginLeft: 40,
  },
  Frame9: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: 100,
    height: '100%',
    boxSizing: 'border-box',
  },
  _1400: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    color: 'rgba(40,40,40,1)',
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
    letterSpacing: 0.4,
    position: 'absolute',
    top: 30,
  },
  Mode: {
    color: 'black',
    fontFamily: 'Nunito',
  },
  Paid: {
    color: 'black',
    marginLeft: 50,
    fontFamily: 'Nunito',
  },

  PaymentId: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 385,
    height: 40,
    borderRadius: 6.73,
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
    shadowColor: '#171717',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 10,
    marginLeft: 5,
    marginTop: 30,
  },
  Id: {
    fontFamily: 'Nunito',
    color: 'black',
    fontWeight: 500,
    position: 'absolute',
    left: 15,
  },
  copy: {
    position: 'absolute',
    left: 60,
  },
  Support: {
    fontFamily: 'Nunito',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
    color: '#353535',
    position: 'absolute',
    left: 15,
  },
  Time: {
    fontFamily: 'Nunito',
    fontWeight: 500,
    letterSpacing: 0.025,
    color: 'black',
    fontSize: 12,
  },
  cancel: {
    paddingTop: 3,
    paddingBottom: 3,
    fontSize: 10,
    backgroundColor: '#F1F1F1',
    borderRadius: 4.59184,
    marginLeft: 120,
  },

  slot: {
    position: 'absolute',
    top: 63,
    fontFamily: 'Nunito',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 16,
    color: 'black',
  },
  sure: {
    position: 'absolute',
    top: 90,
    fontFamily: 'Nunito',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 16,
    color: 'black',
  },
  BookingBox: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 20,
    position: 'absolute',
    top: 150,
    flexDirection: 'row',
    marginLeft: 10,
  },
  BookingBox1: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 20,
    width: 385,
    position: 'absolute',
    top: 180,
    flexDirection: 'row',
    marginLeft: 10,
  },
  BookingBox2: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 20,
    width: 385,
    position: 'absolute',
    top: 210,
    flexDirection: 'row',
    marginLeft: 10,
  },
  bookingtxt: {
    fontFamily: 'Nunito',
    fontWeight: 400,
    fontSize: 13,
    marginLeft: 15,
    color: 'black',
    alignSelf: 'flex-start',
  },
  cancelamount: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: 150,
  },
  refundamount: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: 152,
  },
  amount: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: 170,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    position: 'absolute',
    top: 260,
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
    paddingLeft:40,
    paddingRight: 40,
    fontSize: 10,
    backgroundColor: '#5FD068',
    borderRadius: 4.59184,
    marginLeft:15
  },
  btntxt:{
    color: '#5F5F5F',
    fontfamily: 'Nunito',
    fontstyle: 'normal',
    fontSize: 12,
  },
  btntxt1:{
    color: 'white',
    fontfamily: 'Nunito',
    fontstyle: 'normal',
    fontSize: 12,
  },
  overlay: {
    height: 320,
    flex: 1,
    position: 'absolute',
    left: 13,
    top: 120,
    opacity: 1.6,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: 'rgb(255,255,255)',
    shadowColor: '#171717',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 10,
    width: 320,
  },
});
