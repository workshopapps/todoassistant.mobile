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
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <TouchableOpacity>
          <Image source={arrowLeft} style={styles.img} />
        </TouchableOpacity>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 20,
          
        }}>Notifications</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 14,
            color: '#000',
            focused: true,
            textTransform: 'capitalize',
            width: '100%'
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
    </SafeAreaView>
  );
};

export default Notifications;
