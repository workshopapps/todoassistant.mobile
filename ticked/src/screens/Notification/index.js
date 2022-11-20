import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Header } from "../../components";

const Notification = () => {
  return (
    <View>
      <Header title="Notifications" iconName="keyboard-backspace" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginVertical: 20,
        }}
      >
        <TouchableOpacity>
          <Text style={{ fontSize: 16 }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 25 }}>
          <Text style={{ fontSize: 16 }}>Unread</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: "45%" }}>
          <Text style={{ fontSize: 16 }}>Mark all as read</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Text>TODAY</Text>
        <TouchableOpacity>
          <Text style={{ color: "red" }}>clear all</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notification;
