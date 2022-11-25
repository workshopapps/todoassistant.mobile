import { View, Text, ActivityIndicator } from 'react-native';
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../features/authSlice';
import AuthStackNavigator from '../navigation/AuthStackNavigator';
import MainStackNavigator from '../navigation/MainStackNavigator';
import { AuthContext } from '../context/userContext';

const Router = () => {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Router;
