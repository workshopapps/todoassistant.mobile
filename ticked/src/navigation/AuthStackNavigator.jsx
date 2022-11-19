import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { Login, OnboardingScreen1, Screen2 } from '../screens'

const Stack = createNativeStackNavigator()

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
        <Stack.Screen name="Onboarding2" component={Screen2} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Auth" component={Login} />
    </Stack.Navigator>
  )
}

export default AuthStackNavigator