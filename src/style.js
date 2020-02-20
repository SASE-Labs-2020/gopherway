import { StyleSheet } from 'react-native'; 

const colors = {
	maroon: '#7a0019',
	gold: '#ffcc33',
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	heading: {
		fontFamily: 'neutraface',
		fontSize: 30,
		padding: 22,
		color: colors.gold,
		backgroundColor: colors.maroon
	},
	item: {
		padding: 10,
		fontSize: 16,
		fontFamily: 'open-sans',
	},
	image: {
		width: 300,
		height: 300,
		resizeMode: 'contain',
		padding: 8,
	}
});

export default styles;
