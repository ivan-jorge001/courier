import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { appStyles } from '../Styles/GlobalStyles';

const styles = StyleSheet.create({
	container: {
		backgroundColor: appStyles.blueHover75,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: 190,
		width: '100%',
		flex: 1,
		height: '50%',
		borderWidth: 1,
		borderColor: appStyles.inputColor
	},
	text: {
		marginTop: '20%',
		fontFamily: appStyles.fontFamily,
		fontSize: appStyles.normalFont,
		color: appStyles.labelColor,
		letterSpacing: 0,
		textAlign: 'center',
	},
	icon: {
		width: 40,
		height: 56,
	},
});

export default function Tile(props) {
	return (
		<TouchableOpacity style={styles.container} onPress={props.onPress}>
			<Image source={props.icon} style={{...styles.icon, ...props.iconStyle}}/>
			<Text style={styles.text}>{props.text}</Text>
		</TouchableOpacity>
	)
}

Tile.propTypes = {
	icon: PropTypes.string,
	text: PropTypes.string,
	iconStyle: PropTypes.object,
	onPress: PropTypes.func,
};