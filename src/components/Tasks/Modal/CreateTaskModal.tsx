import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import Modal from 'react-native-modal';

type CreateTaskModalProps = {
  isVisible: boolean;
  onBackDropPress: () => void;
};

const CreateTaskModal = ({
  isVisible,
  onBackDropPress,
}: CreateTaskModalProps) => {
  return (
    <View className='flex-1 w-screen'>
      <Modal
        isVisible={isVisible}
        className="justify-end justify-items-end items-center"
        onBackdropPress={onBackDropPress}>
        <View className="bg-white items-center rounded-t-xl w-screen">
          <Text className='text-black'>I am the modal content!</Text>
        </View>
      </Modal>
    </View>
  );
};

export default CreateTaskModal;
