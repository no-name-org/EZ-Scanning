import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import FloatingActionButton from '../components/FloatingActionButton';

export default class Dashboard extends React.Component {
	render() {
		return (
			<View style={{flex:1, backgroundColor: '#f3f3f3'}}>
				<FloatingActionButton />
			</View>
		);
	}
}
