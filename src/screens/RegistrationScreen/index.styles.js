// eslint-disable-next-line import/namespace
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    // alignItems: 'center',
    flex: 1,
    paddingVertical: 0,
    backgroundColor: '#F6FAFB',
  },
  flex_center: {
    alignItems: 'center',
    display: 'flex',
  },
  logo: {
    marginTop: 32,
  },
  date_picker_view: {
    width: '100%',
    paddingHorizontal: 10,
  },  
  paddingHorizontal: {
    paddingHorizontal: 10,
  },
  time_picker_text: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    paddingHorizontal: 25,
    marginBottom: 5,
  },
  title: {
    marginTop: 22,
    marginBottom: 32,
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: 'light',
  },
  button: {
    width: '100%',
  },
  datePickerStyle: {
    width: '100%',
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  input: {
    fontSize: 14,
  },
  check: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  login: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  link: {
    color: '#0000EE',
    textDecorationColor: '#0000EE',
    textDecorationStyle: 'underline',
  },
  privacy: {
    fontSize: 14,
    paddingHorizontal: 25,
  },
});
