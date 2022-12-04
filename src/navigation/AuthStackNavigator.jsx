import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Logo from '../assets/svg/logo.svg';
import {
  Login,
  RegistrationScreen,
  OnboardingScreen,
  Auth,
  Screen2,
  OnboardingScreen1,
  ResetPasswordScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Onboarding"
        options={{ headerShown: false }}
        component={OnboardingScreen}
      /> */}
      <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
      <Stack.Screen name="Onboarding2" component={Screen2} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: '#F6FAFB',
            alignItems: 'center',
            width: '100%',
          },
          headerTitleAlign: 'center',
          headerTitle: () => <Logo />,
        }}
      />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: '#F6FAFB',
            alignItems: 'center',
            width: '100%',
          },
          headerTitleAlign: 'center',
          headerTitle: () => <Logo />,
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={{
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: '#F6FAFB',
            alignItems: 'center',
            width: '100%',
          },
          headerTitleAlign: 'center',
          headerTitle: () => <Logo />,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
