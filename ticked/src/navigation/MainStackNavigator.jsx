import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, ProfileScreen } from '../screens';
import MyProfile from '../screens/Profile/ProfileLayout';
import ChangePassword from '../screens/Profile/ChangePassword';
import EditProfile from '../screens/Profile/EditProfile';


const Stack = createNativeStackNavigator()
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='My profile' component={MyProfile} />
      <Stack.Screen name='Change password' component={ChangePassword} />
      <Stack.Screen name='Edit Profile' component={EditProfile} />
    </Stack.Navigator>
  )
}

export default MainStackNavigator