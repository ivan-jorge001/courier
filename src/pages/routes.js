import React from 'react';
import { Image } from 'react-native';
import { Route } from 'react-router-native';
import { createStackNavigator } from '@react-navigation/stack';
import CourierOption from './CourierOptions';
import App from './App';
import Home from './Home';
import DropOff from './DropOff';
import PickUp from './PickUp';
import Orders from './Orders';
import PassportAgency from './PassportAgency';
import Manifest from './Manifest';
import { appStyles } from '../Styles/GlobalStyles';
import logoImg from '../../public/logo.png';
import user from '../../public/user.png';
import burgermenu from '../../public/burgermenu.png';

export const SCREEN_NAME = {
	HOME: 'Home',
	APP: 'App',
};

export const PATH_NAME = {
	COURIER_OPTION: '/',
	DROP_OFF: '/dropoff',
	PICK_UP: '/pickup',
	ORDERS: '/orders',
	MANIFEST: '/manifest',
	PASSPORT_AGENCY: '/passportagency',
};

export const HomeRoutes = () => {
	return (
		<>
			<Route exact path={PATH_NAME.COURIER_OPTION} component={CourierOption} />
			<Route path={PATH_NAME.PICK_UP} component={PickUp} />
			<Route path={PATH_NAME.ORDERS} component={Orders} />
			<Route path={PATH_NAME.MANIFEST} component={Manifest} />
			<Route path={PATH_NAME.PASSPORT_AGENCY} component={PassportAgency} />
			<Route path={PATH_NAME.DROP_OFF} component={DropOff} />
		</>
	)
}

const Stack = createStackNavigator();

export const RootStack = () => (
	<Stack.Navigator initialRouteName={SCREEN_NAME.APP}>
		<Stack.Screen
			name={SCREEN_NAME.APP}
			component={App}
			options={{
      	headerShown: false,
    	}}
		/>
		<Stack.Screen
			name={SCREEN_NAME.HOME}
			component={Home}
			options={{
				gestureEnabled: false,
				headerTitle: props => <Image source={logoImg} style={{ width: 100, height: 25 }}/>,
				headerStyle: {
					backgroundColor: appStyles.headerColor,
				},
				headerRight: () => (
					<Image source={user} style={{ width: 25, height: 25, marginHorizontal: 20 }}/>
				),
				headerLeft: () => (
					<Image source={burgermenu} style={{ width: 20, height: 15, marginHorizontal: 20 }}/>
				),
			}}
		/>
	</Stack.Navigator>
);
