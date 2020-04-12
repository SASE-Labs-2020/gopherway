import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import Direction from './src/components/Direction';
import styles from './src/style';
import RouteSelection from './src/components/RouteSelection';
import GraphEdge from './src/components/GraphEdge';

const url = 'https://sase-labs-2020.github.io/assets/directions/coffman_yudof.json'

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
		}
	}

	async componentDidMount() {
		await Font.loadAsync({
			'neutraface': require('./assets/fonts/NeutraText-Bold.otf'),
			'open-sans': require('./assets/fonts/OpenSans-Regular.ttf')
		});
		this.setState({loaded: true});
	}

	render() {
		if (!this.state.loaded) {
			return (
				<View>
					<ActivityIndicator/>
				</View>
			);
		}


		return (
			<View style={styles.container}>
				<GraphEdge/>
			</View>
		);
	}
}

