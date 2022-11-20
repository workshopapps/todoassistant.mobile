import { View, Text } from "react-native";
import { styles } from "./styles";

export const MessageInput = ({
  image,
  messageTitle,
  style,
  imageColor,
  message,
  time,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.imageContainer, imageColor]}>
        <Text style={styles.text1}>{image}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleHead}>{messageTitle}</Text>
        <Text style={styles.titleText}>{message}</Text>
      </View>
      <Text style={styles.text2}>{time}</Text>
    </View>
  );
};
