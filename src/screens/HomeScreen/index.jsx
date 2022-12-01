import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
// eslint-disable-next-line import/namespace
import { View, Text, ScrollView } from 'react-native';

import { MainLayout } from '../../layouts';
import AllTasksScreen from './Tasks/AllTasksScreen';
import AssistantReminders from './Tasks/AssistantReminders';
import styles from './index.styles';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  // const [allTasks, setAllTasks] = useState([]);
  // const baseURL = 'http://api.ticked.hng.tech:2022/search?q=t';
  // const getAllTask = async () => {
  //   try {
  //     const result = await axios.get(`${baseURL}`);
  //     console.log(result.data.data);
  //     setAllTasks(result.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // React.useEffect(() => {
  //   getAllTask();
  // }, []);

  return (
    <MainLayout>
      <View style={styles.container}>
        {/* {allTasks.map((item, index) => (
          <View key={index}>
            <Text >{item.title}</Text>
          </View>
        ))} */}
        {/* Stats */}
        <ScrollView>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {
                fontSize: 14,
                color: '#ACADB6',
                focused: true,
                textTransform: 'capitalize',
              },

              tabBarIndicatorStyle: {
                backgroundColor: '#714DD9',
              },
              tabBarActiveTintColor: '#FDA758',
              tabBarStyle: { backgroundColor: 'none' },
            }}>
            <Tab.Screen
              name="All tasks"
              component={AllTasksScreen}
              options={{
                tabBarLabel: ({ focused, color }) => (
                  <Text style={{ color: focused ? '#714dd9' : '#ACADB6' }}>All tasks</Text>
                ),
              }}
            />
            <Tab.Screen
              name="Mine"
              component={AllTasksScreen}
              options={{
                tabBarLabel: ({ focused, color }) => (
                  <Text style={{ color: focused ? '#714dd9' : '#ACADB6' }}>Mine</Text>
                ),
              }}
            />
            <Tab.Screen
              name="Assistant"
              component={AssistantReminders}
              options={{
                tabBarLabel: ({ focused, color }) => (
                  <Text style={{ color: focused ? '#714dd9' : '#ACADB6' }}>Assistant</Text>
                ),
              }}
            />
          </Tab.Navigator>
        </ScrollView>
      </View>
    </MainLayout>
  );
};

export default HomeScreen;
