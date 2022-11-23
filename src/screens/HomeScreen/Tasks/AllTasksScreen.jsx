import React from 'react';
// eslint-disable-next-line import/namespace
import { View, Text } from 'react-native';
import { Tasks } from '../../../components';

import styles from './index.styles';

const AllTasksScreen = () => {
  return (
    <View style={styles.container}>
      <Tasks />
    </View>
  );
};

export default AllTasksScreen;
