import { StyleSheet } from 'react-native';
import { fontSizes, spacing } from '../../utils/sizes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    marginTop: spacing.md,
    paddingHorizontal: spacing.md,
  },
  text: {
    fontSize: fontSizes.lg,
    fontWeight: '600',
  },
});
