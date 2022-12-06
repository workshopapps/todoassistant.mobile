import { View, Text } from 'react-native'
import React from 'react'

import styles from "./index.styles"
import { MessageInput } from '../../../components'

const AllNotifications = () => {
  return (
    <View style={styles.container}>
      {/* <DayMenu day="TODAY" /> */}
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
    </View>
  )
}

export default AllNotifications