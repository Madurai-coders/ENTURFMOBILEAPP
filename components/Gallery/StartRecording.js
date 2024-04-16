import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Header from '../../subcomponents/Header';
import {useNavigation} from '@react-navigation/native';

const StartRecording = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: '#FFFFFF'}}>
      <Header Title="Gallery" onPress={handleGoBack} name="left"></Header>
      <View style={styles.recordingbox}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/Gallery/button.png')}
            style={styles.btnimg}
          />
          <Text style={styles.btntxt}>Go</Text>
        </TouchableOpacity>

        <Text style={styles.starttxt}>Start Recording now</Text>
      </View>
    </View>
  );
};

export default StartRecording;
const styles = StyleSheet.create({
  starttxt: {
    color: 'black',
  },
  recordingbox: {
    height: '80%',
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative', // Needed for absolute positioning
  },
  btnimg: {
    resizeMode: 'cover', // Adjust based on your image aspect ratio
  },
  btntxt: {
    position: 'absolute',
    top: 34,
    color: 'white', // Text color
    fontSize: 24, // Text size
    fontWeight: 'bold', // Text weight
    alignSelf: 'center',
  },
});
