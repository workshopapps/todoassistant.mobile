import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    marginHorizontal: 2,
    padding: 10,
  },
  cards:{
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#ffffff",
  },
  cards1:{
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 60,
  },
  textOne:{
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 30,
    paddingBottom: 30,
  },
  textTwo:{
    color: "#000000",
    fontSize: 14,
    textAlign: "left",
    paddingTop: 30,
    paddingBottom: 5,
  },
});
