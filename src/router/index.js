import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import { AuthContext } from '../context/userContext';
import { selectIsLoggedIn } from '../features/authSlice';
import AuthStackNavigator from '../navigation/AuthStackNavigator';
import MainStackNavigator from '../navigation/MainStackNavigator';
<<<<<<< HEAD
=======
import { AuthContext } from '../context/AuthContext/authContext';
>>>>>>> 0364c1ed81ab7934d0a2f5a2b40652b6ad122c41

const Router = () => {
  const { user } = useContext(AuthContext);

<<<<<<< HEAD
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
=======
  // if (isLoading) {
  //   return (
      // // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //   {/* <ActivityIndicator size={'large'} />
        {/* <Text>Loading...</Text> */}
      {/* </View> */}
  //   ); */}
  // }

  return (
    <NavigationContainer>
      {user ? <MainStackNavigator /> : <AuthStackNavigator />}
>>>>>>> 0364c1ed81ab7934d0a2f5a2b40652b6ad122c41
    </NavigationContainer>
  );
};

export default Router;
