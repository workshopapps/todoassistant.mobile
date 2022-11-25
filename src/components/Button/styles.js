import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    borderRadius: 8,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontWeight: 'normal',
    fontSize: 20,
    color: colors.white,
  },
});
