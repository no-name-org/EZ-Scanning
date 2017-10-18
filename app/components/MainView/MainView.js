import React from 'react';

import FloatingActionButton from '../FloatingActionButton';
import { View } from 'react-native'
import { styles } from './styles';

export const MainView = ({ children }) => {
  return (
    <View style={ styles.mainView }>
      { children }
      <FloatingActionButton />
    </View>
  )
}
