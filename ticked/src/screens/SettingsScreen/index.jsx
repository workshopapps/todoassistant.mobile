import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import styles from "./index.styles"; // <--- import styles from index.styles.js
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { Button, SettingCard, SettingOption } from "../../components";

const SettingScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Icon name="arrow-back" size={20}>
          {" "}
          <Text style={styles.title}>Settings</Text>
        </Icon>
      </TouchableOpacity>
      <ScrollView style={styles.marginBottom}>
        <SettingCard>
          <SettingOption icon="user-o" name="Account" />
          <SettingOption icon="diamond" name="Upgrade to Pro" />
          <SettingOption icon="" name="Settings" />
        </SettingCard>
        <SettingCard title="Personalisation">
          <SettingOption icon="paint-roller" name="Themes" />
        </SettingCard>
        <SettingCard title="Productivity">
          <SettingOption icon="bell-o" name="Notifications" />
          <SettingOption icon="" name="Reminders" />
        </SettingCard>
        <SettingCard title="More">
          <SettingOption icon="" name="Help Center" />
          <SettingOption icon="" name="About" />
          <SettingOption icon="" name="Contact Us" />
        </SettingCard>

        {/* <Button title="Sign out" /> */}
      </ScrollView>
      {/* <Button title="Sign out" /> */}
    </SafeAreaView>
  );
};

export default SettingScreen;
