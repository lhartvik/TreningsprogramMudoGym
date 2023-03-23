import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'black',
    margin: 3,
  },
  buttontext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  bigtext: {
    fontSize: 32,
  },
  mediumtext: {
    alignSelf: 'center',
    fontSize: 24,
  },
  smalltext: {
    alignSelf: 'center',
    fontSize: 16,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#322222',
  },
});
