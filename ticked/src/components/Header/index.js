import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

export const Header = ({ name }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(goBack());
  };
  return (
    <View style={{ flexDirection: "row" }}>
      <Icon
        name="arrow-back"
        onPress={onPress}
        style={{ marginLeft: 20, marginTop: 10 }}
        size={24}
        color="black"
      />
      <Text style={{ fontSize: 24 }}>Back</Text>
    </View>
  );
};
