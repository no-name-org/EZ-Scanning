import { StyleSheet } from 'react-native';

import { colors } from '../../config/styles';

const sizes = {
  medium: 15,
}

export const styles = StyleSheet.create({
  BrandText: {
    fontFamily: 'Open Sans',
    color: colors.positive,
  },
  HeaderText: {
    fontSize: sizes.medium,
  },
  BoldHeaderText: {
    fontSize: sizes.medium,
    fontWeight: 'bold',
  },
})
