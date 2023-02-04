import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  NotificationsScreen,
  ProfileScreen,
  SearchScreen,
} from '../screens';

// Icons
import Home from '../assets/bottom-tabs-icons/home.svg';
import Search from '../assets/bottom-tabs-icons/search-normal.svg';
import Notification from '../assets/bottom-tabs-icons/notification-bing.svg';
import Profile from '../assets/bottom-tabs-icons/profile.jpg';
import {Image, Text} from 'react-native';

const Tab = createBottomTabNavigator();

export const LoggedInTabs = () => {
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
};
