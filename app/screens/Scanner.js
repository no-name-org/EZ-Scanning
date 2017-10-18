import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';

import { ToastAndroid, View, Linking, StyleSheet, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux'

import { postData } from '../lib/axios';

const onSuccess = (e) => {
  ToastAndroid.show(e.data, ToastAndroid.SHORT);

  postData('/checkout', {
    product_id: e.data,
    created_by: 'froy22',
  });
  Actions.pop();
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
