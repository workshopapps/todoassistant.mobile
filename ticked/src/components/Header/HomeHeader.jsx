import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./index.styles";
import icon from "../../assets/profile.jpg";
import wave from "../../assets/wave.png";
import { useDispatch } from "react-redux";
import { logout } from "../../features/authSlice";

const HomeHeader = () => {
  const dispatch = useDispatch()

  const signOut = () => {
    dispatch(logout())
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.flexrow}>
          <Text style={styles.title}>Morning, Boss</Text>
          <Image source={wave} />
        </View>
        <Text>Let's get you started!</Text>
      </View>
      <View onPress={signOut}>
        {/* Message Icon */}
        <Image source={icon} style={styles.image}  />
      </View>
    </View>
  );
};

export default HomeHeader;
