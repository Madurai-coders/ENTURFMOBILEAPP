import React from 'react';
import {Button} from 'native-base';
import {
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {StyleSheet, ScrollView} from 'react-native';
import HomepageCard from '../../subcomponents/HomepageCard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Homepage = ({navigation, route}) => {
  return (
    <View style={styles.Home}>
      <Text style={styles.WelcomeRichardsFlore}>Welcome Richards Flores </Text>
      <Image
        style={styles.Group35315}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/mhwg3kb6nm-6383%3A3034?alt=media&token=041e2ca5-fe54-4d4e-98ce-29a15d728879',
        }}
      />
      <View style={styles.Group38197}>
        <Image
          style={styles.Ellipse162}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/mhwg3kb6nm-6383%3A3042?alt=media&token=0ae05abb-17a3-41fb-86b9-4a4fa8856618',
          }}
        />
        <Text style={styles.Profile}>Profile</Text>
      </View>

      <View
        style={{
          width: 160,
        }}>
        <Text style={styles._2972WestheimerRdSan}>
          2972 Westheimer Rd. Santa Ana Madurai , Tamilnadu
        </Text>

        <View style={styles.DownArrow}>
          <AntDesign name="down" size={15} />
        </View>
      </View>
      <View style={styles.SearchBar}>
        <View style={styles.Input}>
          <Image
            style={styles.Icon}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/mhwg3kb6nm-6383%3A3058?alt=media&token=d7057d82-10a4-4914-b746-2e68dc9bb297',
            }}
          />
          <Text style={styles.Placeholder}>Search</Text>
        </View>

        <Ionicons name="filter" size={30} style={styles.RightIcon}></Ionicons>
      </View>
      <View>
        <Text style={styles.NearbyYourLocation}>Nearby your location</Text>
      </View>
      <View style={styles.Group38196}>
        <View style={styles.Frame18790}>
          <Text style={styles.All}>All</Text>
        </View>

        <View style={styles.Frame18791}>
          <Text style={styles.Football}>Football</Text>
        </View>
        <View style={styles.Frame18792}>
          <Text style={styles.Cricket}>Cricket</Text>
        </View>
        <View style={styles.Frame18793}>
          <Text style={styles.Tennis}>Tennis</Text>
        </View>
      </View>
      <Button onPress={() => navigation.navigate('Payment')}>Click</Button>

      <ScrollView>
        <View style={{marginTop: 220}}>
          <HomepageCard
            source={require('../../assets/Homepage/ground.png')}
            Km="2.7 km"
            DayNight="Day & Night "
            Time="8AM - 8PM | Mon - Sun"
            BillAmount="₹1000"
            Football="soccer-ball-o"
            Cricket="sports-cricket"
            Tennis="sports-tennis"></HomepageCard>
        </View>
        <View style={{marginTop: 20, marginBottom: 20}}>
          <HomepageCard
            source={require('../../assets/Homepage/ground.png')}
            Km="3.5 km"
            DayNight="Day & Night "
            Time="7AM - 9PM | Mon - Sun"
            BillAmount="₹2000"
            Football="soccer-ball-o"
            Cricket="sports-cricket"
            Tennis="sports-tennis"></HomepageCard>
        </View>
        <View style={{ marginBottom: 20}}>
          <HomepageCard
            source={require('../../assets/Homepage/ground.png')}
            Km="3.5 km"
            DayNight="Day & Night "
            Time="7AM - 9PM | Mon - Sun"
            BillAmount="₹2000"
            Football="soccer-ball-o"
            Cricket="sports-cricket"
            Tennis="sports-tennis"></HomepageCard>
        </View>
      </ScrollView>

      {/* <View style={styles.Navbar}>
        <AntDesign
          name="Trophy"
          size={30}
          style={{marginLeft: 25, marginTop: 10, color: '#000000'}}></AntDesign>
        <MaterialCommunityIcons
          name="youtube-subscription"
          size={30}
          style={{
            marginLeft: 50,
            marginTop: 10,
            color: '#000000',
          }}></MaterialCommunityIcons>
        <AntDesign
          name="home"
          size={30}
          style={{marginLeft: 50, marginTop: 10, color: '#5FD068'}}></AntDesign>
        <Entypo
          name="back-in-time"
          size={32}
          style={{marginLeft: 50, marginTop: 10, color: '#000000'}}></Entypo>
        <EvilIcons
          name="bell"
          size={40}
          style={{marginLeft: 50, marginTop: 10, color: '#000000'}}></EvilIcons>
      </View> */}
        <View style={styles.BottomNavType2}>
      <View style={styles.Type}>
        <Image
          style={styles.EpTrophyBase}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/tv09an5pdld-6751%3A4211?alt=media&token=23749520-52a8-4b6c-9be7-6e8a4fe1dcd1",
          }}
        />
        <Text style={styles.Tournament}>Tournament</Text>
      </View>
      <Image
        style={styles.Type1}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/tv09an5pdld-6751%3A4214?alt=media&token=2d4e0d9d-2c11-4a5a-958d-b7aa75e734a5",
        }}
      />
      <Image
        style={styles.Type2}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/tv09an5pdld-6751%3A4217?alt=media&token=39bdbe9b-14a7-43a6-a0e5-662e0b6ac31c",
        }}
      />
      <Image
        style={styles.Type3}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/tv09an5pdld-6751%3A4220?alt=media&token=56d1876a-5834-4508-a6e6-adf986bffa81",
        }}
      />
      <Image
        style={styles.Type4}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/tv09an5pdld-6751%3A4224?alt=media&token=19257b01-5179-49e9-99e6-53f3dab1b09a",
        }}
      />
    </View>
    </View>
  );
};
export default Homepage;

const styles = StyleSheet.create({
  Home: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: 670,
    boxSizing: 'border-box',
    backgroundColor: '#E5E5E5',
  },

  WelcomeRichardsFlore: {
    position: 'absolute',
    left: 18,
    color: 'rgba(62,62,62,1)',
    fontSize: 21,
    lineHeight: 80,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 600,
  },
  Group38197: {
    position: 'absolute',
    top: 23.69,
    left: 334,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 49.94,
    height: 63.03,
    paddingLeft: 8,
    paddingRight: 7.94,
    paddingTop: 7,
    paddingBottom: 5.03,
    borderRadius: 9,
    boxSizing: 'border-box',
    backgroundColor: 'rgba(255,255,255,1)',
    shadowColor: '#171717',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 11,
  },
  Ellipse162: {
    width: '100%',
    height: 34.93,
  },
  Profile: {
    color: 'rgba(0,0,0,1)',
    fontSize: 10,
    lineHeight: 16,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 500,
    letterSpacing: 0.45,
    textTransform: 'capitalize',
  },
  _2972WestheimerRdSan: {
    position: 'absolute',
    top: 60.92,
    left: 20.07,
    color: 'rgba(0,0,0,1)',
    fontSize: 11,
    lineHeight: 15,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 400,
    letterSpacing: 0.4,
    textTransform: 'capitalize',
  },
  DownArrow: {
    position: 'absolute',
    top: 78,
    left: 155,
  },
  SearchBar: {
    position: 'absolute',
    top: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 355,
    height: 63.29,
    paddingLeft: 14.83,
    paddingRight: 6.92,
    paddingTop: 8.9,
    paddingBottom: 8.9,
    boxSizing: 'border-box',
  },
  Input: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 340,
    height: '100%',
    paddingLeft: 9.89,
    paddingRight: 9.89,
    paddingTop: 5.93,
    paddingBottom: 5.93,
    borderWidth: 0.99,
    borderColor: 'rgba(235,235,235,1)',
    borderRadius: 98.89,
    boxSizing: 'border-box',
    backgroundColor: 'rgb(255,255,255)',
    marginLeft: 55,
  },
  Icon: {
    width: 23.73,
    height: '100%',
    marginRight: 7.911110877990723,
  },
  Placeholder: {
    color: 'rgba(153,153,153,1)',
    fontSize: 16,
    lineHeight: 16,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 400,
  },
  RightIcon: {
    marginLeft: 15,
    color: '#000000',
  },
  NearbyYourLocation: {
    position: 'absolute',
    top: 170,
    left: 20.7,
    color: 'rgba(0,0,0,1)',
    fontSize: 13,
    lineHeight: 15,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 600,
    letterSpacing: 0.6,
    textTransform: 'capitalize',
  },

  Group38196: {
    position: 'absolute',
    top: 205,
    left: 20.7,
    display: 'flex',
    flexDirection: 'row',
    width: 250.79,
    height: 21,
    boxSizing: 'border-box',
  },
  Frame18790: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '110%',
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 22,
    boxSizing: 'border-box',
    backgroundColor: 'rgba(95,208,104,1)',
  },
  All: {
    color: 'rgba(255,255,255,1)',
    fontSize: 11,
    lineHeight: 16,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
    letterSpacing: 0.5,
    textTransform: 'capitalize',
  },
  Frame18791: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '110%',
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 2,
    paddingBottom: 2,
    borderWidth: 1,
    borderColor: 'rgba(95,208,104,1)',
    borderRadius: 22,
    boxSizing: 'border-box',
    marginLeft: 15,
  },
  Football: {
    color: 'rgba(55,55,55,1)',
    fontSize: 10,
    lineHeight: 16,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
    letterSpacing: 0.5,
    textTransform: 'capitalize',
  },
  Frame18792: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '110%',
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 2,
    paddingBottom: 2,
    borderWidth: 1,
    borderColor: 'rgba(95,208,104,1)',
    borderRadius: 22,
    boxSizing: 'border-box',
    marginLeft: 15,
  },
  Cricket: {
    color: 'rgba(55,55,55,1)',
    fontSize: 11,
    lineHeight: 16,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
    letterSpacing: 0.5,
    textTransform: 'capitalize',
  },

  Frame18793: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '110%',
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 2,
    paddingBottom: 2,
    borderWidth: 1,
    borderColor: 'rgba(95,208,104,1)',
    borderRadius: 22,
    boxSizing: 'border-box',
    marginLeft: 15,
  },
  Tennis: {
    color: 'rgba(55,55,55,1)',
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
    letterSpacing: 0.5,
    textTransform: 'capitalize',
  },
  Navbar: {
    width: '100%',
    height: 55,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    display: 'flex',
  },




  BottomNavType2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 359.77,
    
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Type: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    marginRight: 20.756010055541992,
    paddingLeft: 9.51,
    paddingRight: 12.97,
    paddingTop: 6.05,
    paddingBottom: 6.05,
    borderRadius: 51.89,
    boxSizing: "border-box",
    backgroundColor: "rgba(95,208,104,1)",
  },
  EpTrophyBase: {
    width: 16.62,
    height: "100%",
    marginRight: 6.918670177459717,
  },
  Tournament: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    lineHeight: 133,
    fontFamily: "Nunito, sans-serif",
    fontWeight: 700,
    textAlign: "center",
    letterSpacing: 0.2,
  },
  Type1: {
    width: 31.97,
    height: "100%",
    marginRight: 20.756010055541992,
  },
  Type2: {
    width: 30.02,
    height: "100%",
    marginRight: 20.756010055541992,
  },
  Type3: {
    width: 31.97,
    height: "100%",
    marginRight: 20.756010055541992,
  },
  Type4: {
    width: 31.97,
    height: "100%",
  },
});
