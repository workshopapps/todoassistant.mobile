import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import moment from 'moment';
import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RadioForm from 'react-native-simple-radio-button';

import arrowLeft from '../../assets/arrowLeft.png';
import thumbs from '../../assets/thumbs.png';
import { Button } from '../../components/Button';
import { AuthContext } from '../../context/userContext';
import styles from './index.styles';

const TaskScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const { newTask } = useContext(AuthContext);

  // const [isPickerShow, setIsPickerShow] = useState(false);
  // const [starttime, setStartTime] = useState(new Date(Date.now()));
  // const [endtime, setEndTime] = useState(new Date(Date.now()));

  // const options = { hour: '2-digit', minute: '2-digit' };

  // const showPicker = () => {
  //   setIsPickerShow(true);
  // };

  // const hidePicker = () => {
  //   setIsPickerShow(false);
  // };

  // const onChangeStartTime = (event, value) => {
  //   setStartTime(value);
  //   if (Platform.OS === 'android') {
  //     setIsPickerShow(false);
  //   }
  //   hidePicker();
  // };

  // const onChangeEndTime = (event, value) => {
  //   setStartTime(value);
  //   if (Platform.OS === 'android') {
  //     setIsPickerShow(false);
  //   }
  //   hidePicker();
  // };
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

  const [chosenOption, setChosenOption] = useState(''); // will store our current user options
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
    { label: 'None', value: 'none' },
  ];

  const createTaskHandler = () => {
    newTask(title, description, date, chosenOption)
      .then((e) => {
        if (e !== undefined) setModalVisible(e);
        console.log('====================================');
        console.log(e);
        console.log('====================================');
      })
      .catch((_) => {});
  };

  return (
    <SafeAreaView>
      <View style={styles.viewOne}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={arrowLeft} style={styles.img} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.viewThree}>
        <Modal
          animationType="slide"
          transparent
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
            <Text style={styles.viewingTwo}>New task</Text>
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
          <Text style={styles.describer}> End Date</Text>
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
                is24Hour
                onChange={onChangeDate}
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
              selectedButtonColor="#714dd9"
              borderWidth={1}
              buttonColor="#ededed"
              activeColor="#714dd9" //initial value of this group
              onPress={(value) => {
                setChosenOption(value);
              }} //if the user changes options, set the new value
            />
          </View>
          <View style={{ height: 30 }} />
          <Button
            onPress={() => createTaskHandler()}
            style={{ fontSize: 14 }}
            title="Create Task"
          />
          <View style={{ height: 200 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskScreen;
