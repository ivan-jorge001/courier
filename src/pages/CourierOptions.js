/**
 * this is the option with the headers screen 01
 */
import React from 'react';
import { View } from 'react-native'
import Tiles from '../components/Tiles';
import { PATH_NAME } from './routes';
import Header from '../components/Header';
import arrowDown from '../../public/arrowDown.png';
import upArrow from '../../public/uparrow.png';
import orders from '../../public/orders.png';
import manifest from '../../public/manifest.png';

export default function CourierOptions(props) {
	const tilesData = [
		{
			text: 'DROP OFF',
			icon: arrowDown,
			route: PATH_NAME.DROP_OFF
		},
		{
			text: 'PICK UP',
			icon: upArrow,
			route: PATH_NAME.PICK_UP
		},
		{
			text: 'ORDERS',
			icon: orders,
			route: PATH_NAME.ORDERS,
			iconStyle: { height: 60, width: 76 }
		},
		{
			text: 'MANIFEST',
			icon: manifest,
			route: PATH_NAME.MANIFEST,
			iconStyle: { height: 60, width: 76 }
		},
	]

	const onPress = (item) => {
		props.history.push(item.route);
	}

	return (
		<View>
			<Header title="What would you like to do today"/>
			<Tiles data={tilesData} onPress={onPress}/>
		</View>
	);
}
