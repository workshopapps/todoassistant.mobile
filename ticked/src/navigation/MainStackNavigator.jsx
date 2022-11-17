import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, Screen2, ProfileScreen } from '../screens'


const Stack = createNativeStackNavigator()
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name='Home' component={HomeScreen} />
      <Stack.Screen options={{ headerShown: false }} name='Home2' component={Screen2} />
      <Stack.Screen options={{ headerShown: false }} name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default MainStackNavigator