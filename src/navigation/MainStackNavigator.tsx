import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  LoginScreen,
  NotificationsScreen,
  OnboardingScreen,
  ProfileScreen,
  SearchScreen,
  RegisterScreen,
  ResetPasswordScreen,
  ForgotPasswordScreen,
} from '../screens';

// Icons
import Home from '../assets/bottom-tabs-icons/home.svg';
import Search from '../assets/bottom-tabs-icons/search-normal.svg';
import Notification from '../assets/bottom-tabs-icons/notification-bing.svg';
import Profile from '../assets/bottom-tabs-icons/profile.jpg';

import {Image, Text} from 'react-native';

import {BottomTabBarHeightContext} from '@react-navigation/bottom-tabs';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {DrawerNavigation} from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function LoggedInTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Home width={24} height={24} fill="white" />,
          // tabBarStyle: { fontSize: 20 },
          tabBarLabel: ({focused, color}) => (
            <Text
              className="text-[13px] mb-1"
              style={{color: focused ? '#714dd9' : '#707070'}}>
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => <Search width={24} height={24} fill="white" />,
          tabBarLabel: ({focused, color}) => (
            <Text
              className="text-[13px] mb-1"
              style={{color: focused ? '#714dd9' : '#707070'}}>
              Search
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: () => (
            <Notification width={24} height={24} fill="white" />
          ),
          tabBarLabel: ({focused, color}) => (
            <Text
              className="text-[13px] mb-1"
              style={{color: focused ? '#714dd9' : '#707070'}}>
              Notification
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={Profile}
              style={{width: 25, height: 25}}
              className="rounded-full"
            />
          ),
          tabBarLabel: ({focused, color}) => (
            <Text
              className="text-[13px] mb-1"
              style={{color: focused ? '#714dd9' : '#707070'}}>
              Account
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="BottomTabs" component={LoggedInTabs} />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
    </Stack.Navigator>
  );
}
