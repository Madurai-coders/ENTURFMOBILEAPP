import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const Address = ({navigation}) => {
  const [addnew, setAddnew] = useState(false);
  const handleAddNewClick = () => {
    setAddnew(!addnew);
  };

  const [isDoornoFocused, setIsDoornoFocused] = useState(false);
  const [isStreetFocused, setIsStreetFocused] = useState(false);
  const [isDistrictFocused, setIsDistrictFocused] = useState(false);
  const [isStateFocused, setIsStateFocused] = useState(false);
  const [isPincodeFocused, setIsPincodeFocused] = useState(false);
  const [isAddressFocused, setIsAddressFocused] = useState(false);

  const [doorno, setDoorno] = useState('');
  const [street, setStreet] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');

  const handleDoornoFocus = () => setIsDoornoFocused(true);
  const handleDoornoBlur = () => setIsDoornoFocused(false);

  const handleStreetFocus = () => setIsStreetFocused(true);
  const handleStreetBlur = () => setIsStreetFocused(false);

  const handleDistrictFocus = () => setIsDistrictFocused(true);
  const handleDistrictBlur = () => setIsDistrictFocused(false);

  const handleStateFocus = () => setIsStateFocused(true);
  const handleStateBlur = () => setIsStateFocused(false);

  const handlePincodeFocus = () => setIsPincodeFocused(true);
  const handlePincodeBlur = () => setIsPincodeFocused(false);

  const handleAddressFocus = () => setIsAddressFocused(true);
  const handleAddressBlur = () => setIsAddressFocused(false);

  const placeholderPosition = {
    top: isDoornoFocused || doorno ? -20 : 10,
    fontSize: isDoornoFocused || doorno ? 14 : 15,
  };

  const StreetplaceholderPosition = {
    top: isStreetFocused || street ? -20 : 10,
    fontSize: isStreetFocused || street ? 14 : 15,
  };

  const DistrictplaceholderPosition = {
    top: isDistrictFocused || district ? -20 : 10,
    fontSize: isDistrictFocused || district ? 14 : 15,
  };

  const PincodeplaceholderPosition = {
    top: isPincodeFocused || pincode ? -20 : 10,
    fontSize: isPincodeFocused || pincode ? 14 : 15,
  };

  const StateplaceholderPosition = {
    top: isStateFocused || state ? -20 : 10,
    fontSize: isStateFocused || state ? 14 : 15,
  };

  const AddressplaceholderPosition = {
    top: isAddressFocused || address ? -20 : 10,
    fontSize: isAddressFocused || address ? 14 : 15,
  };

  return (
    <>
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <TouchableOpacity style={styles.addnewbox} onPress={handleAddNewClick}>
          <Text style={styles.addnew}>Add New</Text>
        </TouchableOpacity>
        {addnew && (
          <>
            <ScrollView style={{flex: 1}}>
              <View style={styles.container}>
                <View>
                  <AnimatedTextInput
                    style={styles.textInput}
                    value={doorno}
                    onChangeText={setDoorno}
                    onFocus={handleDoornoFocus}
                    onBlur={handleDoornoBlur}
                  />
                  <Animated.Text
                    style={[styles.placeholder, placeholderPosition]}>
                    Door No
                  </Animated.Text>
                </View>
                <View style={styles.street}>
                  <AnimatedTextInput
                    style={styles.textInput}
                    value={street}
                    onChangeText={setStreet}
                    onFocus={handleStreetFocus}
                    onBlur={handleStreetBlur}
                  />

                  <Animated.Text
                    style={[styles.placeholder, StreetplaceholderPosition]}>
                    Street
                  </Animated.Text>
                </View>
                <View style={styles.street}>
                  <AnimatedTextInput
                    style={styles.textInput}
                    value={district}
                    onChangeText={setDistrict}
                    onFocus={handleDistrictFocus}
                    onBlur={handleDistrictBlur}
                  />

                  <Animated.Text
                    style={[styles.placeholder, DistrictplaceholderPosition]}>
                    District
                  </Animated.Text>
                </View>
                <View style={styles.street}>
                  <AnimatedTextInput
                    style={styles.textInput}
                    value={state}
                    onChangeText={setState}
                    onFocus={handleStateFocus}
                    onBlur={handleStateBlur}
                  />

                  <Animated.Text
                    style={[styles.placeholder, StateplaceholderPosition]}>
                    State
                  </Animated.Text>
                </View>
                <View style={styles.street}>
                  <AnimatedTextInput
                    style={styles.textInput}
                    value={pincode}
                    onChangeText={setPincode}
                    onFocus={handlePincodeFocus}
                    onBlur={handlePincodeBlur}
                  />

                  <Animated.Text
                    style={[styles.placeholder, PincodeplaceholderPosition]}>
                    Pincode
                  </Animated.Text>
                </View>
                <View style={styles.street}>
                  <AnimatedTextInput
                    style={styles.textInput}
                    value={address}
                    onChangeText={setAddress}
                    onFocus={handleAddressFocus}
                    onBlur={handleAddressBlur}
                  />

                  <Animated.Text
                    style={[styles.placeholder, AddressplaceholderPosition]}>
                    Address Type
                  </Animated.Text>
                </View>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.buttonText}>Save Changes</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </>
        )}
      </View>
    </>
  );
};
export default Address;
const styles = StyleSheet.create({
  addnewbox: {
    width: '95%',
    alignItems: 'flex-end',
    marginTop: 16,
  },
  addnew: {
    color: '#248232',
    textDecorationLine: 'underline',
  },
  container: {
    margin: 20,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 0,
  },
  placeholder: {
    position: 'absolute',
    left: 0,
    color: 'rgba(51,51,51,1)',
    fontSize: 18,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
  },
  street: {
    marginTop: 30,
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
