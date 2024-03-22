import Address from './Address';
import PersonelDetails from './PersonelDetails';
import Swiper from 'react-native-swiper';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {Button} from 'native-base';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

function PersonelScreen() {
  return (
    <View style={styles.Group707}>
      
      <PersonelDetails />
    </View>
   
  );
}
function AddressScreen() {
  return (
    <View style={styles.Group707}>
      <Address />
    </View>
  );
}
const Tab = createMaterialTopTabNavigator();

const PersonelAddress= ({navigation, route}) => {

  return (
    <>
      
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: 15,
              fontFamily: 'Nunito',
              fontWeight: 700,
              color: 'rgba(23,23,23,1)',
              textTransform: 'capitalize',
              width:"100%",
              color: tabName => (tabName === activeRoute ? 'black' : 'white'),

            },
            tabBarItemStyle: {marginTop: 5, marginBottom: 5},
            tabBarStyle: {backgroundColor: 'white'},
            tabBarIndicatorStyle: {backgroundColor: '#2D3A3A',width:"50%",height:"100%"},
          }}>
          <Tab.Screen name="PersonelDetail" component={PersonelScreen}></Tab.Screen>
          <Tab.Screen name="Address" component={AddressScreen}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    
    </>
  );
};

export default PersonelAddress;
const styles = StyleSheet.create({
  Group707: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    
  },
  Group717: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
  },

 
});
