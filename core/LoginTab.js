import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../components/Login/Login';
import OTP from '../components/Login/OTP';
import OTPSuccess from '../components/Login/OTPSuccess';
import Personalinfo from '../components/Login/Personalinfo';

function LoginTab() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}></Stack.Screen>

        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="OTPSuccess"
          component={OTPSuccess}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Personalinfo"
          component={Personalinfo}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </>
  );
}

export default LoginTab;
