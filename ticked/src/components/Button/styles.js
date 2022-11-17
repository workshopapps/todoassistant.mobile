import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../utils/colors";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    width: width / 1.2,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    borderRadius: 8,
  },
  title: {
    fontWeight: "normal",
    fontSize: 20,
    color: colors.white,
  },
});
