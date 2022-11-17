import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../utils/colors";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    color: colors.dark,
    fontSize: 15,
    fontWeight: "400",
  },
  inputContainer: {
    height: 50,
    width: width / 1.2,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    position: "relative",
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
  },
  eye: {
    width: 24,
    height: 24,
    position: "absolute",
    alignSelf: "center",
    right: 5,
  },
});
