import React from 'react';
import {TouchableHighlight} from 'react-native';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import {Button, TextInput} from 'react-native-paper';
import BellIcon from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RepeatIcon from 'react-native-vector-icons/Ionicons';
import CalendarIcon from 'react-native-vector-icons/Feather';

type CreateTaskModalProps = {
  isVisible: boolean;
  onBackDropPress: () => void;
};

const CreateTaskModal = ({
  isVisible,
  onBackDropPress,
}: CreateTaskModalProps) => {
  return (
    <View className="flex-1 w-screen">
      <Modal
        isVisible={isVisible}
        className="justify-end justify-items-end items-center"
        onBackdropPress={onBackDropPress}>
        <View className="bg-white p-5 space-y-0 rounded-t-xl w-screen">
          <View className="">
            <TextInput
              mode="outlined"
              placeholder="Add a task"
              className="border-[#E9F3F5] outline-none bg-white "
              left={
                <TextInput.Icon
                  icon="ellipse-outline"
                  iconColor="#714DD9"
                  size={24}
                />
              }
              keyboardType="email-address"
            />
            <TextInput
              mode="outlined"
              placeholder="Description"
              className="w-full border-[#E9F3F5] outline-none bg-white mb-4"
              left={<TextInput.Icon icon="plus" iconColor="#714DD9" />}
              keyboardType="email-address"
            />
          </View>
          <View className="justify-between items-center p-5 rounded-md bg-[#E9F3F5] flex my-5 flex-row">
            <View className="flex-row ">
              <TouchableHighlight className="p-2">
                <CalendarIcon name="calendar" size={20} color="#707070" />
              </TouchableHighlight>
              <TouchableHighlight className="p-2">
                <BellIcon name="bell" size={20} color="#707070" />
              </TouchableHighlight>
              <TouchableHighlight className="p-2">
                <RepeatIcon name="repeat" size={20} color="#707070" />
              </TouchableHighlight>
              <TouchableHighlight className="p-2">
                <Icon name="tag-outline" size={20} color="#707070" />
              </TouchableHighlight>
            </View>
            <View>
              <Button
                textColor="white"
                className="rounded-lg"
                buttonColor="#714DD9">
                Assign Task
              </Button>
            </View>
          </View>
          <Button
            buttonColor="#714DD9"
            textColor="white"
            className="rounded-md w-full">
            Create Task
          </Button>
        </View>
      </Modal>
    </View>
  );
};

export default CreateTaskModal;
