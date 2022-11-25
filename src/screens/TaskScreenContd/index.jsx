import { View, Text, Image, TextInput, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './index.styles';
import logo from '../../assets/logo.png';
import info from '../../assets/info.png';
import calling from '../../assets/calling.png';
import folder from '../../assets/folder.png';
import arrow from '../../assets/arrow.png';
import Checkbox from 'expo-checkbox';
import { Button } from '../../components/Button';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';

import { MyModal } from './';

const TaskScreenContd = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 60,

        backgroundColor: '#f6fafb',
      }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22,
          }}>
          <View
            style={{
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 8,
              padding: 20,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 2,
            }}>
            <Image
              source={calling}
              style={{
                width: 250,
                height: 300,
              }}
            />
            <View style={{ height: 14 }} />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
              }}>
              Hello, my name is Michael and I am your virtual assistant.
            </Text>
            <View style={{ height: 14 }} />
            <Text
              style={{
                fontSize: 13,
                textAlign: 'center',
              }}>
              I would make sure you do not forget your tasks by giving you a call.
            </Text>
            <View style={{ height: 28 }} />

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Button
                onPress={() => setModalVisible(!modalVisible)}
                style={{ fontSize: 18, width: '40%' }}
                title="Remind me"
              />
              <View style={{ height: 20 }} />
              <TouchableOpacity
                style={{
                  width: '50%',
                }}
                onPress={() => setModalVisible(!modalVisible)}>
                <View
                  style={{
                    backgroundColor: '#ffffff',
                    borderWidth: 1,
                    borderColor: '#714dd9',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 20,
                    marginRight: 20,
                    paddingVertical: 12,
                    borderRadius: 8,
                  }}>
                  <Text style={{ color: '#714dd9', fontSize: 18 }}>No Thanks</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: 60,
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: 40,
            height: 40,
          }}
        />
        <Image
          source={logo}
          style={{
            width: 100,
            height: 32,
          }}
        />
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 30,
            }}>
            <Image
              style={{ height: 40, width: 40 }}
              source={{
                uri: 'https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg',
              }}
            />
          </View>
          <Image
            source={arrow}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          // backgroundColor: "red",
          flex: 1,
        }}>
        <View
          style={{
            display: 'flex',
            height: 44,
            width: '100%',
            backgroundColor: '#ffffff',
            paddingHorizontal: 20,
            paddingVertical: 5,
            flexDirection: 'column',
          }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Task</Text>
          <View
            style={{
              height: 4,
              width: 60,
              borderRadius: 2,
              backgroundColor: '#714DD9',
            }}
          />
        </View>
        <View style={{ height: 14 }} />

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: 20,
            paddingRight: 20,
            justifyContent: 'space-between',
          }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Go to the bank</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FDA758' }}>Pending</Text>
        </View>
        <View style={{ height: 20 }} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: 20,
            paddingRight: 20,
            justifyContent: 'space-between',
          }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#707070' }}>Start time</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#707070' }}>End time</Text>
        </View>
        <View style={{ height: 14 }} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: 20,
            paddingRight: 20,
            justifyContent: 'space-between',
          }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000' }}>11:00am</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000' }}>02:00pm</Text>
        </View>
        <View style={{ height: 14 }} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingRight: 20,
          }}>
          <Text style={{ fontSize: 16, color: '#ff4d4f' }}>Due in 3{'\n'}hours</Text>
        </View>
        <View style={{ height: 30 }} />
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 5,
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          Task Description
        </Text>
        <View style={{ height: 12 }} />

        <Text
          style={{
            fontSize: 16,

            paddingLeft: 20,
            paddingRight: 20,
          }}>
          I need to upgrade my account and request for a new token.{' '}
        </Text>
        <View style={{ height: 30 }} />
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 5,
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          Attachment
        </Text>
        <View style={{ height: 14 }} />
        <View
          style={{
            display: 'flex',
            height: 80,
            flexDirection: 'row',
          }}>
          <TouchableOpacity>
            <View
              style={{
                height: 70,
                width: 70,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10,
                borderRadius: 8,
              }}>
              <Image
                source={folder}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ height: 14 }} />

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 30,
          }}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          />
          <Text style={{ paddingLeft: 5, fontSize: 14 }}>
            Get a call from an assistant to remind you
          </Text>
        </View>
        <View style={{ height: 20 }} />

        <Button
          onPress={() => setModalVisible(true)}
          style={{ fontSize: 18, width: '90%' }}
          title="Done"
        />
        <View style={{ height: 20 }} />
        <TouchableOpacity onPress={() => navigation.navigate('TaskScreen')}>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderWidth: 1,
              borderColor: '#714dd9',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 20,
              marginRight: 20,
              paddingVertical: 15,
              borderRadius: 8,
            }}>
            <Text style={{ color: '#714dd9', fontSize: 18 }}>Edit Task</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskScreenContd;
