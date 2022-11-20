import { View, Text } from "react-native";
import React, { ReactNode, useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import styles from "./AuthLayout.styles";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View>{children}</View>
    </SafeAreaView>
  );
};

export default AuthLayout;
