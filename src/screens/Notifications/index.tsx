/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllNotificationsScreen from './AllNotificationsScreen';
import UnreadNotifications from './UnreadNotifications';

const Tab = createMaterialTopTabNavigator();

const NotificationsScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <Text
        className="text-black"
        style={{fontSize: 20, fontWeight: 'bold', padding: 20}}>
        Notifications
      </Text>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 14},
          tabBarIndicatorStyle: {backgroundColor: 'blue'},
          tabBarStyle: {backgroundColor: 'black', padding: 10},
          // tabBarOptions: {showIcon: false},
        }}
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBar={({state, descriptors, navigation}) => (
          <View className="px-3">
            <View className="flex-row rounded-md bg-[#714DD91C]/10 px-2 py-4 justify-between items-center my-3">
              <View style={{flexDirection: 'row'}}>
                {state.routes.map((route, index) => {
                  const {options} = descriptors[route.key];
                  const label =
                    options.tabBarLabel !== undefined
                      ? options.tabBarLabel
                      : options.title !== undefined
                      ? options.title
                      : route.name;
                  const isFocused = state.index === index;
                  const onPress = () => {
                    const event = navigation.emit({
                      type: 'tabPress',
                      target: route.key,
                      canPreventDefault: true,
                    });
                    if (!isFocused && !event.defaultPrevented) {
                      navigation.navigate(route.name);
                    }
                  };
                  return (
                    <View key={index} style={{paddingHorizontal: 10}}>
                      <Text
                        className={`text-${isFocused ? 'black' : 'gray-700'} ${
                          isFocused
                            ? 'border-b-4 border-primary text-[12px]  leading-[30.4px] w-[67px] mx-auto ease-in-out transition'
                            : 'text-[#707070]  leading-[30.4px] text-[12px] w-[67px]'
                        }`}
                        onPress={onPress}>
                        {label}
                      </Text>
                    </View>
                  );
                })}
              </View>
              <View>
                <Text className="text-primary">Mark all as read</Text>
              </View>
            </View>
          </View>
        )}>
        <Tab.Screen name="All" component={AllNotificationsScreen} />
        <Tab.Screen name="Unread" component={UnreadNotifications} />
      </Tab.Navigator>
    </View>
  );
};

export default NotificationsScreen;
