import { View, Text } from 'react-native'
import React from 'react'
import { MainLayout } from '../../layouts'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
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
                <Tab.Screen name="All" component={AllTasksScreen} />
                <Tab.Screen name="Mine" component={AllTasksScreen} />
                <Tab.Screen name="Assistant" component={AssistantReminders} />
            </Tab.Navigator>
        </MainLayout>
    )
}

export default HomeScreen
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
