import {Image, Text, View, ImageBackground} from 'react-native';
import {StyleSheet} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
function PaymentCard(props) {
  return (
    <>
      <View style={{height: 600}}>
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
      </View>
    </>
  );
}

export default PaymentCard;

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
    width: 385,
    height: 110,
    borderRadius: 6.73,
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
    shadowColor: '#171717',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 10,
    marginLeft: 5,
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
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 160,
    height: '100%',
    boxSizing: 'border-box',
    paddingTop: 30,
  },
  _1400: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    color: 'rgba(40,40,40,1)',
    fontSize: 16,
    lineHeight: 25,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
    textAlign: 'left',
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
    position:"absolute",
    left:15,
  },
});
