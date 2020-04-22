import React, { Component } from 'react'
import Modal from 'react-native-modal';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	ImageBackground,
	TextInput,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { appStyles } from '../Styles/GlobalStyles';
import RecentPlaces from '../components/RecentPlaces';
import Input from '../components/Input';
import Button from '../components/Button';
import cross from '../../public/cross.png';
import square from '../../public/square.png';
import backgroundImg from '../../public/background.png';


const styles = StyleSheet.create({
	container: {
		height: '92%',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	text: {
		fontFamily: appStyles.fontFamily,
		fontSize: appStyles.normalFont,
		color: appStyles.labelColor,
		letterSpacing: 0,
		textAlign: 'center',
		marginBottom: '8%',
	},
	title: {
		fontFamily: appStyles.fontFamily,
		fontSize: appStyles.mediumFont,
		color: appStyles.labelColor,
		letterSpacing: 0,
	},
	close: {
		width: 20,
		height: 20,
	},
	cross: {
		display: 'flex',
		position: 'absolute',
		left: 5,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	modalHeader: {
		backgroundColor: appStyles.blueHover20,
		position: 'absolute',
		flex: 1,
		top: 0,
		width: '100%',
		height: '10%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	preview: {
    flex: 1,
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	enterCodeButton: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: 0,
		marginBottom: 40,
	},
	modalBackgroundImage: {
		height: '100%',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flex: 1,
    resizeMode: "cover",
		justifyContent: "center",
	},
	manualEntryModal: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'flex-start',
		backgroundColor: appStyles.backgroundColor
	},
	input: {
		fontSize: appStyles.mediumFont,
		color: appStyles.inputTextColor,
		fontFamily: appStyles.fontFamily,
		width: '40%',
		marginBottom: 18,
	},
	inputWrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		borderBottomColor: appStyles.inputBorderColor,
		borderBottomWidth: 1,
		marginBottom: 30,
	}
});

export default class PassportAgency extends Component {

	state = {
		showCamera: false,
		manualCodeModal: false,
		selectedPlace: 'Washington Passport Agency',
		qrcode: ''
	}

	toogleCameraModal = () => {
		this.setState({ showCamera: !this.state.showCamera })
	}

	toogleManuelEntryModal = () => {
		this.setState({ manualCodeModal: !this.state.manualCodeModal })
	}

	turnCameraOffandEnableManuel = () => {
		this.setState({ showCamera: false, manualCodeModal: true });
	}

	onRecentPlacePress = (place) => {
		this.setState({ selectedPlace: place.text, showCamera: true });
	}

	modalHeader(closeModal) {
		return (
			<View style={styles.modalHeader}>
				<TouchableOpacity style={styles.cross} onPress={closeModal}>
					<Image source={cross} style={styles.close}/>
				</TouchableOpacity>
				<Text style={styles.title}> {this.state.selectedPlace} </Text>
			</View>
		);
	}

	cameraModal = () => (
		<Modal isVisible={this.state.showCamera}>
			<View style={{ flex: 1 }}>
				<RNCamera
					ref={ref => {
						this.camera = ref;
					}}
					style={styles.preview}
					captureAudio={false}
					type={RNCamera.Constants.Type.back}
					flashMode={RNCamera.Constants.FlashMode.on}
					androidCameraPermissionOptions={{
						title: 'Permission to use camera',
						message: 'We need your permission to use your camera',
						buttonPositive: 'Ok',
						buttonNegative: 'Cancel',
					}}
					androidRecordAudioPermissionOptions={{
						title: 'Permission to use audio recording',
						message: 'We need your permission to use your audio',
						buttonPositive: 'Ok',
						buttonNegative: 'Cancel',
					}}
					onBarCodeRead={this.saveBarcodeFromCamera}
				>
					{this.modalHeader(this.toogleCameraModal)}
					<Image source={square} style={{ resizeMode: 'contain', width: '80%'}}/>
					<View style={styles.enterCodeButton}>
						<Button title="Enter Code" onPress={this.turnCameraOffandEnableManuel}/>
					</View>
				</RNCamera>
			</View>
		</Modal>
	)

	saveBarcode = (e) => {
		this.setState({ qrcode: e.nativeEvent.text });
	}

	saveBarcodeFromCamera = (qrcode) => {
		this.setState({ qrcode: qrcode.data, showCamera: false });
	}

	manualEntryModal() {
		return (
			<Modal isVisible={this.state.manualCodeModal}>
				<View style={styles.manualEntryModal}>
					<ImageBackground source={backgroundImg} style={styles.modalBackgroundImage}>
							{this.modalHeader(this.toogleManuelEntryModal)}
							<View style={styles.inputWrapper}>
								<TextInput
									style={styles.input}
									placeholder="Enter Code..."
									placeholderTextColor={appStyles.inputColor}
									onChange={this.saveBarcode}
								/>
							</View>
							<Button title="Done" onPress={this.toogleManuelEntryModal}/>
					</ImageBackground>
				</View>
			</Modal>
		)
	}

	render() {
		const places = [
			{
				text: 'Pinnicale Travel Document Systems',
				address: '1600 Massachusetts Avenue, N.W., Washington DC',
			},
			{
				text: 'Washington Passport Agency',
				address: '600 19th St NW, Washington, DC 20006',
			},
			{
				text: 'Washington DC Passport Services',
				address: '1901 Pennsylvania Ave NW #407, Washington, DC 20006',
			},
			{
				text: 'Rush My Passport',
				address: '919 18th St NW Suite 230, Washington, DC 20006',
			}
		]

		return (
			<View style={styles.container}>
				<Text style={styles.text}>PASSPORT AGENCY</Text>
				{this.state.qrcode ? <Text style={styles.text}>QR CODE: {this.state.qrcode}</Text> : <View/>}
				<Input placeholder="Where are you?"/>
				<RecentPlaces places={places} onRecentPlacePress={this.onRecentPlacePress}/>
				{this.state.showCamera ? this.cameraModal() : <View/>}
				{this.state.manualCodeModal ? this.manualEntryModal(): <View/>}
			</View>
		)
	}
}
