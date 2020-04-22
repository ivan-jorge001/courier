import { StyleSheet } from 'react-native';
import backgroundImg from '../../public/background.png'

export default StyleSheet.create({
});

const colors = {
	darkGreen: '#243C46',
	darkBlueTrans75: 'rgba(17,34,53,0.75)',
	darkBlueTrans20: 'rgba(17,34,53,0.2)',
	white: '#fff',
	white42: 'rgba(255,255,255,0.42)',
	white50: 'rgba(255,255,255,0.50)',
	black: '#000000',
	darkBlue: '#112235',
	darkPurple: '#112235',
	grey: '#C8C7CC',
};

const fonts = {
	helvetica: 'Helvetica'
}

const fontSize = {
	medium: 22,
	normal: 16,
	small: 13,
}

export const appStyles = {
	backgroundColor: colors.darkGreen,
	blueHover75: colors.darkBlueTrans75,
	blueHover20: colors.darkBlueTrans20,
	fontFamily: fonts.helvetica,
	inputBorderColor: colors.white,
	inputColor: colors.white42,
	inputTextColor: colors.white,
	inputPlaceHolderColor: colors.white50,
	mediumFont: fontSize.medium,
	normalFont: fontSize.normal,
	smallFont: fontSize.small,
	headerColor: colors.darkBlue,
	labelColor: colors.white,
	textColor: colors.darkPurple,
	greyText: colors.grey,
}