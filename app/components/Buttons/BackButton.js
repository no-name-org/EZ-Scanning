import React from 'react';

import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

export const BackButton = props => {
  const handlePress = e => {
    Actions.pop();
  }

  return (
    <Icon 
      name="arrow-back"
      type="Feather"
      color="#fff"
      onPress={ handlePress }
    />
  )
}
