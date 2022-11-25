import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 4,
    width: 24,
    height: 24,
  },
  icon: {
    backgroundColor: colors.primary,
    width: '100%',
    height: '100%',
  },
});
