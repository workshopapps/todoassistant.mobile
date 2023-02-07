import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import {Button, TextInput} from 'react-native-paper';

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
        <View className="bg-white p-5 items-center space-y-0 rounded-t-xl w-screen">
          <View className="">
            <TextInput
              mode="outlined"
              placeholder="Add a task"
              className="w-full border-[#E9F3F5] outline-none bg-white"
              left={<TextInput.Icon icon="ellipse-outline" color="#714DD9" />}
              keyboardType="email-address"
            />
            <TextInput
              mode="outlined"
              placeholder="Description"
              className="w-full border-[#E9F3F5] outline-none bg-white"
              left={<TextInput.Icon icon="plus" color="#714DD9" />}
              keyboardType="email-address"
            />
          </View>
          <View className="justify-between flex mt-5 flex-row">
            <View>
              <Text className="black">Left</Text>
            </View>
            <Button textColor="white" buttonColor="#714DD9">
              Assign Task
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CreateTaskModal;
