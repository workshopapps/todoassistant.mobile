import { View, Text,Image, TextInput } from "react-native";
import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./index.styles";
import logo from "../../assets/logo.png";
import info from "../../assets/info.png";
import Checkbox from "expo-checkbox";
import { Button } from "../../components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";

const TaskScreen = () => {
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
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>New Task</Text>
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
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          Task name
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
          placeholder=" What do you want to do?"
          color="D9D9D9"
        />
        <View style={{ height: 14 }} />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          Task Description
        </Text>
        <View style={{ height: 8 }} />

        <TextInput
          style={{
            height: 100,
            backgroundColor: "#ffffff",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#d9d9d9",
            paddingLeft: 20,
            paddingRight: 20,
            marginLeft: 20,
            marginRight: 20,
          }}
          placeholder=" Describe what  you want to do?"
          color="D9D9D9"
          multiline
          numberOfLines={4}
        />
        <View style={{ height: 14 }} />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
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

        <View
          style={{
            backgroundColor: "#e5e5e5",
            display: "flex",
            flexDirection: "column",
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <View style={{ height: 14 }} />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            Time
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
            placeholder=" Select Time"
            color="D9D9D9"
            editable={false}
          />
          <View style={{ display: "flex", flexDirection: "row", padding: 20 }}>
            <Image style={{ height: 20, width: 20 }} source={info} />
            <Text>You will be reminded 30 minutes before time </Text>
          </View>
        </View>
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
        <View style={{ height: 30 }} />

        <Button
          onPress={() => navigation.navigate("TaskScreenContd")}
          style={{ fontSize: 14 }}
          title="Create Task"
        />
      </View>
    </View>
  );
};

export default TaskScreen;
