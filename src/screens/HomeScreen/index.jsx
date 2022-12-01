import { View, Text } from 'react-native'
import React from 'react'
import { MainLayout } from '../../layouts'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <MainLayout>
      <Text>HomeScreen</Text>
    </MainLayout>
  )
}

export default HomeScreen