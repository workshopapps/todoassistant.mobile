import AsyncStorage from "@react-native-async-storage/async-storage";

import Axios from "../utils/axios";

export const fetchTask = async () => {
  const userToken = await AsyncStorage.getItem("userToken");
  const config = {
    headers: { Authorization: "Bearer " + userToken },
  };
  return Axios.get("/task", null, config);
};
