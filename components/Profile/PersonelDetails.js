import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Text,
} from 'react-native';
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const PersonelDetails = ({navigation, onPress}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);

  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleEmailFocus = () => setIsEmailFocused(true);
  const handleEmailBlur = () => setIsEmailFocused(false);

  const handlePhoneFocus = () => setIsPhoneFocused(true);
  const handlePhoneBlur = () => setIsPhoneFocused(false);

  const placeholderPosition = {
    top: isFocused || text ? -20 : 10,
    fontSize: isFocused || text ? 14 : 15,
  };

  const emailPlaceholderPosition = {
    top: isEmailFocused || email ? -10 : 10,
    fontSize: isEmailFocused || email ? 14 : 15,
  };

  const phonePlaceholderPosition = {
    top: isPhoneFocused || phone ? -20 : 10,
    fontSize: isPhoneFocused || phone ? 14 : 15,
  };

  return (
    <>
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <View style={styles.container}>
          <AnimatedTextInput
            style={styles.textInput}
            value={text}
            onChangeText={setText}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <AnimatedTextInput
            style={[styles.textInput, {marginTop: 30}]}
            value={email}
            onChangeText={setEmail}
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <AnimatedTextInput
            style={[styles.textInput, {marginTop: 30}]}
            value={phone}
            onChangeText={setPhone}
            onFocus={handlePhoneFocus}
            onBlur={handlePhoneBlur}
            keyboardType="phone-pad"
          />
          <Animated.Text style={[styles.placeholder, placeholderPosition]}>
            Name
          </Animated.Text>
          <Animated.Text
            style={[
              styles.placeholder,
              emailPlaceholderPosition,
              {marginTop: 75},
            ]}>
            Email Id
          </Animated.Text>
          <Animated.Text
            style={[
              styles.placeholder,
              phonePlaceholderPosition,
              {marginTop: 150},
            ]}>
            Phone No.
          </Animated.Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default PersonelDetails;
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 5,
  },
  placeholder: {
    position: 'absolute',
    left: 0,
    color: 'rgba(51,51,51,1)',
    fontSize: 18,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
  },

  btn: {
    backgroundColor: '#5FD068',
    padding: 10,
    borderRadius: 5,
    margin: 45,
    borderRadius: 32,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
  },
});
