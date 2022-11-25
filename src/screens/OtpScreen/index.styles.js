import { StyleSheet } from 'react-native';
import { fontSizes, spacing } from '../../utils/sizes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    marginTop: spacing.lg,
    paddingHorizontal: spacing.xxxl,
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
  borderStyleHighLighted: {
    borderColor: '#714DD9',
  },
  underlineStyleBase: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    color: 'black',
    borderColor: '#D3D0D9',
  },
  otpContainer: {
    alignItems: 'center',
  },
  otpInput: { width: '80%', height: 200 },

  underlineStyleHighLighted: {
    borderColor: '#714DD9',
  },
});
