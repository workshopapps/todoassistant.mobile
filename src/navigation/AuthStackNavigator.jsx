import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';

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
  const [firstLaunch, setFirstLaunch] = useState(null);

  useEffect(() => {
    async function setData() {
      const isFirstLaunch = await AsyncStorage.getItem('alreadyLaunched');
      if (isFirstLaunch === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setFirstLaunch(true);
      } else {
        setFirstLaunch(false);
      }
    }

    setData();
  }, []);

  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Onboarding"
        options={{ headerShown: false }}
        component={OnboardingScreen}
      /> */}
      {firstLaunch && (
        <Stack.Group>
          <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
          <Stack.Screen name="Onboarding2" component={Screen2} />
          <Stack.Screen name="Auth" component={Auth} />
        </Stack.Group>
      )}
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
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
