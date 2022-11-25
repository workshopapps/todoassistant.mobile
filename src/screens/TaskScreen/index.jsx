import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './index.styles';
import logo from '../../assets/logo.png';
import folder from '../../assets/folder.png';
import info from '../../assets/info.png';
import trash from '../../assets/trash.png';
import arrow from '../../assets/arrow.png';
import Checkbox from 'expo-checkbox';
import { Button } from '../../components/Button';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context';

const TaskScreen = () => {
  const navigation = useNavigation();

  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView>
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
      <ScrollView
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: 60,

          backgroundColor: '#f6fafb',
        }}>
        <View
          style={{
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
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>New Task</Text>
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
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 20,
              marginRight: 20,
            }}>
            Task name
          </Text>
          <View style={{ height: 8 }} />

          <TextInput
            style={{
              height: 48,
              backgroundColor: '#ffffff',
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#d9d9d9',
              paddingLeft: 20,
              paddingRight: 20,
              marginLeft: 20,
              marginRight: 20,
            }}
            placeholder=" What do you want to do?"
            color="D9D9D9"
          />
          <View style={{ height: 14 }} />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 20,
              marginRight: 20,
            }}>
            Task Description
          </Text>
          <View style={{ height: 8 }} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#ffffff',
              borderWidth: 1,
              marginLeft: 20,
              marginRight: 20,
              borderRadius: 10,
              borderColor: 'grey',
            }}>
            <TextInput
              style={{
                height: 100,
                backgroundColor: '#ffffff',

                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 10,
              }}
              placeholder=" Describe what  you want to do?"
              color="D9D9D9"
              multiline
              numberOfLines={4}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: 20,
              }}>
              <TouchableOpacity>
                <Image source={folder} style={{ marginRight: 20 }} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={trash}
                  // style={{height:12, }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ height: 14 }} />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 20,
              marginRight: 20,
            }}>
            Date
          </Text>
          <View style={{ height: 8 }} />

          <TextInput
            style={{
              height: 48,
              backgroundColor: '#ffffff',
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#d9d9d9',
              paddingLeft: 20,
              paddingRight: 20,
              marginLeft: 20,
              marginRight: 20,
            }}
            placeholder=" Select Date"
            color="D9D9D9"
            editable={false}
          />
          <View style={{ height: 14 }} />

          <View
            style={{
              backgroundColor: '#e5e5e5',
              display: 'flex',
              flexDirection: 'column',
              marginLeft: 20,
              marginRight: 20,
            }}>
            <View style={{ height: 10 }} />
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginLeft: 20,
                marginRight: 20,
              }}>
              Time
            </Text>
            <View style={{ height: 8 }} />

            <TextInput
              style={{
                height: 48,
                backgroundColor: '#ffffff',
                borderRadius: 8,
                borderWidth: 1,
                borderColor: '#d9d9d9',
                paddingLeft: 20,
                paddingRight: 20,
                marginLeft: 20,
                marginRight: 20,
              }}
              placeholder=" Select Time"
              color="D9D9D9"
              editable={false}
            />
            <View style={{ display: 'flex', flexDirection: 'row', padding: 20 }}>
              <Image style={{ height: 20, width: 20 }} source={info} />
              <Text>You will be reminded 30 minutes before time </Text>
            </View>
          </View>
          <View style={{ height: 8 }} />

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
          <View style={{ height: 30 }} />

          <Button
            onPress={() => navigation.navigate('')}
            style={{ fontSize: 14, width: '90%' }}
            title="Create Task"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskScreen;
