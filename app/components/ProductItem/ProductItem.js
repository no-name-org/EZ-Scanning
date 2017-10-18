import React from 'react';
import { View, Image, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

import { styles, buttonSize } from './styles';
import { colors } from '../../config/styles';
import { placeholder } from '../../static/images/placeholder';

import { BrandText, HeaderText, BoldHeaderText } from '../BrandText';
import { DeleteButton, FavoriteButton } from '../Buttons';

export const ProductItem = ({ id, title, price, removeItem }) => {
	return (
		<View style={ styles.container }>
			<Image
				style={ styles.image }
				source={ placeholder }
			/>
			<View style={ styles.details }>
				<View style={ styles.text }>
					<HeaderText>
            { title }
          </HeaderText>
					<BoldHeaderText>
            { `P ${price}` }
          </BoldHeaderText>
				</View>
				<View style={ styles.buttons }>
          <FavoriteButton 
            color={ colors.gray600 }
            size={ buttonSize }
            style={ styles.button } />
					<DeleteButton
            color={ colors.gray600 }
            size={ buttonSize }
            style={ styles.button }
            onPress={ removeItem } 
            target={ id }/>
				</View>
			</View>
		</View>
	)
}
