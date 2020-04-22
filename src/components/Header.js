import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import backArrow from '../../public/back.png'
import { appStyles } from '../Styles/GlobalStyles'

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#3276F6',
		width: '100%',
		height: '10%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontFamily: appStyles.fontFamily,
		fontSize: appStyles.normalFont,
		color: appStyles.labelColor,
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
})

const Header = (props) => {

	return (
		<View style={styles.header}>
			<View style={styles.container}>
				<Text style={styles.text}>
					{props.title}
				</Text>
				{props.icon ?
					<Image source={props.icon} style={{ resizeMode: 'contain', width: 20, header: 20 }}/>
					: <View/>
				}
			</View>
			<TouchableOpacity onPress={props.goBack}>
			{ props.backIcon
				? <Image source={backArrow} style={{ resizeMode: 'contain', width: 20, header: 20 }}/>
				: <View/>
			}
			</TouchableOpacity>
		</View>
	);
}

export default Header
