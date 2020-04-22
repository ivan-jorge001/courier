import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Tile from '../components/Tile';

const styles = StyleSheet.create({
	container: (col) => ({
		display: 'flex',
		flexDirection: col ? 'column' : 'row',
		height: '92%',
		flexWrap: 'wrap',
	}),
})

export default function Tiles(props) {

	const renderTiles = () => {
		return props.data.map((option) => {
			return (
				<Tile
					key={option.text}
					onPress={() => props.onPress(option)}
					text={option.text}
					icon={option.icon}
					{...option}
				/>
			);
		});
	}

	return (
		<View style={styles.container(props.column)}>
			{renderTiles()}
		</View>
	)
}

Tiles.propTypes = {
	column: PropTypes.bool,
	onPress: PropTypes.func,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string,
			icon: PropTypes.string,
			route: PropTypes.string,
			iconStyle: PropTypes.object,
		}),
	),
};