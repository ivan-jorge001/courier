import React from 'react';
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { appStyles } from '../Styles/GlobalStyles';
import ping from '../../public/ping.png'

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		alignSelf: 'flex-start',
		marginTop: 35,
		marginBottom: 13,
	},
	placeContainer: {
		paddingHorizontal: 13,
		paddingVertical: 15,
		backgroundColor: 'white',
		fontFamily: appStyles.fontFamily,
		fontSize: appStyles.normalFont,
		color: appStyles.textColor,
		letterSpacing: 0,
		lineHeight: 18,
		borderWidth: 1,
		borderColor: 'black',
	},
	secionTitle: {
		fontFamily: appStyles.fontFamily,
		fontSize: appStyles.normalFont,
		color: appStyles.labelColor,
		letterSpacing: 0,
		marginLeft: 10,
		fontWeight: 'bold',
	},
	title: {
		fontSize: appStyles.normalFont,
		color: appStyles.textColor,
	},
	subtitle: {
		fontSize: appStyles.smallFont,
		color: appStyles.greyText,
	},
});

export default function RecentPlaces(props) {
	const renderPlace = (place) => {
		return (
			<TouchableOpacity
				key={place.text}
				onPress={() => props.onRecentPlacePress(place)}
				style={styles.placeContainer}
			>
				<Text style={styles.title}>{place.text}</Text>
				<Text style={styles.subtitle}>{place.address}</Text>
			</TouchableOpacity>
		);
	}
	const renderPlaces = () => {
		return props.places.map(renderPlace);
	}


	return (
		<View>
			<View style={styles.container}>
				<Image source={ping} style={{ height: 20, width: 15}}/>
				<Text style={styles.secionTitle}>Recent Places</Text>
			</View>
			{renderPlaces()}
		</View>
	);
}

RecentPlaces.propTypes = {
	onRecentPlacePress: PropTypes.func,
	place: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string,
		address: PropTypes.string,
	}),),
}
