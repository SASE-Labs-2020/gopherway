import React, { Component } from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {MapView, Overlay, Geojson, Polyline, Marker, Callout, Polygon, Circle, AnimatedRegion, Animated} from 'react-native-maps';
import styles from '../style';

export default class GraphEdge extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoading: true, scrollable: false };
		region: new AnimatedRegion({latitude: 44.98295, longitude: -93.2325, latitudeDelta: 0.00415,longitudeDelta: 0.0054,});
	}

	onRegionChange(region) {
		this.setState({ region });
	  }

	componentDidMount() {
		return fetch(this.props.uri)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({
					isLoading: false,
					data: responseJson,
				})
			})
			.catch(error => console.error(error));
	}

	render() {
		if (this.state.isLoading) {
			return (
				<View style={{flex: 1, padding: 20}}>
					<ActivityIndicator/>
				</View>
			);
		}
		
		return (
			<MapView region={this.state.region} onRegionChange={this.onRegionChange} >
				<Overlay image={eastBankOverlay.png} bounds={[[44.9788, -93.2379], [44.9705, -93.2271]]}/>
			</MapView>
		);
	}
}