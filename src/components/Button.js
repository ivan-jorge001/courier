import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { appStyles } from '../Styles/GlobalStyles';

const styles = StyleSheet.create({
	button: {
		width: 268,
		height: 51,
		backgroundColor: '#828789',
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#828789',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: appStyles.inputTextColor,
		letterSpacing: 0,
		fontSize: appStyles.mediumFont,
		fontFamily: appStyles.fontFamily,
	},
});

export default function Button(props) {
	return (
		<TouchableOpacity
			style={styles.button}
			{...props}
		>
			<Text style={styles.text}>{props.title}</Text>
		</TouchableOpacity>
	);
}

