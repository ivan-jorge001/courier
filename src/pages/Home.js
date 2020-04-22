// Home is the wrapper for the react router
import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { NativeRouter } from "react-router-native";
import { HomeRoutes } from './routes';
import backgroundImg from '../../public/background.png';
import { appStyles } from '../Styles/GlobalStyles';
import arrowDown from '../../public/arrowDown.png';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: appStyles.backgroundColor,
	},
	backgroundImage: {
		flex: 1,
    resizeMode: "cover",
		justifyContent: "center",
	},
})

export default class Home extends Component {

	render() {
		return (
			<NativeRouter>
				<View style={styles.container}>
					<ImageBackground style={styles.backgroundImage} source={backgroundImg}>
						<HomeRoutes />
					</ImageBackground>
				</View>
			</NativeRouter>
		)
	}
}
