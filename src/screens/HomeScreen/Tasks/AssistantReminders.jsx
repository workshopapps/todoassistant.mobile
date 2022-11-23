import React from 'react'
import { View } from 'react-native'

import { Tasks } from '../../../components'
import styles from './index.styles'

const AssistantReminders = () => {
  return (
    <View style={styles.container}>
      <Tasks />
    </View>
  )
}

export default AssistantReminders