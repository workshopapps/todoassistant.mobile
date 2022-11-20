import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
    marginVertical: 10,
  },
  titleText: {
    marginVertical: 20,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
  },
  button: {
    marginHorizontal: 70,
    width: "50%",
    marginVertical: 40,
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
