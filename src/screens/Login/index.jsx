import { View, Text, Image, TextInput } from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./index.styles";
import { useDispatch, useSelector } from "react-redux";
import logo1 from "../../assets/logo1.png";
import google from "../../assets/google.png";
import fb from "../../assets/fb.png";
import {login} from "../../features/authSlice"

import { Button } from "../../components/Button";

const Login = () => {
  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation();
  const [email, setEmail] = useState()

  const dispatch = useDispatch()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleLogin = async () => {
    let user;

    user = {
      isLoggedIn: true,
      email: 'test@gmail.com',
    };

    dispatch(login(user));
  };

  return (
    <View
      style={styles.cards}
    >
      <View
        style={styles.cards1}
      >
        <Image
          source={logo1}
          style={{
            width: 128,
          }}
        />
      </View>

      <Text
        style={styles.textOne}
      >
        Login
      </Text>
      <Text
        style={styles.textThree}
      >
        Email Address
      </Text>
      <TextInput
        placeholder="Enter Email "
        style={styles.viewer}
      />
      <Text
        style={styles.textThree}
      >
        Password
      </Text>
      <TextInput
        placeholder="Password "
        style={styles.viewer}
      />

      <View
        style={styles.views}
      >
        <View
          style={styles.viewrr}
        >
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#4630EB" : undefined}
          />
          <Text style={styles.stylew}>Remember me </Text>
        </View>
        <Text style={styles.stylesss}>Forgot Password ?</Text>
      </View>
      <View
        style={styles.styling}
      >
        <Button
          onPress={handleLogin}
          style={{ fontSize: 14, width:"110%" }}
          title="Sign In"
        />
      </View>
      <View
        style={styles.stylings}
      >
        <View style={styles.styling1} />
        <Text style={styles.styling2}>
          Or continue with
        </Text>
        <View style={styles.styling3} />
      </View>
      <View
        style={styles.styling4}
      >
        <Image source={google} style={styles.styless} />
        <Image source={fb} style={styles.styless} />
      </View>
      <View
        style={styles.stylez}
      >
        <Text style={styles.stylezzz}>Don't have an account?</Text>
        <Text style={styles.stylesss} onPress={() => navigation.navigate('Registration')}> Sign Up</Text>
      </View>
    </View>
  );
};

export default Login;
