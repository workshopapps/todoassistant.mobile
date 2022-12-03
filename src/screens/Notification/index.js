/* eslint-disable import/namespace */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AllNotifications from './Notifications';
import arrowLeft from '../../assets/arrowLeft.png';
import styles from './index.styles';

const Tab = createMaterialTopTabNavigator();

const Notifications = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View>
        <TouchableOpacity>
          <Image source={arrowLeft} style={styles.img} />
        </TouchableOpacity>
        <Text>Notifications</Text>

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
          <Tab.Screen name="All" component={AllNotifications} />
          <Tab.Screen name="Unread" component={AllNotifications} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default Notifications;
