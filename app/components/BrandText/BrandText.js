import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

export const BrandText = ({ children }) => {
  return (
    <Text style={ styles.BrandText }>
      { children }
    </Text>
  )
}

export const HeaderText = ({ children }) => {
  return (
    <BrandText>
      <Text style={[ styles.HeaderText ]}>
        { children }
      </Text>
    </BrandText>
  )
}

export const BoldHeaderText = ({ children }) => {
  return (
    <HeaderText>
      <Text style={ styles.BoldHeaderText }>
        { children }
      </Text>
    </HeaderText>
  )
}
