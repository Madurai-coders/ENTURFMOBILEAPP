import {View, Text, StyleSheet} from 'react-native';
import {Button, Image} from 'native-base';
import {useEffect, useState} from 'react';
import TopNav from '../../subcomponents/TopNav';
const Tournament = () => {
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: '#FFFFFF'}}>
      <TopNav Title="Tournament"></TopNav>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '85%',
          width: '100%',
        }}>
        <Image
          source={require('../../assets/General/tournament.png')}
          accessibilityLabel="Description of your image for accessibility"
          alt="Alternative Text"></Image>
        <Text style={styles.trnmtTxt}>Coming soon, Stay tune</Text>
      </View>
    </View>
  );
};

export default Tournament;
const styles = StyleSheet.create({
  trnmtTxt: {
    fontFamily: 'Nunito',
    fontWeight: 400,
    fontSize: 13,
    color: 'rgba(86, 86, 86, 0.87)',
    marginTop: 20,
  },
});

