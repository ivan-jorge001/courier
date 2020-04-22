import React from 'react'
import { View } from 'react-native';
import Tiles from '../components/Tiles';
import Header from '../components/Tiles';
import { PATH_NAME } from './routes';
import passport from '../../public/passport.png';
import arrowDown from '../../public/arrowDown.png';
import embassy from '../../public/embassy.png';

export default function DropOff(props) {
	const tilesData = [
		{
			text: 'PASSPORT AGENCY',
			icon: passport,
			route: PATH_NAME.PASSPORT_AGENCY
		},
		{
			text: 'EMBASSY OR CONSULATE',
			icon: embassy,
			route: '/'
		},
	]

	const onPress = (item) => {
		props.history.push(item.route);
	}

	return (
		<View>
			<Tiles data={tilesData} onPress={onPress} column/>
		</View>
	);
}
