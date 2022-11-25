// eslint-disable-next-line import/namespace
import { StyleSheet } from 'react-native';

import { colors } from '../../utils/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#000',
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    marginTop: 10,
    // alignItems: "center",
  },
  flex_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    height: 24,
    width: 24,
    borderColor: '#E9F3F5',
    borderRadius: 5,
  },
  w_full: {
    width: '100%',
  },
  mr_5: {
    paddingHorizontal: 10,
  },
  flex_justify: {
    justifyContent: 'space-between',
    height: '100%',
  },
  flex_deets: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  bold_title: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 18,
  },
  task_view: {},
  text: {
    fontSize: 12,
    color: '#333333',
    opacity: 0.5,
    paddingHorizontal: 5,
  },
});
