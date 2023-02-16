/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoginScreen,
  OnboardingScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  ResetPasswordScreen,
  DeactivateAccountScreen,
  UserDetails,
} from '../screens';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {DrawerNavigation} from './DrawerNavigation';
import {LoggedInTabs} from './BottomNavigation';
import {useState, useEffect} from 'react';

import {useSelector} from 'react-redux';
import {authSlice} from '../app/features/authSlice';
import {RootState} from '../app/store';
import LoadingIndicator from '../components/Loaders/LoadingIndicator';

const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);

  useEffect(() => {
    const checkOnboarding = async () => {
      try {
        const value = await AsyncStorage.getItem('onboardingComplete');
        if (value !== null) {
          setIsOnboardingComplete(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    checkOnboarding();
  }, []);

  if (isLoading) {
    // Show a loading indicator while the check is in progress
    return <LoadingIndicator />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isOnboardingComplete ? (
        <>
          <Stack.Group>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPasswordScreen}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
            {isLogin && (
              <Stack.Screen name="BottomTabs" component={LoggedInTabs} />
            )}
            <Stack.Screen
              name="DeactivateAccount"
              component={DeactivateAccountScreen}
            />
            <Stack.Screen name="UserDetails" component={UserDetails} />
            <Stack.Screen name="Drawer" component={DrawerNavigation} />
          </Stack.Group>
        </>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}
