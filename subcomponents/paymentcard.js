import {Image, Text, View, ImageBackground} from 'react-native';
import {StyleSheet} from 'react-native';
function PaymentCard(props) {
  return (
    <>
      <Text style={styles.Today}>{props.Day}</Text>
      <View style={styles.Deposit}>
        <View style={styles.Frame8}>
          <Image style={styles.Frame7} source={{ uri: props.uri }} />
          <View style={styles.Frame6}>
            <Text style={styles.HatricSportsArena}>{props.GroundName}</Text>
            <Text style={styles._6HoursAgo}>{props.Hours}</Text>
          </View>
        </View>
        <View style={styles.Frame9}>
          <Text style={styles._1400}>{props.Amount}</Text>
          <Text style={props.styles}>{props.UpdateAmountStatus}</Text>


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
    height: '62%',
    marginTop: 5,
    marginLeft: 10,
  },

  Deposit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 385,
    height: 80,
    borderRadius: 6.73,
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
    shadowColor: '#171717',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
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
    lineHeight: 25,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
    letterSpacing: 0.4,
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
    marginLeft: 10,
  },
  Frame9: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 160,
    height: '100%',
    boxSizing: 'border-box',
    paddingTop:30,
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
  },
 
 
});
