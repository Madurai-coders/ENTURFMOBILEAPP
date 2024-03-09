import React,{useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GalleryList from "./GalleryList";
import GalleryPage from "./Gallery";
function GalleryIndex() {

const Stack = createNativeStackNavigator();

  return (<>
      <Stack.Navigator>
        <Stack.Screen name="GalleryList" component={GalleryList}  options={{ headerShown:false}}/>
        <Stack.Screen name="GalleryPage" component={GalleryPage}  options={{ headerShown:false}}/>
      </Stack.Navigator>
    </>
  );
}

export default GalleryIndex;