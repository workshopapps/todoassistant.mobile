import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

// import { AuthContext } from '../context/userContext';
import { AuthContext } from '../context/AuthContext/authContext';
import AuthStackNavigator from '../navigation/AuthStackNavigator';
import MainStackNavigator from '../navigation/MainStackNavigator';

const Router = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Router;
