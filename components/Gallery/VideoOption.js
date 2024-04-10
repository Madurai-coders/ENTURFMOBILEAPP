import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../../subcomponents/Header';
import {useNavigation} from '@react-navigation/native';

const VideoOption = () => {
  const navigation = useNavigation();

  const Choosesport = () => {
    navigation.navigate('SelectSport');
  };
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: '#FFFFFF'}}>
      <Header Title="Gallery"></Header>
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={Choosesport}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Image
              source={require('../../assets/Gallery/Live.png')}
              style={styles.liveimg}
            />
            <Text style={styles.livetxt}>Go Live</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Image
              source={require('../../assets/Gallery/Video.png')}
              style={styles.liveimg}
            />
            <Text style={styles.livetxt}>My Videos</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VideoOption;

const styles = StyleSheet.create({
  liveimg: {
    width: 90,
    height: 90,
  },
  livetxt: {
    color: 'black',
  },
});
