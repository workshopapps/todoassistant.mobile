import { View, Text } from "react-native";
import React from "react";
import styles from "./index.styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import formatAMPM from "../../utils/formatTime";


const Tasks = ({ task, time, isChecked }) => {

  return (
    <View style={styles.container}>
      <View>
        <Text>{task}</Text>
        <Icon name="alarm">
          <Text>{formatAMPM(time)}</Text>
        </Icon>
      </View>
      {/* checkbox */}
    </View>
  );
};

export default Tasks;
