import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 14,
    paddingVertical: 16,
    // backgroundColor: "#FFFFFF",
    borderRadius: 5,
    marginBottom: 12,
  },
  imageContainer: {
    backgroundColor: '#1890FF',
    width: 60,
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  text1: { color: 'white', fontSize: 25 },
  text2: { marginLeft: 8, padding: 5 },
  titleContainer: { flex: 1 },
  titleHead: { fontWeight: '500', paddingVertical: 8 },
  titleText: { paddingBotom: 8 },
});
