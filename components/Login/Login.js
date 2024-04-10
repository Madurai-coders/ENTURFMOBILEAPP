import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  TextInput,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const {width, height: windowHeight} = Dimensions.get('window');

const Login = () => {
  const [isHeightIncreased, setIsHeightIncreased] = useState(false);
  const animation = useRef(new Animated.Value(windowHeight * 0.38)).current;
  const overlayPosition = useRef(new Animated.Value(0.2)).current; // Initial overlay position
  const bottomSheetRef = useRef();
  const increaseImageHeight = () => {
    const newHeight = isHeightIncreased
      ? windowHeight * 0.38
      : windowHeight * 0.8;
    Animated.parallel([
      Animated.timing(animation, {
        toValue: newHeight,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(overlayPosition, {
        toValue: isHeightIncreased ? 0.2 : 0.1, // Change overlay position
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start(() => {
      setIsHeightIncreased(!isHeightIncreased);
    });
  };

  const handleSheetClose = () => {
    setIsHeightIncreased(false);
    Animated.parallel([
      Animated.timing(animation, {
        toValue: windowHeight * 0.38,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(overlayPosition, {
        toValue: 0.2, // Reset overlay position
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };


  // OTP
  const navigation = useNavigation();

  const handleGetOTP = () => {
    navigation.navigate('OTP');
    bottomSheetRef.current.close();
  };

  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <Animated.Image
          source={require('../../assets/Login/loginbg.png')}
          resizeMode="stretch"
          style={[styles.loginimg, {height: animation}]}
        />
        <Animated.Image
          source={require('../../assets/Login/player.png')}
          resizeMode="stretch"
          style={[
            styles.overlayImage,
            {
              top: animation.interpolate({
                inputRange: [windowHeight * 0.38, windowHeight * 0.8],
                outputRange: [windowHeight * 0.06, windowHeight * 0.1],
              }),
            },
          ]}
        />
      </View>
      <View style={{height: '50%'}}>
        <View style={{marginTop: 60}}>
          <Text style={styles.welcometxt}>WELCOME TO OUR</Text>
          <Text style={styles.welcometxt}>
            <Text style={styles.enturf}>ENTURF</Text>{' '}
            <Text style={styles.booking}>BOOKING</Text>
          </Text>
          <Text style={styles.welcometxt}>APP!</Text>
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.unlocktxt}>
            Unlock Limitless Opportunities with
          </Text>
          <Text style={styles.unlocktxt}>Our Turf Booking App!</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          bottomSheetRef.current.open();
          increaseImageHeight();
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <RBSheet
        ref={bottomSheetRef}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={430}
        animationType="slide"
        onClose={handleSheetClose}
        draggable={true}
        closeOnPressBack={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: 'black',
            marginTop: 20,
            width: 45,
            height: 4,
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: '#FFFFFF',
          },
        }}>
          <Text style={styles.bottomsheettitle}>Getting Started!</Text>
     

        <View style={styles.phncontainer}>
          <Text style={styles.phnlabel}>Phone Number</Text>
          <View style={styles.phntextInputContainer}>
            <TextInput
              style={styles.phntextInput}
              placeholder="Enter Your Number"
              keyboardType="phone-pad"
              placeholderTextColor="#E5E5E5"
            />
            <SimpleLineIcons
              name="phone"
              size={18}
              color="#BEBEBE"
              style={styles.phnicon}
            />
          </View>
          <TouchableOpacity style={styles.OTPbutton} onPress={handleGetOTP}>
            <Text style={styles.buttonText}>GET OTP</Text>
          </TouchableOpacity>
          <View
            style={{flexDirection: 'row', marginTop: 40, alignItems: 'center'}}>
            <View style={styles.line} />
            <Text style={styles.continuetxt}>Or Continue with</Text>
            <View style={styles.line} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 40,
              justifyContent: 'center',
              width: '100%',
            }}>
            <Image
              style={{alignSelf: 'center', alignItems: 'center',width:30,height:30}}
              source={require('../../assets/Login/googlelogo.png')}
            />
            <Text style={{fontWeight: 700, color: 'black',fontFamily:"Poppins",fontSize:16,marginLeft:10,lineHeight:30}}>Google</Text>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginimg: {
    width: '100%',
  },
  overlayImage: {
    position: 'absolute',
    width: 190,
    height: 220,
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
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 600,
  },

  welcometxt: {
    color: '#2d3a3a',
    fontSize: 30,
    fontWeight: 900,
    paddingLeft: 20,
  },
  enturf: {
    color: '#79DB81',
  },
  unlocktxt: {
    color: '#2d3a3a',
    fontSize: 15,
    lineHeight: 25,
    fontWeight: 400,
    paddingLeft: 20,
  },
  bottomSheetContent: {
    alignItems: 'center',
  },
  bottomsheettitle: {
    color: '#2F2F2F',
    marginTop: 20,
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 0.6,
    alignSelf:"center"
  },
  //   phone input

  phncontainer: {
    margin: 15,
  },
  phnlabel: {
    fontSize: 15,
    fontWeight: 500,
    color: '#000000',
    lineHeight: 35,
    marginTop: 17,
  },
  phntextInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#777777',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
  },
  phntextInput: {
    flex: 1,
    height: 45,
    marginLeft: 5,
  },
  phnicon: {
    marginRight: 10,
    alignSelf: 'center',
  },
  OTPbutton: {
    backgroundColor: '#79db81',
    width: '100%',
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'center',
    borderRadius: 13,
    marginTop: 30,
  },
  line: {
    height: 0.8,
    width: '30%',
    backgroundColor: '#A29797',
    margin: 10,
  },
  continuetxt: {
    color: '#757171',
    lineHeight: 16,
    fontWeight: 300,
    fontSize: 13,
  },
});
