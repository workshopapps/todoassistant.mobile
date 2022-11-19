import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./index.styles";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title="TaskScreen" onPress={() => navigate.navigate("TaskScreen")} />

      <Text>Count: {count}</Text>
      <View style={styles.button}>
        <Button
          title="Increment"
          onPress={() => dispatch({ type: "counter/increment" })}
        />
        <Button
          title="Decrement"
          onPress={() => dispatch({ type: "counter/decrement" })}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
