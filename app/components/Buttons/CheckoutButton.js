import React from 'react';

import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

export const CheckoutButton = props => {
  const handlePress = e => {
    Actions.checkout();
  }

  return (
    <Icon
      name="shopping-cart"
      type="ionicons"
      color="#fff"
      onPress={ handlePress }
    />
  )
}
