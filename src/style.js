import { StyleSheet, Dimensions } from 'react-native'; 

const colors = {
	maroon: '#7a0019',
	gold: '#ffcc33',
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
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
		alignItems: 'flex-start',
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
		alignItems: "flex-start",
		fontFamily: 'open-sans',
		fontSize: 14,
		backgroundColor: colors.gold,
		color: colors.maroon,
		paddingLeft: 6,
	},
	dropdownLg : {
		alignItems: "flex-start",
		fontFamily: 'open-sans',
		fontSize: 16,
		backgroundColor: colors.gold,
		color: colors.maroon,
		paddingLeft: 6,
	},
	button: {
		width: 50,
		height: 20,
		alignItems: "center",
		fontFamily: 'open-sans',
		fontSize: 12,
		backgroundColor: colors.maroon,
		color: colors.gold,
		padding: 8,
		flexDirection: 'row',
    	justifyContent: 'space-between',
	},
	mapStyle: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	  },
});

export default styles;
