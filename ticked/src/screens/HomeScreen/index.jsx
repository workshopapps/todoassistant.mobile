import { View, Text, Image } from "react-native";
import React from "react";
import {useNavigation} from '@react-navigation/native';
import styles from "./index.styles";
import { useDispatch, useSelector } from "react-redux";
import home1 from "../../assets/home1.png";
import { Button } from "../../components/Button";

const HomeScreen = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

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
        paddingLeft:20,
        paddingRight:20,
        backgroundColor: "#ffffff",
      }}
    >
      <View style={{display: "flex", flexDirection:"row", justifyContent: "flex-end", paddingRight: 20, }} >
      <Text style={{color:"#714DD9", fontSize:14}}> Skip</Text></View>
      <Image
        source={home1}
        style={{
          flex: 3,
          width: "100%",
        }}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingTop: 20,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 8,
          }}
        >
          Managing your task the easy way
        </Text>
        <Text style={{ fontSize: 14, paddingBottom: 5 }}>
          {" "}
          The most useful to-do-list app that breaks tasks
        </Text>
        <Text style={{ fontSize: 14, paddingBottom: 30 }}>
          {" "}
          into small steps.
        </Text>
        <Button onPress={() => navigation.navigate('Home2')} style={{ fontSize: 14 }} title="Next" />
      </View>
    </View>
  );
};

export default HomeScreen;
