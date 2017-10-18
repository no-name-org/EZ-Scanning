import React from 'react';

import { Icon } from 'react-native-elements';

export const DeleteButton = ({ color, style, size, onPress, target }) => {
  const handlePress = e => {
    onPress( target );
  }

  return (
    <Icon
      name='trashcan'
      type='octicon'
      color={ color }
      size={ size }
      style={ style }
      onPress={ handlePress }
    />
  )
}
