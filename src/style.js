import { StyleSheet, Dimensions } from 'react-native'; 

const colors = {
	blue: '#0668B3',
	green: '#7DC242',
	maroon: '#7a0019',
	gold: '#ffcc33',
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#7fb9e6',
		//alignItems: 'center',
		justifyContent: 'center',
		padding: 20
	},
	heading: {
		//fontFamily: 'neutraface',
		fontSize: 30,
		padding: 22,
		color: colors.green,
		backgroundColor: colors.blue,
	},
	subHeading:{
		//fontFamily: 'neutraface',
		fontSize: 18,
		alignItems: 'flex-start',
		padding: 15,
		color: colors.green,
	},
	item: {
		padding: 10,
		fontSize: 16,
		//fontFamily: 'open-sans',
	},
	image: {
		width: 300,
		height: 300,
		resizeMode: 'contain',
		padding: 8,
	},
	dropdownSm : {
		alignItems: "flex-start",
		//fontFamily: 'open-sans',
		fontSize: 14,
		backgroundColor: colors.green,
		color: colors.blue,
		paddingLeft: 6,
	},
	dropdownLg : {
		alignItems: "flex-start",
		//fontFamily: 'open-sans',
		fontSize: 16,
		backgroundColor: colors.green,
		color: colors.blue,
		paddingLeft: 6,
	},
	button: {
		width: 50,
		height: 20,
		alignItems: "center",
		//fontFamily: 'open-sans',
		fontSize: 12,
		backgroundColor: colors.blue,
		color: colors.green,
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
