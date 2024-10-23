import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreen from './src/screen/Homescreen';
import Loginscreen from './src/screen/Loginscreen';
import SIgnUpscreen from './src/screen/SIgnUpscreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Homescreen} />
        
        <Stack.Screen name="Login" component={Loginscreen} />
        <Stack.Screen name="SignUp" component={SIgnUpscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
