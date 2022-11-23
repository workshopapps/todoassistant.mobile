import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Login, Auth, OnboardingScreen1, Screen2, RegistrationScreen } from '../screens';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
      <Stack.Screen name="Onboarding2" component={Screen2} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;