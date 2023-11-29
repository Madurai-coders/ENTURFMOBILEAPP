// import React from 'react';
import {Button} from 'native-base';
import {
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  TextInput,
} from 'react-native';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import HomepageCard from '../../subcomponents/HomepageCard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import React, {useState} from 'react';

const Homepage = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <View style={styles.topbox}>
        <View style={styles.topcontent}>
          <Text style={styles.WelcomeRichardsFlore}>
            Welcome Richards Flores
          </Text>
          <Image
            style={styles.Group35315}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/mhwg3kb6nm-6383%3A3034?alt=media&token=041e2ca5-fe54-4d4e-98ce-29a15d728879',
            }}
          />
          <View
            style={{
              width: '60%',
              flexDirection: 'row',
            }}>
            <Text style={styles._2972WestheimerRdSan}>
              2972 Westheimer Rd. Santa Ana Madurai , Tamilnadu
              <AntDesign
                name="down"
                size={16}
                color={'black'}
                style={styles.down}
              />
            </Text>
          </View>
        </View>
        <View style={styles.topcontent1}>
          <View style={styles.profilebox}>
            <Image
              style={styles.Ellipse162}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/mhwg3kb6nm-6383%3A3042?alt=media&token=0ae05abb-17a3-41fb-86b9-4a4fa8856618',
              }}
            />
            <Text style={styles.Profile}>Profile</Text>
          </View>
        </View>
      </View>

      <View style={styles.middlebox}>
        <View style={styles.middlecontent}>
          {/* <View style={styles.searchSection}>
            <TextInput
              style={styles.input}
              placeholder="Search"
              placeholderTextColor={'#999999'}
            />
            <Feather name="search" size={19} style={styles.searchIcon} />
          </View> */}
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <View style={styles.searchContainer}>
              <Ionicons
                name="search"
                size={20}
                color="gray"
                style={styles.searchIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Search"
                value={searchText}
                onChangeText={text => setSearchText(text)}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
        <View style={styles.middlecontent1}>
          <Ionicons name="filter" size={30} style={styles.RightIcon}></Ionicons>
        </View>
      </View>
      <View style={styles.bottombox}>
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
      </View>
      <ScrollView style={{flex: 1, backgroundColor: '#F9F9F9'}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <HomepageCard
            source={require('../../assets/Homepage/ground.png')}
            Km="2.7 km"
            DayNight="Day & Night "
            Time="8AM - 8PM | Mon - Sun"
            BillAmount="₹1000"
            Football="soccer-ball-o"
            Cricket="sports-cricket"
            Tennis="sports-tennis"></HomepageCard>

          <HomepageCard
            source={require('../../assets/Homepage/ground.png')}
            Km="2.7 km"
            DayNight="Day & Night "
            Time="8AM - 8PM | Mon - Sun"
            BillAmount="₹1000"
            Football="soccer-ball-o"
            Cricket="sports-cricket"
            Tennis="sports-tennis"></HomepageCard>
          <HomepageCard
            source={require('../../assets/Homepage/ground.png')}
            Km="2.7 km"
            DayNight="Day & Night "
            Time="8AM - 8PM | Mon - Sun"
            BillAmount="₹1000"
            Football="soccer-ball-o"
            Cricket="sports-cricket"
            Tennis="sports-tennis"></HomepageCard>
          <HomepageCard
            source={require('../../assets/Homepage/ground.png')}
            Km="2.7 km"
            DayNight="Day & Night "
            Time="8AM - 8PM | Mon - Sun"
            BillAmount="₹1000"
            Football="soccer-ball-o"
            Cricket="sports-cricket"
            Tennis="sports-tennis"></HomepageCard>
          <HomepageCard
            source={require('../../assets/Homepage/ground.png')}
            Km="2.7 km"
            DayNight="Day & Night "
            Time="8AM - 8PM | Mon - Sun"
            BillAmount="₹1000"
            Football="soccer-ball-o"
            Cricket="sports-cricket"
            Tennis="sports-tennis"></HomepageCard>
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
      </ScrollView>
    </View>
  );
};
export default Homepage;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },

  topbox: {
    width: '100%',
    height: '20%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F9F9F9',
  },
  topcontent: {
    width: '80%',
    height: '100%',
    paddingLeft: 12,
    paddingTop: 10,
  },
  WelcomeRichardsFlore: {
    color: 'rgba(62,62,62,1)',
    fontSize: 21,
    lineHeight: 50,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: '600',
  },
  _2972WestheimerRdSan: {
    color: 'rgba(0,0,0,1)',
    fontSize: 11,
    lineHeight: 15,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: '400',
    letterSpacing: 0.4,
    textTransform: 'capitalize',
    marginTop: -5,
  },

  topcontent1: {
    width: '20%',
    height: '100%',
    paddingTop: 20,
  },
  profilebox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 70,
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
    width: '70%',
    height: 42,
    marginTop: 5,
  },
  Profile: {
    color: 'rgba(0,0,0,1)',
    fontSize: 10,
    lineHeight: 12,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: '500',
    letterSpacing: 0.45,
    textTransform: 'capitalize',
    marginTop: 5,
  },
  middlebox: {
    width: '100%',
    height: '12%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F9F9F9',
  },
  middlecontent: {
    height: '20%',
    width: '84%',
    marginLeft: 10,
  },
  searchSection: {
    // flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 0,
    color: '#999999',
    marginTop: 10,
    marginLeft: 17,
    zIndex: 1,
    position: 'absolute',
  },
  input: {
    flex: 1,
    paddingLeft: 45,
    fontSize: 17,
    width: '96%',
    backgroundColor: '#FFFFFF',
    color: 'black',
    borderRadius: 32,
    borderWidth: 0.99,
    borderColor: 'rgba(235,235,235,1)',
    position: 'absolute',
    fontFamily: 'Nunito',
    fontWeight: '400',
    height: 40,
    display: 'flex',
  },

  RightIcon: {
    marginTop: 7,
    color: '#000000',
  },
  bottombox: {
    width: '100%',
    height: '11%',
    paddingLeft: 20,
    backgroundColor: '#F9F9F9',
  },
  NearbyYourLocation: {
    color: '#000000',
    fontSize: 13,
    lineHeight: 15,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: '600',
    letterSpacing: 0.6,
    textTransform: 'capitalize',
  },

  Group38196: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    width: 150.79,
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
    fontWeight: '700',
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
    fontWeight: '700',
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
    fontWeight: '700',
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
    fontWeight: '700',
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 359.77,
    boxSizing: 'border-box',
    backgroundColor: 'rgba(255,255,255,1)',
  },
  Type: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    marginRight: 20.756010055541992,
    paddingLeft: 9.51,
    paddingRight: 12.97,
    paddingTop: 6.05,
    paddingBottom: 6.05,
    borderRadius: 51.89,
    boxSizing: 'border-box',
    backgroundColor: 'rgba(95,208,104,1)',
  },
  EpTrophyBase: {
    width: 16.62,
    height: '100%',
    marginRight: 6.918670177459717,
  },
  Tournament: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'rgba(255,255,255,1)',
    fontSize: 11,
    lineHeight: 133,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  Type1: {
    width: 31.97,
    height: '100%',
    marginRight: 20.756010055541992,
  },
  Type2: {
    width: 30.02,
    height: '100%',
    marginRight: 20.756010055541992,
  },
  Type3: {
    width: 31.97,
    height: '100%',
    marginRight: 20.756010055541992,
  },
  Type4: {
    width: 31.97,
    height: '100%',
  },

  scrollView: {
    height: '20%',
    width: '80%',
    margin: 20,
    alignSelf: 'center',
    padding: 20,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'lightblue',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingBottom: 50,
  },
});















