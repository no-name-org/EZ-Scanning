import { StyleSheet } from 'react-native';

import { colors } from '../../config/styles';

export const buttonSize = 22;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 2,
    backgroundColor: colors.negative,
  },
  image: {
    width: 75,
    height: 75,
  },
  details: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 20,
  },
  text: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    marginHorizontal: -10,
  },
  button: {
    marginHorizontal: 10,
  }
})
