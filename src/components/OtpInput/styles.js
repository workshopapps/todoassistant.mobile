import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    borderColor: '#e5e5e5',
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    marginTop: 50,
    color: 'white',
    podition: 'absolute',
    opacity: 0,
  },
  boxContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  boxText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#e5e5e5',
  },
  boxes: {
    borderColor: '#e5e5e5',
    borderWidth: 2,
    borderRadius: 5,
    padding: 12,
    minWidth: 50,
  },
  boxFocused: {
    borderColor: '#ecdbba',
    backgroundColor: 'grey',
    // borderColor: "#e5e5e5",
    // borderWidth: 2,
    // borderRadius: 5,
    // padding: 12,
    // minWidth: 50,
  },
});
