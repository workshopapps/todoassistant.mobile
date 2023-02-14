<<<<<<< HEAD
<<<<<<< HEAD
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, NotificationsScreen, OnboardingScreen, ProfileScreen, SearchScreen} from '../screens';

const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
=======
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
=======
>>>>>>> c9e20a54b1741d80fef0d8d7ebd6bb8c5639336c
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoginScreen,
  OnboardingScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  ResetPasswordScreen,
  DeactivateAccountScreen,
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
      {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> */}
      <Stack.Screen name="BottomTabs" component={LoggedInTabs} />
      <Stack.Screen
        name="DeactivateAccount"
        component={DeactivateAccountScreen}
      />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
>>>>>>> 4bde65a2b51603b95ef0896d112d1a2b831e9f49
    </Stack.Navigator>
  );
}
