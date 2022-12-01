import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 0,
    marginBottom: 30,
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 50,
  },
  icon: {
    borderRadius: 40,
    backgroundColor: "linear-gradient(0deg, rgba(113, 77, 217, 0.11), rgba(113, 77, 217, 0.11)), #FFFFFF;",
    padding: 8
  },
  flexrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexrow1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    // justifyContent: 'space-between',
    // width: '33%'
  },
  m_4: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    color: '#333333',
    opacity: 0.5,
  },
});
