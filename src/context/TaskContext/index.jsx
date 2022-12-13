import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useCallback, useState } from 'react';

import { BASE_URL } from '../../utils/config';

export const taskCtxDefaultValues = {
  task: [],
  tasks: {},
  isLoading: false,
  getTasks: () => null,
  setTasks: () => null,
  getSelectedTask: () => null,
  getTaskById: () => null,
  updateTask: () => null,
  deleteTask: () => null,
};

export const TaskCtx = createContext(taskCtxDefaultValues);

const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  let token = '';
  if (JSON.stringify(AsyncStorage.getItem('user'))) {
    token = AsyncStorage.getItem('userToken');
  }

  const getTasks = useCallback(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/task`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setTasks(res.data))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, [setTasks]);

  const getTaskById = useCallback(
    (id) => {
      setIsLoading(true);
      axios
        .get(`${BASE_URL}/task/${id}`)
        .then((res) => setTask(res))
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false));
    },
    [setTask]
  );

  const getSelectedTask = (id) => {
    const selectedTask = tasks.find((task) => task.task_id === id);
    setTask(selectedTask);
  };

  const updateTask = (id, data) => {
    setIsLoading(true);
    axios
      .put(`${BASE_URL}/task/${id}`, data)
      .then(() => getTasks())
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  };

  const deleteTask = (id) => {
    setIsLoading(true);
    axios
      .delete(`${BASE_URL}/task/${id}`)
      .then(() => getTasks())
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  };

  return (
    <TaskCtx.Provider
      value={{
        tasks,
        task,
        isLoading,
        getTaskById,
        getTasks,
        setTasks,
        updateTask,
        deleteTask,
        getSelectedTask,
      }}>
      {children}
    </TaskCtx.Provider>
  );
};
export default TaskContextProvider;
