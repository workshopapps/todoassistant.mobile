/* eslint-disable import/namespace */
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const slides = [
  {
    id: 1,
    title: 'Onboarding',
    subtitle: 'first slide',
  },
  {
    id: 2,
    title: 'Onboarding',
    subtitle: 'this os the second slide',
  },
];

const OnboardingScreen = () => {
  return (
    <SafeAreaView>
      <Text>OnboardingScreen</Text>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
