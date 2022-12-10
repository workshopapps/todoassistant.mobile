import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useContext, useState } from 'react';
// eslint-disable-next-line import/namespace
import { FlatList, View } from 'react-native';

import { fetchTask } from '../../../api/task';
import { Tasks } from '../../../components';
import { TaskCtx } from '../../../context/TaskContext';
import { BASE_URL } from '../../../utils/config';
import styles from './index.styles';

const AllTasksScreen = () => {
  const [allTasks, setAllTasks] = useState();

  const {tasks} = useContext(TaskCtx)
  console.log(tasks)


  // const createTask = useSelector((state) => state.createTaskSlice.value);
  return (
    <View style={styles.container}>
      
      {/* <Tasks /> */}
      <FlatList
        data={tasks}
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
