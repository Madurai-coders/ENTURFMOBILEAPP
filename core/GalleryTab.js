import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VideoOption from '../components/Gallery/VideoOption';
import SelectSport from '../components/Gallery/SelectSport';
import StartRecording from '../components/Gallery/StartRecording';
const GalleryTab = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="VideoOption" component={VideoOption}  options={{ headerShown:false}} />
      <Stack.Screen name="SelectSport" component={SelectSport}  options={{ headerShown:false}} />
      <Stack.Screen name="StartRecording" component={StartRecording}  options={{ headerShown:false}} />

    </Stack.Navigator>
  );
};

export default GalleryTab;