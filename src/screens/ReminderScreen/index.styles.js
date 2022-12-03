import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 50,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#F9F7FF',
    paddingHorizontal: 10,
  },
  pad_hor: {
    paddingVertical: 10,
  },
  screen_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: 'flex',
    alignItems: 'center',
  },
});
