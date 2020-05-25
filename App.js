import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Picker} from 'react-native';
import * as Font from 'expo-font';
import Direction from './src/components/Direction';
import styles from './src/style';
import RouteSelection from './src/components/RouteSelection';
import GraphEdge from './src/components/GraphEdge';

const url = 'https://sase-labs-2020.github.io/assets/directions/graduate_mcNamara.json'
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
				<Direction uri={url}/>
			</View>
		);
	}
}//<RouteSelection/>
//<GraphEdge routePts = {RouteSelection.routePts}/>

