import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  marginBottom: {
    marginBottom: 50,
  },
  title: {
    fontWeight: 'bold',
  },
});
