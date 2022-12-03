import React, { useState } from "react";
// eslint-disable-next-line import/namespace
import { View } from "react-native";

import { fetchTask } from "../../../api/task";
import { Tasks } from "../../../components";
import styles from "./index.styles";

const AllTasksScreen = () => {
  const [allTasks, setAllTasks] = useState();

  const getAllTask = async () => {
    try {
      await fetchTask().then((response) => {
        console.log(response);
        setAllTasks(response)
      }
       
      )
    } catch (error) {
      
      // console.log(response.error);
      
    }
  };

  React.useEffect(() => {
    getAllTask();
  }, []);

  // const createTask = useSelector((state) => state.createTaskSlice.value);
  return (
    <View style={styles.container}>
      {/* {allTasks.map((item, index) => (
        <View key={index}>
          <Tasks task={item.title} time={item.created_at} />
        </View>
      ))} */}

      {/* <Tasks /> */}
    </View>
  );
};

export default AllTasksScreen;
