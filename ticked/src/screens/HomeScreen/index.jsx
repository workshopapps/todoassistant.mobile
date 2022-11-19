import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./index.styles";
import { useDispatch, useSelector } from "react-redux";
import { MainLayout } from "../../layouts";
import { Input } from "../../components/Input";
import Icon from "react-native-vector-icons/EvilIcons";

const HomeScreen = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const navigate = useNavigation();

  return (
    <MainLayout>
      <View style={styles.container}>
        <View style={styles.search}>
          <Icon name="search">
            <Input style={styles.search} />
          </Icon>
        </View>
        {/* Stats */}
        <View>
          <Text>Your Progress</Text>
        </View>
        <View>
          <Text>Tasks</Text>
        </View>
        <View>
          <Text>Completed 2</Text>
        </View>
      </View>
    </MainLayout>
  );
};

export default HomeScreen;
