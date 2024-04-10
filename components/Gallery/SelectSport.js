import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Header from '../../subcomponents/Header';
import {useNavigation} from '@react-navigation/native';

const SelectSport = () => {
  const navigation = useNavigation();

  const StartRecording = () => {
    navigation.navigate('StartRecording');
  };
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: '#FFFFFF'}}>
      <Header Title="Gallery"></Header>
      <Text style={styles.choosetxt}>Choose Sports</Text>
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <TouchableOpacity onPress={StartRecording}>
          <View style={styles.sportsbox}>
            <Image
              source={require('../../assets/Gallery/Football.png')}
              style={styles.fbimg}
            />
            <Text style={styles.fbtxt}>Football</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.sportsbox}>
            <Image
              source={require('../../assets/Gallery/Cricket.png')}
              style={styles.fbimg}
            />
            <Text style={styles.fbtxt}>Cricket</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectSport;
const styles = StyleSheet.create({
  choosetxt: {
    color: '#1D1D1D',
    fontSize: 20,
    fontWeight: 500,
    marginLeft: 20,
    marginTop: 30,
  },
  sportsbox: {
    width: 152,
    height: 152,
    paddingLeft: 29,
    paddingRight: 36,
    paddingTop: 16,
    paddingBottom: 17,
    borderRadius: 17,
    backgroundColor: 'white',
    elevation: 4,
    alignItems: 'center',
  },
  fbimg: {
    width: 100,
    height: 100,
  },
  fbtxt: {
    color: 'black',
    fontWeight: 400,
    lineHeight:25,
    alignSelf:"center"
  },
});