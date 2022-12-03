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