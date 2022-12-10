import { View, Text } from 'react-native';
import React, { useState } from 'react';
import styles from './index.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import formatAMPM from '../../utils/formatTime';
import Checkbox from 'expo-checkbox';
import { colors } from '../../utils/colors';
import Timer from '../../assets/svg/timer-start.svg';
import Message from '../../assets/svg/message-2.svg';
import VA from '../../assets/svg/va.svg';

import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';

const Tasks = ({ task, time }) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <Collapse style={styles.task_view}>
      <CollapseHeader style={styles.accordion_header}>
        <View>
          <Text>DONE</Text>
        </View>
      </CollapseHeader>
      <CollapseBody>
        <View>
          <View style={styles.container}>
            <View style={styles.w_full}>
              <View style={styles.flex_row}>
                <View>
                  {/* checkbox */}
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    color={isChecked ? '#4630EB' : '#F6FAFB'}
                    onValueChange={setChecked}
                  />
                </View>
                <View style={styles.mr_5}>
                  <View style={styles.flex_justify}>
                    <Text style={styles.bold_title}>{task}</Text>
                    <View style={styles.flex_row}>
                      <View style={styles.flex_deets}>
                        <Timer height={20} width={20} />
                        <Text style={styles.text}>{formatAMPM(time)}</Text>
                      </View>
                      <View style={styles.flex_deets}>
                        <Message height={20} width={20} />
                        <Text style={styles.text}>0</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </CollapseBody>
    </Collapse>
  );
};

export default Tasks;
