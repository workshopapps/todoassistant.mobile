import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Header, MessageInput } from '../../components';

const DayMenu = ({ day }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
      }}>
      <Text>{day}</Text>
      <TouchableOpacity>
        <Text style={{ color: 'red' }}>clear all</Text>
      </TouchableOpacity>
    </View>
  );
};

const Notification = () => {
  return (
    <ScrollView>
      <Header title="Notifications" iconName="keyboard-backspace" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginVertical: 20,
          padding: 10,
        }}>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              textDecorationColor: '#714DD9',
              textDecorationLine: 'underline',
            }}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 25 }}>
          <Text style={{ fontSize: 16 }}>Unread</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: '45%' }}>
          <Text style={{ fontSize: 16 }}>Mark all as read</Text>
        </TouchableOpacity>
      </View>
      <DayMenu day="TODAY" />
      <MessageInput
        image="R"
        style={{ backgroundColor: '#E9F3F5' }}
        messageTitle="Review Pending Task"
        message="Meditate for 20 mins every weekday at 9am"
        time="4 mins ago"
      />
      <MessageInput
        imageColor={{ backgroundColor: '#707070' }}
        image="T"
        style={{ backgroundColor: '#E9F3F5' }}
        messageTitle="Task Completed"
        message="HNG Task completed."
        time="1 hr ago"
      />
      <DayMenu day="YESTERDAY" />
      <MessageInput
        imageColor={{ backgroundColor: '#714DD9' }}
        image="O"
        messageTitle="Overdue Task"
        message="Design system submission for 11am due would you like to.."
        time="8:30 PM"
      />
      <MessageInput
        imageColor={{ backgroundColor: '#707070' }}
        image="T"
        messageTitle="Task Completed"
        message="HNG Task completed."
        time="12:00 PM"
      />
      <MessageInput
        image="R"
        messageTitle="Review Pending Task"
        message="Meditate for 20 mins every week day at 9am"
        time="10:00 AM"
      />
      <MessageInput
        imageColor={{ backgroundColor: '#714DD9' }}
        image="O"
        messageTitle="Overdue Task"
        message="Design system submission for 11am due would you like to.."
        time="8:00 AM"
      />
    </ScrollView>
  );
};

export default Notification;
