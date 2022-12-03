import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import styles from "./Screen2/index.styles";
import home1 from "../../assets/home1.png";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen1 = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <View style={styles.container9}>
        <View style={styles.container2}>
          <TouchableOpacity  onPress={() => navigation.navigate('Auth')} >
          <Text style={styles.textOne}> Skip</Text></TouchableOpacity>
        </View>
        <Image source={home1} style={styles.img} />
        <View style={styles.container3}>
          <Text style={styles.container4}>Managing your task the easy way</Text>
          <Text style={styles.texts}>
            The most useful to-do-list app that breaks tasks
          </Text>
          <Text style={styles.texter}>into small steps.</Text>
          <Button
            onPress={() => navigation.navigate('Onboarding2')}
            style={{ fontSize: 14 }}
            title="Next"
          />
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen1;
