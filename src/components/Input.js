import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { appStyles } from '../Styles/GlobalStyles';

const styles = StyleSheet.create({
	textfieldContainer: {
		height: 44,
		width: 335,
		backgroundColor: appStyles.inputColor,
		borderRadius: 100,
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: appStyles.inputBorderColor,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingHorizontal: 20,
	},
	textfield: {
		width: '97%',
		color: appStyles.inputTextColor,
		letterSpacing: 0,
		fontSize: appStyles.mediumFont,
		fontFamily: appStyles.fontFamily,
	},
});

export default function Input(props) {
	return (
		<View style={styles.textfieldContainer}>
			<TextInput
				style={styles.textfield}
				placeholderTextColor={appStyles.inputPlaceHolderColor}
				{...props}
			/>
		</View>
	);
}
