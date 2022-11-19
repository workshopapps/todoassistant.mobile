import { StyleSheet } from "react-native";
import { fontSizes, spacing } from "../../utils/sizes";

export const styles = StyleSheet.create({
  backStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.lg,
    marginTop: spacing.xxl,
    paddingHorizontal: spacing.md,
  },
  name: {
    color: "#333333",
    fontSize: fontSizes.xl,
    fontWeight: "500",
    paddingHorizontal: fontSizes.xl,
  },
  title: {
    fontSize: fontSizes.lg,
    fontWeight: "500",
    alignSelf: "center",
  },
});
