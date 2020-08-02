import React, { Component } from 'react';
import { ActivityIndicator, View} from 'react-native';
import Direction from './src/components/Direction';
import styles from './src/style';
import RouteSelection from './src/components/RouteSelection';
import GraphEdge from './src/components/GraphEdge';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
        <Direction buildings={['tNs', 'graduate', 'mcNamara', 'universityAveRamp']}/>
      </View>
		);
	}
}