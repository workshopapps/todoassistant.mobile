import { StyleSheet } from 'react-native';
import { fontSizes, spacing } from '../../utils/sizes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    marginTop: spacing.lg,
    paddingHorizontal: spacing.xl,
  },
  text: {
    fontSize: fontSizes.md,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    width: '100%',
    height: 50,
  },
  buttonContainer: {
    marginBottom: spacing.xl,
    alignItems: 'center',
  },
});
