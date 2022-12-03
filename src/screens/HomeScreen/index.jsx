/* eslint-disable import/namespace */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Text } from 'react-native';

import { MainLayout } from '../../layouts';
import AllTasksScreen from './Tasks/AllTasksScreen';
import AssistantReminders from './Tasks/AssistantReminders';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <MainLayout>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 14,
            color: '#000',
            focused: true,
            textTransform: 'capitalize',
          },

          tabBarIndicatorStyle: {
            backgroundColor: '#714DD9',
          },
          tabBarActiveTintColor: '#FDA758',
          tabBarStyle: { backgroundColor: 'none', width: '65%' },
        }}>
        <Tab.Screen
          name="All"
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
    </MainLayout>
  );
};

export default HomeScreen;
// React.useEffect(() => {
//   getAllTask();
// }, []);
