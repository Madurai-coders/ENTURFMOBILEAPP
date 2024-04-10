import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

function Header(props) {
  return (
    <View style={styles.notification}>
      <TouchableOpacity
      onPress={props.onPress}
        style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View
          style={{
            width: '5%',
            alignSelf: 'center',
          }}>
          <AntDesign name="left" size={24} color={'black'}></AntDesign>
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
          }}>
          <Text style={styles.notificationtitle}>{props.Title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  notification: {
    height: '8.5%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
