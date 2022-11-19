import { View, Text, Image, TextInput } from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./index.styles";
import { useDispatch, useSelector } from "react-redux";
import logo1 from "../../assets/logo1.png";
import google from "../../assets/google.png";
import fb from "../../assets/fb.png";

import { Button } from "../../components/Button";

const Login = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "˛center",
        paddingTop: 60,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#ffffff",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 60,
        }}
      >
        <Image
          source={logo1}
          style={{
            width: 128,
          }}
        />
      </View>

      <Text
        style={{
          color: "#000000",
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "center",
          paddingTop: 30,
          paddingBottom: 30,
        }}
      >
        Login
      </Text>
      <Text
        style={{
          color: "#000000",
          fontSize: 14,

          textAlign: "left",
          paddingTop: 30,
          paddingBottom: 5,
        }}
      >
        Email Address
      </Text>
      <TextInput
        placeholder="Enter Email "
        style={{
          border: 2,
          borderRadius: 8,
          borderWidth: 1,
          height: 48,
          width: "100%",
          justifyContent: "center",
          borderColor: "#030303",
          backgroundColor: "#F6FAFB",
          paddingLeft: 10,
        }}
      />
      <Text
        style={{
          color: "#000000",
          fontSize: 14,
          textAlign: "left",
          paddingTop: 30,
          paddingBottom: 5,
        }}
      >
        Password
      </Text>
      <TextInput
        placeholder="Password "
        style={{
          border: 2,
          borderRadius: 8,
          borderWidth: 1,
          height: 48,
          width: "100%",
          justifyContent: "center",
          borderColor: "#030303",
          backgroundColor: "#F6FAFB",
          paddingLeft: 10,
        }}
      />

      <View
        style={{
          display: "#flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          marginBottom: 30,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#4630EB" : undefined}
          />
          <Text style={{ paddingLeft: 7, color:"#333333"}}>Remember me </Text>
        </View>
        <Text style={{ color: "#714DD9" }}>Forgot Password ?</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          paddingTop: 20,
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 30,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button
          onPress={() => navigation.navigate("Home2")}
          style={{ fontSize: 14 }}
          title="Sign In"
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ height: 2, flex: 1, backgroundColor: "#D3D0D9" }} />
        <Text style={{ paddingLeft: 10, paddingRight: 10, color: "#808080" }}>
          Or continue with
        </Text>
        <View style={{ height: 2, flex: 1, backgroundColor: "#D3D0D9" }} />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
          paddingHorizontal: 20,
          marginBottom: 40
        }}
      >
        <Image source={google} style={{margin: 20}} />
        <Image source={fb} style={{margin: 20}} />

      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",}}>
            <Text style={{color: "#808080"}}>Don't have an account?</Text>
            <Text style={{color: "#714dd9"}}> Sign Up</Text>
          </View>
    </View>
  );
};

export default Login;
