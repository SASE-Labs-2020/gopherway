import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Direction from './src/components/Direction';
import data from './src/assets/directions/coffman_yudof.json';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Direction
					origin={data.origin}
					destination={data.destination}
					directions={data.directions}
					images={data.images}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
    		flex: 1,
    		justifyContent: 'center',
    		alignItems: 'center',
    		backgroundColor: '#7a0019',
  	}
});
