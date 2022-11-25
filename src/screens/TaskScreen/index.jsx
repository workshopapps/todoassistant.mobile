import { View, Text, Image, TextInput, TouchableOpacity,Platform, ScrollView, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './index.styles';
import arrowLeft from '../../assets/arrowLeft.png';
import folder from '../../assets/folder.png';
import info from '../../assets/info.png';
import thumbs from '../../assets/thumbs.png';
import Checkbox from 'expo-checkbox';
import { Button } from '../../components/Button';
import axios from 'axios';
import RadioForm from 'react-native-simple-radio-button';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment';

const TaskScreen = () => {
  const navigation = useNavigation();
  const baseURL = 'http://api.ticked.hng.tech:2022/task';
  const [modalVisible, setModalVisible] = useState(false);

  const [isPickerShow, setIsPickerShow] = useState(false);
  const [time, setTime] = useState(new Date(Date.now()));

  const options = { hour: '2-digit', minute: '2-digit' };

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const hidePicker = () => {
    setIsPickerShow(false);
  };

  const onChange = (event, value) => {
    setTime(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
    hidePicker();
  };

  //Date Picker
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    setShow(!show);
  };

  const [chosenOption, setChosenOption] = useState(''); //will store our current user options
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const optionbutton = [
    {
      label: 'Assign the task to an assistant',
      value: 'Assign the task to an assistant',
    },
    {
      label: 'Get a call from an assistant to remind you',
      value: 'Get a call from an assistant to remind you',
    },
    { label: 'None', value: 'None' },
  ];

  const createTaskHandler = async () => {
    try {
      await axios.post(baseURL, {
        user_id: '455',
        title: title,
        description: description,
        start_time: time,
        end_time: time,
      });
      setModalVisible(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.viewOne}>
        <Image source={arrowLeft} style={styles.img} />
        <TouchableOpacity onPress={() => createTaskHandler()}>
          <View style={styles.viewTwo}>
            <Text style={styles.textOne}>Create Task</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.viewThree}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.viewFour}>
            <View style={styles.views}>
              <Image source={thumbs} style={styles.imgTwo} />
              <View style={{ height: 14 }} />
              <Text style={styles.cards}>Great!</Text>
              <View style={{ height: 14 }} />
              <Text style={styles.cards1}>Your task has been assigned to a VA</Text>
              <View style={{ height: 28 }} />

              <View style={styles.card2}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    navigation.navigate('Home');
                  }}>
                  <Text style={styles.viewDen}>Go Back Home</Text>
                </TouchableOpacity>
                <View style={styles.viewee} />
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.viewingOne}>
          <View style={styles.textSeven}>
            <Text style={styles.viewingTwo}>Create To Do</Text>
          </View>
          <View style={styles.viewee} />
          <Text style={styles.textTen}>Title</Text>
          <View style={styles.viewing} />

          <TextInput
            value={title}
            onChangeText={(value) => setTitle(value)}
            style={styles.textFive}
            placeholder="Task title"
            color="D9D9D9"
          />
          <View style={{ height: 14 }} />
          <Text style={styles.textSix}>Description</Text>
          <View style={styles.viewing} />
          <View style={styles.textEight}>
            <TextInput
              value={description}
              onChangeText={(value) => setDescription(value)}
              style={styles.describe}
              placeholder=" Type a text"
              color="D9D9D9"
              multiline
              numberOfLines={4}
            />
          </View>
          <View style={{ height: 14 }} />
          <Text style={styles.describer}>Date</Text>
          <View style={styles.viewHere}>
            <TouchableOpacity onPress={showDatepicker} title="Show date picker!">
              <Text>{moment(date).format('DD MMMM, YYYY')}</Text>
            </TouchableOpacity>

            {/* The date picker */}
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChangeDate}
              />
            )}
          </View>

          <View style={{ height: 20 }} />
          <Text style={styles.texter}>Reminder Time</Text>
          <View style={styles.viewing} />
          <View style={styles.viewer}>
            <TouchableOpacity
              onPress={!isPickerShow ? showPicker : hidePicker}
              style={styles.pickedDateContainer}>
              <Text style={{ backgroundColor: 'white' }}>
                {time.toLocaleTimeString([], options)}
              </Text>
            </TouchableOpacity>
            {/* The date picker */}
            {isPickerShow && (
              <DateTimePicker
                value={time}
                mode={'time'}
                display={'spinner'}
                onChange={onChange}
                textColor="#030303"
                style={{
                  backgroundColor: '#ffffff',
                  width: 200,
                  height: 200,
                  borderRadius: 10,
                  alignItems: 'center',
                }}
              />
            )}
          </View>

          <View style={styles.viewing} />

          <View style={styles.texter1}>
            <Text> Virtual Assistant</Text>
            <View style={{ height: 15 }} />

            <RadioForm
              radio_props={optionbutton}
              initial={1}
              selectedButtonColor={'#714dd9'}
              borderWidth={1}
              buttonColor={'#ededed'}
              activeColor="#714dd9" //initial value of this group
              onPress={(value) => {
                setChosenOption(value);
              }} //if the user changes options, set the new value
            />
          </View>
          <View style={{ height: 30 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskScreen;
