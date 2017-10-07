import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'react-native-firebase';

import FloatingActionButton from '../components/FloatingActionButton';

export default class Dashboard extends React.Component {
	render() {
		console.log(firebase.database().app.name); // '[DEFAULT]'

		return (
			<View style={{flex:1, backgroundColor: '#f3f3f3'}}>
				<FloatingActionButton />
			</View>
		);
	}
}
