import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./index.styles";
import { useDispatch, useSelector } from "react-redux";
import home2 from "../../../assets/home2.png";
import { Button } from "../../../components/Button";

const Screen2 = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.viewOne}>
      <View style={styles.viewTwo}>
        <Text style={styles.textOne}> Skip</Text>
      </View>
      <Image source={home2} style={styles.img} />
      <View style={styles.card}>
        <Text style={styles.cards}>Create Customized task flows</Text>
        <Text style={styles.texts}>
          Your to-do-list are automatically sorted into
        </Text>
        <Text style={styles.texts}>
          categories with a daily reminder to keep you in check
        </Text>
        <Text style={styles.texter}>check.</Text>
        <Button
          onPress={() => navigation.navigate("Auth")}
          style={{ fontSize: 14 }}
          title="Next"
        />
      </View>
    </View>
  );
};

export default Screen2;
