import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Direction from './src/components/Direction';

const url = 'https://sase-labs-2020.github.io/assets/directions/coffman_yudof.json'

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Direction
					uri={url}
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
    		backgroundColor: '#ffcc33',
  	}
});
