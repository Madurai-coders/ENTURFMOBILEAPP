import {View, Text, StyleSheet, Image} from 'react-native';

function NotificationCard(props) {
  return (
    <View style={{width: '100%', height: '90%', padding: 12, marginTop: 15}}>
      <Text style={styles.tdy}>Today</Text>
      <View style={styles.notfnbox}>
        <View style={{width: '14%', justifyContent: 'center', marginLeft: 5}}>
          <Image style={styles.notfnimg} source={props.source} />
        </View>
        <View style={{width: '70%', flexDirection: 'column', marginTop: 17}}>
          <View style={{width: '70%', flexDirection: 'row'}}>
            <Text style={styles.notfntxt}>Booking confirmed on </Text>
            <Text style={styles.notfntxt1}>{props.groundname}</Text>
          </View>
          <View>
            <Text style={styles.notfndate}>Date: {props.bookingdate}</Text>
          </View>
        </View>
        <View 
          style={{
            width: '13%',
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginTop: 40,
          }}>
          <Text style={styles.notfntime}>{props.notfntime}</Text>
        </View>
      </View>
    </View>
  );
}

export default NotificationCard;

const styles = StyleSheet.create({
  tdy: {
    fontFamily: 'Nunito',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 0.420561,
    color: '#3A3A3A',
  },
  notfnbox: {
    width: '100%',
    height: 73,
    marginTop: 10,
    flexDirection: 'row',
    borderRadius: 6.73,
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
    shadowColor: '#171717',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 10,
  },
  notfntxt: {
    fontFamily: 'Nunito',
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0.420561,
    color: 'rgba(0, 0, 0, 0.9)',
  },
  notfntxt1: {
    fontFamily: 'Nunito',
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0.420561,
    color: '#000000',
  },
  notfndate: {
    fontFamily: 'Nunito',
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 22,
    letterSpacing: 0.420561,
    color: 'rgba(0, 0, 0, 0.9)',
  },
  notfntime: {
    fontFamily: 'Nunito',
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 13,
    color: '#676767',
  },
});
