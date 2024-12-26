import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen';
import DetailScreen from './src/screen/DetailScreen'
import Register from './src/screen/Register';
import LoginScreen from './src/screen/LoginScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{headerShown: false}}>
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name='DetailScreen' component={DetailScreen}/>
      <Stack.Screen name='Register' component={Register}/>
      <Stack.Screen name='LoginScreen' component={LoginScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
}

export default App

const styles = StyleSheet.create({})