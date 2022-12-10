import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import { AuthContext } from '../context/userContext';
import { selectIsLoggedIn } from '../features/authSlice';
import AuthStackNavigator from '../navigation/AuthStackNavigator';
import MainStackNavigator from '../navigation/MainStackNavigator';

const Router = () => {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <MainStackNavigator /> 
      {/* <AuthStackNavigator /> */}
      {/* {userToken !== null ? <MainStackNavigator /> : <AuthStackNavigator />} */}
    </NavigationContainer>
  );
};

export default Router;
