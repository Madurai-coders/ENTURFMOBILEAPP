import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../../subcomponents/Header';
const OTPSuccess = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  const Personalinfo = () => {
    navigation.navigate('Personalinfo');
   
  };
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: '#FFFFFF'}}>
      <Header Title="Login" onPress={handleGoBack}></Header>
      <View
        style={{height: '80%', justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../../assets/Login/Success.png')} style={{width:100,height:100}}></Image>
        <Text style={styles.successtxt}>Success!</Text>
        <Text style={styles.successdes}>Congratulations! Your OTP has </Text>
        <Text style={styles.successdes}>been securely authenticated</Text>
        <TouchableOpacity style={styles.button} onPress={Personalinfo}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OTPSuccess;

const styles = StyleSheet.create({
  successtxt: {
    color: 'black',
    marginTop: 40,
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 5,
    marginBottom: 15,
  },
  successdes: {
    color: '#B6B6B6',
    fontSize: 16,
    lineHeight: 18,
  },
  button: {
    backgroundColor: '#79db81',
    width: '90%',
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'center',
    borderRadius: 13,
    marginTop: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 600,
  },
});
