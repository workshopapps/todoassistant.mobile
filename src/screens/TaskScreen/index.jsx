import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./index.styles";
import arrowLeft from "../../assets/arrowLeft.png";
import folder from "../../assets/folder.png";
import info from "../../assets/info.png";
import trash from "../../assets/trash.png";
import arrow from "../../assets/arrow.png";
import Checkbox from "expo-checkbox";
import { Button } from "../../components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import RadioForm from "react-native-simple-radio-button";
import { useDispatch, useSelector } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView } from "react-native-safe-area-context";

const TaskScreen = () => {
  const navigation = useNavigation();

  const [chosenOption, setChosenOption] = useState(""); //will store our current user options
  const options = [
    {
      label: "Assign the task to an assistant",
      value: "Assign the task to an assistant",
    },
    {
      label: "Get a call from an assistant to remind you",
      value: "Get a call from an assistant to remind you",
    },
    { label: "None", value: "None" },
  ];

  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          height: 60,
          width: "100%",
          backgroundColor: "#F6FAFB",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={arrowLeft}
          style={{
            width: 24,
            height: 24,
            margin: 15,
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate("TaskScreen")}>
          <View
            style={{
              backgroundColor: "#714dd9",
              borderWidth: 1,
              borderColor: "#714dd9",
              alignItems: "center",
              justifyContent: "center",
              width: 108,
              height: 48,
              marginRight: 20,
              paddingVertical: 15,
              borderRadius: 8,
            }}
          >
            <Text style={{ color: "#ffffff", fontSize: 18 }}>Create Task</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F6FAFB",
        }}
      >
        <View
          style={{
            // backgroundColor: "red",
            flex: 1,
            marginTop: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              // height: 44,
              width: "100%",

              paddingHorizontal: 20,
              paddingVertical: 5,
              flexDirection: "column",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Create To Do
            </Text>
          </View>
          <View style={{ height: 20 }} />
          <Text
            style={{
              fontSize: 12,

              marginLeft: 20,
              marginRight: 20,
            }}
          >
            Title
          </Text>
          <View style={{ height: 8 }} />

          <TextInput
            style={{
              height: 48,
              backgroundColor: "#ffffff",
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#d9d9d9",
              paddingLeft: 20,
              paddingRight: 20,
              marginLeft: 20,
              marginRight: 20,
            }}
            placeholder="Task title"
            color="D9D9D9"
          />
          <View style={{ height: 14 }} />
          <Text
            style={{
              fontSize: 12,
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            Description
          </Text>
          <View style={{ height: 8 }} />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#ffffff",
              // borderWidth: 1,
              marginLeft: 20,
              marginRight: 20,
              borderRadius: 15,
              // borderColor: "grey",
            }}
          >
            <TextInput
              style={{
                height: 150,
                backgroundColor: "#ffffff",

                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 10,
              }}
              placeholder=" Type a text"
              color="D9D9D9"
              multiline
              numberOfLines={4}
            />
          </View>
          <View style={{ height: 14 }} />
          <Text
            style={{
              fontSize: 12,

              marginLeft: 20,
              marginRight: 20,
            }}
          >
            Date
          </Text>
          <View style={{ height: 8 }} />

          <TextInput
            style={{
              height: 48,
              backgroundColor: "#ffffff",
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#d9d9d9",
              paddingLeft: 20,
              paddingRight: 20,
              marginLeft: 20,
              marginRight: 20,
            }}
            placeholder=" Select Date"
            color="D9D9D9"
            editable={false}
          />
          <View style={{ height: 14 }} />

          <View style={{ height: 10 }} />
          <Text
            style={{
              fontSize: 12,

              marginLeft: 20,
              marginRight: 20,
            }}
          >
            Reminder Time
          </Text>
          <View style={{ height: 8 }} />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#ffffff",
              height: 48,
              width: 106,
              paddingLeft: 2,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 20
            }}
          >
            <Text style={{ flex: 1 }}>00: 00</Text>
            <Text style={{ flex: 1 }}>PM</Text>
          </View>

          <View style={{ height: 8 }} />

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 20,
              paddingRight: 20,
              marginTop: 30,
            }}
          >
            <Text> Virtual Assistant</Text>
            <View style={{ height: 20 }} />

            <RadioForm
              radio_props={options}
              initial={1}
              selectedButtonColor={"#714dd9"}
              borderWidth={1}
              buttonColor={"#ededed"}
              activeColor="#714dd9" //initial value of this group
              onPress={(value) => {
                setChosenOption(value);
              }} //if the user changes options, set the new value
            />
          </View>
          <View style={{ height: 30 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskScreen;
