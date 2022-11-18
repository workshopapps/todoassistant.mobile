import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export default AuthLayout;
