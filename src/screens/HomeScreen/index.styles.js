import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    marginHorizontal: 2,
    padding: 10,
  },

  bold: {
    fontSize: 18,
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
    width: 160,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
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
  },
  fire: {
    backgroundColor: '#FDA758',
    backgroundOpacity: 0.2,
    padding: 5,
    borderRadius: 70,
  },
  chart: {
    backgroundColor: '#29319F',
    opacity: 0.2,
    padding: 5,
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
