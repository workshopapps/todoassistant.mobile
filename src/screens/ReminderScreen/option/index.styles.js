import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    alignContent: 'center',
    marginVertical: 10,
    height: 'auto',
  },
  text: {
    fontSize: 18,
    fontWeight: 'normal',
    lineHeight: 50,
    paddingHorizontal: 10,
  },
  desc: {
    fontSize: 12,
    width: '50%',
    fontWeight: 'normal',
    lineHeight: 17,
    color: '#000',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
});
