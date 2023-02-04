import {TouchableHighlight, View, Text} from 'react-native';
import React from 'react';

import {Button, FAB} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {} from 'react-native-gesture-handler';

// Icons
import Empty from '../assets/svg/today-empty.svg';
import Sun from '../assets/icons/sun.svg';
import Trend from '../assets/icons/trend-up.svg';
import Setting from '../assets/icons/setting-4.svg';
import { CreateTaskModal } from '../components';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);

  const toggleModal = () => setVisible(!visible);

  return (
    <View className="flex-1 bg-[#E9F3F5]">
      <View className="px-3">
        <View className="flex-row my-2 space-x-3 max-w-screen items-center">
          <TouchableHighlight onPress={() => navigation.navigate('Drawer')}>
            <Icon name="menu" size={24} color="#292D32" />
          </TouchableHighlight>

          <CreateTaskModal isVisible={visible} onBackDropPress={
            () => setVisible(false)
          } />

          <View className="justify-between flex-row w-5/6">
            {/* <Icon name="wb-sunny" size={24} /> */}
            <View>
              <View className="flex-row items-center space-x-1">
                <Sun width={24} height={24} />
                <Text className="text-black text-[18px] font-semibold">
                  Today
                </Text>
              </View>
              <Text className="text-black text-[12px] font-light leading-[14.4px]">
                Tuesday, January 24
              </Text>
            </View>
            <View className="flex-row items-center space-x-2">
              {/* icons */}
              <View className="flex-row items-center space-x-1">
                <Trend width={24} height={24} />
                <Text className="text-primary">0/0</Text>
              </View>
              <Setting width={24} height={24} />
            </View>
          </View>
        </View>
        <Button
          className="bg-primary rounded-md text-white w-full mt-5 items-center flex-row justify-center"
          textColor="white"
          onPress={toggleModal}>
          <Icon name="plus" size={24} color="white" />
          <Text>Add a Task</Text>
        </Button>
      </View>
      <View className="items-center justify-center h-full">
        {/* Image */}
        <Empty width={154} height={154} />
        <View className="w-[251px]">
          <Text className="text-black text-[16px] leading-[21.76px] text-center font-semibold px-3 mt-5">
            What would you like to accomplish today?
          </Text>
          <Text className="text-[#707070] text-[12px] text-center">
            Every task you add now will be due today. Click + to add a task.
          </Text>
        </View>
      </View>
      <FAB
        icon="plus"
        className="absolute rounded-full items-center flex justify-center bg-primary
              shadow-md h-[50px] w-[50px] bottom-0 right-0 m-5"
        onPress={() => console.log('Pressed')}
        color="white"
      />
    </View>
  );
};

export default HomeScreen;
