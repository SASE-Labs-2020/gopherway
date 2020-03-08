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
	subHeading:{
		fontFamily: 'neutraface',
		fontSize: 18,
		alignItems: 'left',
		padding: 15,
		color: colors.gold,
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
	},
	dropdownSm : {
		width: 75,
		height: 20,
		alignItems: "left",
		fontFamily: 'open-sans',
		fontSize: 14,
		backgroundColor: colors.gold,
		textColor: colors.maroon,
		padding: 8,
	},
	dropdownLg : {
		width: 100,
		height: 25,
		alignItems: "left",
		fontFamily: 'open-sans',
		fontSize: 16,
		backgroundColor: colors.gold,
		textColor: colors.maroon,
		padding: 10,
	},
	button: {

	}
});

export default styles;
