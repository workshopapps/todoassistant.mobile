import React, { useState } from 'react';
// eslint-disable-next-line import/namespace
import { View, Text } from 'react-native';
import { Tasks } from '../../../components';
import store from '../../../store';
import axios from 'axios';
import styles from './index.styles';

const AllTasksScreen = () => {
  const [allTasks, setAllTasks] = useState([]);
  const baseURL = 'http://api.ticked.hng.tech:2022/search?q=t';
  const getAllTask = async () => {
    try {
      const result = await axios.get(`${baseURL}`);
      console.log(result.data.data);
      setAllTasks(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAllTask();
  }, []);

  // const createTask = useSelector((state) => state.createTaskSlice.value);
  return (
    <View style={styles.container}>
      {allTasks.map((item, index) => (
        <View key={index}>
          <Tasks task={item.title} time={item.created_at} />
        </View>
      ))}

      {/* <Tasks /> */}
    </View>
  );
};

export default AllTasksScreen;
