import React from 'react';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles, btnColors } from './styles';

function showScanner() {
	console.log('test');
}

export const FloatingActionButton = props => {
	return (
		<ActionButton buttonColor={ btnColors.main }>
			<ActionButton.Item title="Scan" buttonColor={ btnColors.main }  onPress= {showScanner }>
				<Icon name='md-camera' style={ styles.actionButtonIcon } />
			</ActionButton.Item>
		</ActionButton>
	)
}
