import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
// eslint-disable-next-line import/namespace
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import FireIcon from 'react-native-vector-icons/SimpleLineIcons';

import Rate from '../../assets/svg/rate-icon.svg';
import Streak from '../../assets/svg/streak-icon.svg';
import { MainLayout } from '../../layouts';
import AllTasksScreen from './Tasks/AllTasksScreen';
import AssistantReminders from './Tasks/AssistantReminders';
import styles from './index.styles';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <MainLayout>
      <View style={styles.container}>
        {/* Stats */}
        <View style={styles.stats}>
          <Text style={styles.bold}>Activity</Text>
          <View style={styles.cardFlex}>
            <View style={styles.card}>
              <View style={styles.flexRow}>
                <View>
                  <Text style={styles.bold}>3/7 to do</Text>
                  <Text style={styles.grey}>ticked</Text>
                </View>
                <View style={styles.chart}>
                  <Rate color="#29319F" style={{ color: '#29319F' }} height={20} width={20} />
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.flexRow}>
                <View>
                  <Text style={styles.bold}>7 Day streak</Text>
                  <Text style={styles.grey}>streak</Text>
                </View>
                <View style={styles.fire}>
                  <Streak height={20} width={20} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.tasks_nav}>
        <Text style={styles.text_todo}>To do's</Text>
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
            tabBarStyle: { backgroundColor: 'none' },
          }}>
          <Tab.Screen name="All" component={AllTasksScreen} />
          <Tab.Screen name="Mine" component={AllTasksScreen} />
          <Tab.Screen name="Assistant" component={AssistantReminders} />
        </Tab.Navigator>
      </View>
    </MainLayout>
  );
};

export default HomeScreen;
