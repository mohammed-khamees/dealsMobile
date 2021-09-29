import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		width,
		height,
		flex: 1,
		alignItems: 'center',
	},
	image: {
		width: width - 40,
		height: height / 3.2,
		resizeMode: 'contain',
		marginBottom: 30,
	},
	footer: {
		width: '100%',
		position: 'absolute',
		bottom: 0,
		borderBottomEndRadius: 15,
		borderBottomLeftRadius: 15,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 15,
	},
	textTitle: {
		color: '#fff',
		fontSize: 25,
	},
	textSubTitle: {
		color: '#fff',
		fontSize: 17,
		textDecorationLine: 'line-through',
		opacity: 0.6,
	},
	textTime: {
		color: '#fff',
		fontSize: 17,
	},
	btn: {
		backgroundColor: 'rgba(255, 255, 255, 0.5)',
		paddingHorizontal: '7%',
		paddingVertical: '2.5%',
		borderRadius: 40,
	},
	btnText: {
		fontSize: 22,
		color: '#fff',
	},
});

export default styles;
