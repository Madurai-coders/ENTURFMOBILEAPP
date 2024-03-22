import {View, Text, StyleSheet, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Header(props) {
  return (
    <View style={styles.notification}>
      <View style={{marginTop: 22, marginLeft: 15, width: '8%'}}>
        <AntDesign name="left" size={24} color={'#000000'}></AntDesign>
      </View>
      <View
        style={{
          width: '80%',
          marginTop: 5,
        }}>
        <Text style={styles.notificationtitle}>{props.Title}</Text>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  notification: {
    height: '8.5%',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomEndRadius: 26,
    borderBottomStartRadius: 26,
    borderBottomLeftRadius: 26,
    // borderLeftWidth:0.5,
    // borderRightWidth:0.5,
    // borderBottomWidth:0.5,
    // borderBottomColor:"rgba(0, 0, 0, 0.25)",
    // borderLeftColor:"rgba(0, 0, 0, 0.25)",
    // borderRightColor:"rgba(0, 0, 0, 0.25)",
    // shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 8,
  },
  notificationtitle: {
    fontFamily: 'Nunito',
    fontWeight: 600,
    fontSize: 19,
    lineHeight: 55,
    letterSpacing: 1,
    color: '#222222',
    alignSelf: 'center',
    // position: 'relative',
    // right: 110,
  },
});
