import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../utils/colors";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: 50,
    width: width / 1.2,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    borderRadius: 8,
    borderColor: colors.primary,
    borderWidth: 2,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontWeight: "normal",
    fontSize: 20,
    color: colors.primary,
  },
});
