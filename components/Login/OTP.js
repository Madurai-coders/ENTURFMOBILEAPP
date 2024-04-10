import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../../subcomponents/Header';
import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef} from 'react';

const OTP = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  //   OTP

  const [otp, setOTP] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  // Function to handle OTP input change for a specific index
  const handleOTPChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    // Focus next input field if not the last one
    if (index < otp.length - 1 && value) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Function to handle backspace press and focus the previous input field
  const handleBackspace = (index, value) => {
    if (value === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  const isInputGreen = value => {
    return value !== '';
  };
  // Render 4 TextInput components for OTP input
  const renderInputs = () => {
    return otp.map((value, index) => (
      <TextInput
        key={index}
        ref={ref => (inputRefs.current[index] = ref)}
        style={[styles.input, isInputGreen(value) && styles.inputGreen]}
        keyboardType="numeric"
        maxLength={1}
        value={value}
        onChangeText={text => handleOTPChange(index, text)}
        onKeyPress={({nativeEvent}) => handleBackspace(index, nativeEvent.key)}
      />
    ));
  };

  //   OTPSuccess

  const OTPSuccess = () => {
    navigation.navigate('OTPSuccess');
  };
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: '#FFFFFF'}}>
      <Header Title="Login" onPress={handleGoBack}></Header>
      <View style={{flexDirection: 'column', margin: 20}}>
        <Text style={styles.vcode}>Verification Code</Text>
        <Text style={styles.vcodedes}>
          Please enter verification code sent to your mobile
        </Text>
      </View>

      <View style={styles.container}>{renderInputs()}</View>
      <View
        style={{
          flexDirection: 'column',
          margin: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={styles.OTPbutton} onPress={OTPSuccess}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
        <Text style={{marginTop: 16}}>
          <Text style={styles.receive}>If you didn’t receive a code! </Text>
          <Text style={styles.resend}>Resend</Text>
        </Text>
      </View>
    </View>
  );
};
export default OTP;
const styles = StyleSheet.create({
  vcode: {
    color: '#323232',
    fontWeight: 600,
    fontSize: 20,
  },
  vcodedes: {
    color: '#a6a6a6',
    fontWeight: 400,
    fontSize: 16,
    marginTop: 10,
    width: '80%',
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 17,
    width: '16%',
    height: '100%',
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    marginTop: 10,
  },
  inputGreen: {
    borderColor: '#79db81',
  },
  OTPbutton: {
    backgroundColor: '#79db81',
    width: '100%',
    paddingTop: 15,
    paddingBottom: 15,
    alignSelf: 'center',
    borderRadius: 13,
    marginTop: 35,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 600,
  },
  receive: {
    color: '#8a8a8a',
    fontSize: 15,
    fontWeight: 300,
  },
  resend: {
    color: '#ff8282',
    fontWeight: 400,
    fontSize: 15,
  },
});
