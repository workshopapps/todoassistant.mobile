import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoginScreen,
  OnboardingScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  ResetPasswordScreen,
} from '../screens';

import {DrawerNavigation} from './DrawerNavigation';
import {LoggedInTabs} from './BottomNavigation';

const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="BottomTabs" component={LoggedInTabs} />
      <Stack.Screen
        name="DeactivateAccount"
        component={DeactivateAccountScreen}
      />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
    </Stack.Navigator>
  );
}
