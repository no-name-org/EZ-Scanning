import React from 'react';
import { View, Linking, StyleSheet, Dimensions } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

function onSuccess(e) {
  console.log(e);
  Linking
    .openURL(e.data)
    .catch(err => console.error('An error occured', err));
}

export const Scanner = props => {
  return (
    <QRCodeScanner
      onRead = { onSuccess }
      cameraStyle= { styles.cameraContainer }
      topViewStyle= { styles.zeroContainer }
      bottomViewStyle= { styles.zeroContainer } />
  );
}

const styles = StyleSheet.create({
  zeroContainer: {
    height: 0,
    flex: 0,
  },
  cameraContainer: {
    height: Dimensions.get('window').height,
  },
});
