import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen';
import DetailScreen from './src/screen/DetailScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name='DetailScreen' component={DetailScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
}

export default App

const styles = StyleSheet.create({})