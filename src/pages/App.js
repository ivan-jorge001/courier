// checks if user is authenticated, if you are it renders App
// else it renders the Authentication page

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import AuthenticationPage from './AuthenticationPage';
import { SCREEN_NAME } from './routes';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default class App extends Component {
	state = {
		loggedIn: false
	}

	setUserLoggedIn = () => {
		this.setState({ loggedIn: true });
		this.props.navigation.navigate(SCREEN_NAME.HOME);
	}

	renderAuthenticationPage() {
		return (
			<AuthenticationPage successful={this.setUserLoggedIn}/>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				{this.renderAuthenticationPage()}
			</View>
		)
	}
}
