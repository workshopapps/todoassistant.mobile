/* eslint-disable prettier/prettier */
import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const LoadingIndicator: React.FC = () => {
  return (
    <View className="bg-white flex-1 justify-center items-center">
      <ActivityIndicator color="#714DD8" />
    </View>
  );
};

export default LoadingIndicator;
