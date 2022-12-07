import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useState } from 'react';
// eslint-disable-next-line import/namespace
import { FlatList, View } from 'react-native';

import { fetchTask } from '../../../api/task';
import { Tasks } from '../../../components';
import { BASE_URL } from '../../../utils/config';
import styles from './index.styles';

const AllTasksScreen = () => {
  const [allTasks, setAllTasks] = useState();

  const getAllTask = async () => {
    try {
      await axios
        .get(`${BASE_URL}/task`, {
          headers: {
            Authorization: `Bearer ${await AsyncStorage.getItem('userToken')}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setAllTasks(response.data);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    getAllTask();
  }, []);

  // const createTask = useSelector((state) => state.createTaskSlice.value);
  return (
    <View style={styles.container}>
      <FlatList
        data={allTasks}
        renderItem={({ item }) => <Tasks task={item.title} time={item.end_time} />}
      />
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
