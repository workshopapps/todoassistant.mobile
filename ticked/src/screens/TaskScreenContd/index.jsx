import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./index.styles";
import logo from "../../assets/logo.png";
import info from "../../assets/info.png";
import Checkbox from "expo-checkbox";
import { Button } from "../../components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";

const TaskScreenContd = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        paddingTop: 60,

        backgroundColor: "#f6fafb",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          height: 60,
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
          }}
        />
        <Image
          source={logo}
          style={{
            width: 100,
            height: 32,
          }}
        />
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: "blue",
              borderRadius: 30,
            }}
          />
          <Ionicons name="md-checkmark-circle" size={32} color="green" />
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          // backgroundColor: "red",
          flex: 1,
        }}
      >
        <View
          style={{
            display: "flex",
            height: 44,
            width: "100%",
            backgroundColor: "#ffffff",
            paddingHorizontal: 20,
            paddingVertical: 5,
            flexDirection: "column",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Task</Text>
          <View
            style={{
              height: 4,
              width: 60,
              borderRadius: 2,
              backgroundColor: "#714DD9",
            }}
          />
        </View>
        <View style={{ height: 14 }} />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: 20,
            paddingRight: 20,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Go to the bank
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#FDA758" }}>
            Pending
          </Text>
        </View>
        <View style={{ height: 20 }} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: 20,
            paddingRight: 20,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#707070" }}>
            Start time
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#707070" }}>
            End time
          </Text>
        </View>
        <View style={{ height: 14 }} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: 20,
            paddingRight: 20,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#000000" }}>
            11:00am
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#000000" }}>
            02:00pm
          </Text>
        </View>
        <View style={{ height: 14 }} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingRight: 20,
          }}
        >
          <Text style={{ fontSize: 16, color: "#ff4d4f" }}>
            Due in 3{"\n"}hours
          </Text>
        </View>
        <View style={{ height: 30 }} />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 5,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          Task Description
        </Text>
        <Text
          style={{
            fontSize: 16,

            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          I need to upgrade my account and request for a new token.{" "}
        </Text>
        <View style={{ height: 30 }} />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 5,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          Attachment
        </Text>
        <View style={{ height: 14 }} />

        <View style={{ display: "flex", flexDirection: "row",  paddingLeft: 20,
            paddingRight: 20, marginTop: 30 }}>
        

        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={{paddingLeft: 5, fontSize: 14}}> Get a call from an assistant to remind you</Text>
        </View>
        <View style={{ height: 14 }} />

        <Button
          onPress={() => navigation.navigate("TaskScreen")}
          style={{ fontSize: 18 }}
          title="Create Task"
        />
        <View style={{ height: 14 }} />

        <Button
          onPress={() => navigation.navigate("TaskScreen")}
          style={{ fontSize: 18, backgroundColor: "#ffffff", borderWidth: 1, borderColor: "#714dd9" }}
          title="Edit Task"
          textColor= "#714dd9"
        />
      </View>
    </View>
  );
};

export default TaskScreenContd;
