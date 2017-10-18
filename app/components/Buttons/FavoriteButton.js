import React from 'react';

import { Icon } from 'react-native-elements';

export const FavoriteButton = ({ color, style, size }) => {
  const onPress = e => {
    console.log('Favorite button pressed!');
  }

  return (
    <Icon 
      name="star-outlined"
      type="entypo"
      color={ color }
      size={ size }
      style={ style }
      onPress={ onPress }
    />
  )
}
