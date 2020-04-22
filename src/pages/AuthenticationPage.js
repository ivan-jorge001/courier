import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Image,
	ImageBackground,
	StyleSheet,
	KeyboardAvoidingView
} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { appStyles } from '../Styles/GlobalStyles';
import backgroundImg from '../../public/background.png'
import logoImg from '../../public/logo.png'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: appStyles.backgroundColor,
	},
	backgroundImage: {
    flex: 1,
    resizeMode: "cover",
		justifyContent: "center",
		backgroundColor: appStyles.blueHover75,
	},
	logoImage: {
		width: 200,
		height: 52,
		marginBottom: '10%',
	},
	formContainer: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputsContainers: {
		height: '25%',
		display: 'flex',
		justifyContent: 'space-evenly',
	},
	button: {
		marginTop: '5%',
	}
})

export default class AuthenticationPage extends Component {
	renderForm() {
		return (
			<KeyboardAvoidingView behavior="padding">
				<View style={styles.formContainer}>
					<Image style={styles.logoImage} source={logoImg}/>
					<View style={styles.inputsContainers}>
						{/*  Normally I would put this in en.js for translation purposes*/}
						<Input placeholder="Username"/>
						<Input placeholder="Password" secureTextEntry/>
					</View>
					<View style={{display: 'flex', jusalignItems: 'space-between'}}>
						<View style={styles.button}>
							<Button title="Login" onPress={this.props.successful}/>
						</View>
					</View>
				</View>
			</KeyboardAvoidingView>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<ImageBackground style={styles.backgroundImage} source={backgroundImg}>
					{this.renderForm()}
				</ImageBackground>
			</View>
		)
	}
}

AuthenticationPage.propTypes = {
	successful: PropTypes.func,
};
