import {ScrollView, VStack} from 'native-base';
import {
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, {useState} from 'react';
import { color } from 'native-base/lib/typescript/theme/styled-system';

const HomepageCard = props => {
  const [isClicked, setIsClicked] = useState(false);

  const handlePress = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <View style={styles.Group153}>
        <Image style={styles.Image422} source={props.source} />
        <View style={styles.Group882}>
          <View style={styles.Frame18789}>
            <Text style={styles._27Km}>{props.Km}</Text>
          </View>
        </View>
        <View style={styles.Group515}>
          <Text style={styles.DayNight}>{props.DayNight}</Text>
          <Text style={styles._8am8pmMonSun}>{props.Time}</Text>
          <Text style={styles.Avg1000}>
            <Text style={styles.Avg}>AVG : </Text>
            {props.BillAmount}
          </Text>
        </View>
        <View style={styles.games}>
          <FontAwesome name={props.Football} size={17} color={'#57575B'} />
          <MaterialIcons
            name={props.Cricket}
            size={22}
            color={'#57575B'}
            style={{marginLeft: 10, marginTop: -3}}
          />
          <MaterialIcons
            name={props.Tennis}
            size={22}
            color={'#57575B'}
            style={{marginLeft: 10, marginTop: -3}}
          />
        </View>
        {/* <View style={styles.rect1}>
          <AntDesign name="heart" size={17} style={styles.hearticon} />
        </View> */}
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.rect1}>
          <AntDesign
          name={isClicked ? "heart" : "hearto"}
          size={17}
          style={[styles.hearticon, {color: isClicked ? 'red': "#57575B"}]}
        />
          </View>
        </TouchableOpacity>
        <View style={styles.rect2}>
          <Feather name="arrow-right" size={20} style={styles.leftarrowicon} />
        </View>
      </View>
    </>
  );
};

export default HomepageCard;

const styles = StyleSheet.create({
  Group153: {
    height: 122,
    borderRadius: 26.81,
    boxSizing: 'border-box',
    backgroundColor: 'white',
    shadowColor: '#171717',
    shadowOffset: {height: 2,width: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 9,
    elevation: 0.2,
    marginLeft: 8,
    marginRight: 12,
    marginBottom: 10,
    borderTopColor: '#FFFFFF',
    borderTopWidth: 0,
  },

  Image422: {
    position: 'absolute',
    top: 6.35,
    left: 4.47,
    width: 115.16,
    height: 110.83,
  },
  Group882: {
    position: 'absolute',
    top: 91.61,
    left: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  Frame18789: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 38,
    height: 17,
    paddingLeft: 2.15,
    paddingRight: 2.15,
    paddingTop: 1.08,
    paddingBottom: 1.08,
    borderRadius: 7.54,
    boxSizing: 'border-box',
    backgroundColor: 'rgba(255,255,255,1)',
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
  },
  _27Km: {
    position: 'absolute',
    top: 3,
    left: 3.23,
    color: 'rgba(53,53,53,1)',
    fontSize: 9,
    lineHeight: 11,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
  },
  Group515: {
    position: 'absolute',
    top: 18.99,
    left: 140,
    flex: 1,
    flexDirection: 'column',
    width: 116.53,
    height: 49.16,
    boxSizing: 'border-box',
  },
  DayNight: {
    color: 'rgba(53,53,53,1)',
    fontSize: 16,
    lineHeight: 15,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
  },
  _8am8pmMonSun: {
    color: 'rgba(255,66,66,1)',
    fontSize: 11,
    lineHeight: 36,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 400,
  },
  Avg1000: {
    color: '#000000',
    fontSize: 12,
    lineHeight: 11,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
    letterSpacing: 0.3,
  },
  Avg: {
    color: 'rgba(115,112,112,1)',
    fontSize: 12,
    lineHeight: 20,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 600,
    letterSpacing: 0.3,
  },
  games: {
    position: 'absolute',
    left: '63%',
    top: '77%',
    display: 'flex',
    flexDirection: 'row',
  },

  rect1: {
    width: 44,
    height: 62,
    backgroundColor: '#C6FFCA',
    position: 'absolute',
    left: '89%',
    borderTopRightRadius: 16,
  },
  rect2: {
    width: 44,
    height: 60,
    backgroundColor: '#5FD068',
    position: 'absolute',
    top: 62,
    left: '89%',
    borderBottomRightRadius: 16,
  },
  hearticon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: 'red',
    marginTop: 25,
  },
  leftarrowicon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: 'white',
    marginTop: 25,
  },
});
