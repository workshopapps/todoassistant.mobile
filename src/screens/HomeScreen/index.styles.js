// eslint-disable-next-line import/namespace
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  bg: {
    backgroundColor: '#F6FAFB',
  },
  tasks_nav: {
    flex: 4,
    paddingHorizontal: 16,
  },
  button: {
    flexDirection: 'row',
    marginHorizontal: 2,
    padding: 10,
  },
  grey: {
    color: '#333333',
    opacity: 0.5,
    textTransform: 'capitalize',
  },
  bold: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stats: {
    marginTop: 10,
    height: '100%',
  },
  card: {
    backgroundColor: '#fff',
    height: 70,
    width: '49%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  text_todo: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
  },
  cardFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fire: {
    backgroundColor: '#FDA758',
    opacity: 0.5,
    padding: 10,
    borderRadius: 70,
  },
  chart: {
    backgroundColor: '#EBECFA',
    opacity: 0.5,
    padding: 10,
    borderRadius: 70,
  },
  marginBottom: {
    marginBottom: 10,
  },
  search: {
    border: '1px solid #E5E5E5',
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
});
