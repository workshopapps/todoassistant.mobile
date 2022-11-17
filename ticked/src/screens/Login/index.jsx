import { View, Text, Image, TextInput } from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./index.styles";
import { useDispatch, useSelector } from "react-redux";
import logo1 from "../../assets/logo1.png";
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
        }}
      />
     
      <View style={{display: "#flex", flexDirection: "row", justifyContent:"space-between", marginTop: 10,}}>
      <View style={{display: "flex", flexDirection: "row", justifyContent:"space-between" }}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#4630EB" : undefined}
        />
        <Text style={{ paddingLeft: 7 }}>Remember me </Text>
      </View>
        <Text style={{ color: "#714DD9" }}>
          Forgot Password ?
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingTop: 20,
          paddingLeft: 20,
          paddingRight: 20,
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
    </View>
  );
};

export default Login;
