import {
  Image,
  Text,
  View,
  ImageBackground,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

function PaymentCard(props) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };
  return (
    <>
      <View style={styles.Bookingbox}>
        <Text style={styles.Today}>{props.Day}</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}>
          <View style={[styles.Booking, isPressed && styles.bookingPressed]}>
            <View style={{width: '21%'}}>
              <Image
                style={styles.Frame7}
                source={{uri: props.uri}}
                accessibilityLabel="Description of your image for accessibility"
              />
            </View>
            <View
              style={{
                width: '55%',
                flexDirection: 'column',
                marginTop: 18,
              }}>
              <Text style={styles.HatricSportsArena}>{props.GroundName}</Text>
              <Text style={styles._6HoursAgo}>{props.Hours}</Text>
            </View>
            <View
              style={{
                width: '27.5%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles._1400}>{props.Amount}</Text>
              <Text style={props.styles}>{props.UpdateAmountStatus}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default PaymentCard;

const styles = StyleSheet.create({
  Bookingbox: {
    width: '97.5%',
    paddingLeft: 5,
  },
  Today: {
    color: 'rgba(58,58,58,1)',
    fontSize: 17,
    lineHeight: 37,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
    letterSpacing: 0.4,
  },

  Booking: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    borderRadius: 6.73,
    boxSizing: 'border-box',
    backgroundColor: '#FFFFFF',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 5,
    position: 'relative',
    top: 15,
    marginTop:-10
  },
  bookingPressed: {
    backgroundColor: '#F7F7F7',
  },
  Frame7: {
    width: 52,
    height: '64%',
    marginTop: 15,
    marginLeft: 5,
  },

  HatricSportsArena: {
    color: 'rgba(58,58,58,1)',
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
    letterSpacing: 0.4,
  },
  _6HoursAgo: {
    color: 'rgba(58,58,58,1)',
    fontSize: 14,
    lineHeight: 25,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 400,
    letterSpacing: 0.2,
  },

  _1400: {
    color: 'rgba(40,40,40,1)',
    fontSize: 16,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
    textAlign: 'left',
    letterSpacing: 0.4,
marginTop:5,
  },
});
