import React, { Component } from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {MapView, Overlay, Geojson, Polyline, Marker, Callout, Polygon, Circle} from 'react-native-maps';
import styles from '../style';

export default class GraphEdge extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoading: true, scrollable: false };
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
			<MapView provider={"google"} region={{latitude: 44.9747, longitude: -93.2323, latitudeDelta: 0.0061,longitudeDelta: 0.0061,}} 
			  mapType={"hybrid"} showsPointsOfInterest={false} onMarkerPress={}>
				
			</MapView>
		);
	}
}