import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../features/authSlice";
import AuthStackNavigator from "../navigation/AuthStackNavigator";
import MainStackNavigator from "../navigation/MainStackNavigator";

const Router = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthStackNavigator /> : <MainStackNavigator />}
    </NavigationContainer>
  );
};

export default Router;
