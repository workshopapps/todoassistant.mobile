import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./index.styles";
import { useDispatch, useSelector } from "react-redux";
import { MainLayout } from "../../layouts";
import { Input } from "../../components/Input";

const HomeScreen = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const navigate = useNavigation();

  return (
    <MainLayout>
      <View>
        <Input />
      </View>
    </MainLayout>
  );
};

export default HomeScreen;
