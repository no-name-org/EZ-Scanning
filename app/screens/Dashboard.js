import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Dashboard extends React.Component {
	render() {
		return (
			<View style={{flex:1, backgroundColor: '#f3f3f3'}}>
				<ActionButton buttonColor="#7B8D93">
					<ActionButton.Item buttonColor="#7B8D93" title="Scan">
						<Icon name='md-camera' style={styles.actionButtonIcon} />
					</ActionButton.Item>
				</ActionButton>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});