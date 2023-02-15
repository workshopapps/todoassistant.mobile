import {View} from 'react-native';
import React from 'react';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({children}: MainLayoutProps) => {
  return <View className="flex-1 bg-white">{children}</View>;
};

export default MainLayout;
