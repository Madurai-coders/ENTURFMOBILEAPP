import {Button} from 'native-base';
import {
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  TextInput,
  Platform,
} from 'react-native';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import HomepageCard from '../../subcomponents/HomepageCard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import React, {useState, useRef, useEffect} from 'react';
import {DrawerActions} from '@react-navigation/native';

const Homepage = ({onPress, initialText, navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [clickableBtn, setClickableBtn] = useState(1);

  const ButtonOnClick = btnNumber => {
    setClickableBtn(btnNumber);
  };

  const [showMore, setShowMore] = useState(false);
  const [text, setText] = useState(
    '2972 Westheimer Rd. Santa Ana Madurai , Tamilnadu ',
  );

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };
  const openSideNav = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={{height: '100%',backgroundColor:"white"}}>
      <View style={styles.topbox}>
        <View style={styles.topcontent}>
          <View style={{height: '36%'}}>
            <Text style={styles.WelcomeRichardsFlore}>
              Welcome Richards Flores
            </Text>
          </View>
          <Image
            style={styles.Group35315}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/mhwg3kb6nm-6383%3A3034?alt=media&token=041e2ca5-fe54-4d4e-98ce-29a15d728879',
            }}
          />
          {/* <View style={{width: address ? '75%' : '47%'}}>
            <View>
              <Text style={styles._2972WestheimerRdSan}>
                {address
                  ? '2972 Westheimer Rd. Santa Ana Madurai, Tamilnadu'
                  : '2972 Westheimer Rd.'}
              </Text>
             
            </View>

            <View style={{alignSelf: address ? 'center' : 'flex-end'}}>
              <AntDesign
                name={address ? 'up' : 'down'}
                size={16}
                color={'black'}
                style={{
                  marginTop: address ? -13 : -14,
                  marginLeft: address ? 15 : 0,
                }}
                onPress={() => setAddress(!address)}
              />
            </View>
          </View> */}

          <View
            style={{
              width: showMore ? '70%' : '50%',
              height: '50%',
              paddingTop: 10,
            }}>
            <Text
              numberOfLines={showMore ? undefined : 1}
              style={styles._2972WestheimerRdSan}>
              {showMore ? text : text.slice(0, 20)}

              {text.length > 15 && (
                <TouchableOpacity onPress={handleToggleShowMore}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        backgroundColor: '#eaeaea',
                        borderRadius: 15,
                        padding: 2.5,
                        marginRight: 5,
                        position: 'relative',
                        top: 4,
                      }}>
                      <AntDesign
                        name={showMore ? 'up' : 'down'}
                        size={11}
                        style={{color: 'black'}}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            </Text>
          </View>

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
            }}></View>
        </View>
        <View style={styles.topcontent1}>
          <TouchableOpacity onPress={openSideNav} activeOpacity={0.7}>
            <View style={styles.profilebox}>
              <Image
                style={styles.Ellipse162}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/mhwg3kb6nm-6383%3A3042?alt=media&token=0ae05abb-17a3-41fb-86b9-4a4fa8856618',
                }}
              />
              <Text style={styles.Profile}>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* <View style={styles.middlebox}>
        <View style={styles.middlecontent}>
        
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
      </View> */}

      <View style={styles.middlebox}>
        <View style={styles.middlecontent}>
          <View style={{flex: 1}}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.keyboardcontainer}>
              <View style={styles.searchContainer}>
                <Ionicons
                  name="search"
                  size={21}
                  color="gray"
                  style={styles.searchIcon}
                />

                <TextInput
                  style={[styles.input, {fontSize: 17}]}
                  placeholder="Search"
                  value={searchText}
                  placeholderTextColor={'#999999'}
                  onChangeText={text => setSearchText(text)}
                />
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
        <View>
          <Ionicons name="filter" size={30} style={styles.RightIcon}></Ionicons>
        </View>
      </View>
      <View style={styles.bottombox}>
        <View>
          <Text style={styles.NearbyYourLocation}>Nearby your location</Text>
        </View>

        {/* <View style={styles.container}>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: clickableBtn === 1 ? '#5FD068' : 'white'},
              {color: clickableBtn === 1 ? 'white' : 'black'},
            ]}
            onPress={() => ButtonOnClick(1)}>
            <Text
              style={{
                color: clickableBtn === 1 ? 'white' : 'black',
                fontSize: 13,
              }}>
              All
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: clickableBtn === 2 ? '#5FD068' : 'white'},
              {color: clickableBtn === 2 ? 'white' : 'black', marginLeft: 10},
            ]}
            onPress={() => ButtonOnClick(2)}>
            <Text
              style={{
                color: clickableBtn === 2 ? 'white' : 'black',
                fontSize: 13,
              }}>
              Football
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: clickableBtn === 3 ? '#5FD068' : 'white'},
              {color: clickableBtn === 3 ? 'white' : 'black', marginLeft: 10},
            ]}
            onPress={() => ButtonOnClick(3)}>
            <Text
              style={{
                color: clickableBtn === 3 ? 'white' : 'black',
                fontSize: 13,
              }}>
              Cricket
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: clickableBtn === 4 ? '#5FD068' : 'white'},
              {color: clickableBtn === 4 ? 'white' : 'black', marginLeft: 10},
            ]}
            onPress={() => ButtonOnClick(4)}>
            <Text
              style={{
                color: clickableBtn === 4 ? 'white' : 'black',
                fontSize: 13,
              }}>
              Tennis
            </Text>
          </TouchableOpacity>
        </View> */}

        <View style={styles.container}>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: clickableBtn === 1 ? '#5FD068' : 'white'},
              {color: clickableBtn === 1 ? 'white' : 'black'},
            ]}
            onPress={() => ButtonOnClick(1)}>
            <Text
              style={{
                color: clickableBtn === 1 ? 'white' : 'black',
                fontSize: 13,
              }}>
              All
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: clickableBtn === 2 ? '#5FD068' : 'white'},
              {color: clickableBtn === 2 ? 'white' : 'black', marginLeft: 10},
            ]}
            onPress={() => ButtonOnClick(2)}>
            <Text
              style={{
                color: clickableBtn === 2 ? 'white' : 'black',
                fontSize: 13,
              }}>
              Football
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: clickableBtn === 3 ? '#5FD068' : 'white'},
              {color: clickableBtn === 3 ? 'white' : 'black', marginLeft: 10},
            ]}
            onPress={() => ButtonOnClick(3)}>
            <Text
              style={{
                color: clickableBtn === 3 ? 'white' : 'black',
                fontSize: 13,
              }}>
              Cricket
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: clickableBtn === 4 ? '#5FD068' : 'white'},
              {color: clickableBtn === 4 ? 'white' : 'black', marginLeft: 10},
            ]}
            onPress={() => ButtonOnClick(4)}>
            <Text
              style={{
                color: clickableBtn === 4 ? 'white' : 'black',
                fontSize: 13,
              }}>
              Tennis
            </Text>
          </TouchableOpacity>
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
  // button

  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    padding: 7,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#5FD068',
    paddingHorizontal: 15,
    paddingVertical: 4,
  },
  topbox: {
    width: '100%',
    height: '16%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    fontFamily: 'Advent Pro',
    fontWeight: '600',
  },
  _2972WestheimerRdSan: {
    color: 'rgba(0,0,0,1)',
    fontSize: 11,
    lineHeight: 11,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: '400',
    letterSpacing: 0.4,
    textTransform: 'capitalize',
    paddingTop: 0,
  },
  down: {
    color: '#646464',
    fontSize: 1,
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
  // search section
  keyboardcontainer: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 45,
    width: '96%',
    backgroundColor: '#FFFFFF',
    color: 'black',
    borderRadius: 32,
    borderWidth: 0.99,
    borderColor: 'rgba(235,235,235,1)',
    fontFamily: 'Nunito',
    fontWeight: '400',
    height: 45,
  },
  middlebox: {
    display: 'flex',
    flexDirection: 'row',
    boxSizing: 'border-box',
    width: '100%',
    height: '9%',
  },
  middlecontent: {
    width: '84%',
    marginLeft: 5,
  },
  searchIcon: {
    padding: 0,
    color: '#999999',
    marginTop: 10,
    marginLeft: 23,
    zIndex: 1,
    position: 'absolute',
  },

  RightIcon: {
    marginTop: 6,
    color: '#000000',
  },
  bottombox: {
    width: '100%',
    height: '11%',
    paddingLeft: 20,
    marginBottom:10
  },
  NearbyYourLocation: {
    color: '#000000',
    fontSize: 14,
    lineHeight: 15,
    fontFamily: 'Nunito, sans-serif',
    fontWeight: '800',
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
    height: '120%',
    paddingLeft: 17,
    paddingRight: 17,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 22,
    boxSizing: 'border-box',
    backgroundColor: 'rgba(95,208,104,1)',
  },
  All: {
    color: 'rgba(255,255,255,1)',
    fontSize: 12,
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
    height: '120%',
    paddingLeft: 20,
    paddingRight: 20,
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
    fontSize: 11,
    lineHeight: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'capitalize',
  },

  Frame18792: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '120%',
    paddingLeft: 20,
    paddingRight: 20,
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
    lineHeight: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'capitalize',
  },

  Frame18793: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '120%',
    paddingLeft: 17,
    paddingRight: 17,
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
    lineHeight: 18,
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
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingBottom: 50,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1, // Set zIndex higher than other components
  },

  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 45,
    width: '96%',
    backgroundColor: '#FFFFFF',
    color: 'black',
    borderRadius: 32,
    borderWidth: 0.99,
    borderColor: 'rgba(235,235,235,1)',
    fontFamily: 'Nunito',
    fontWeight: '400',
    height: 45,
  },
});
