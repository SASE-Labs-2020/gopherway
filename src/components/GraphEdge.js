import React, { Component } from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {MapView, Overlay, Geojson, Polyline, Marker, Callout, Polygon, Circle, AnimatedRegion, Animated} from 'react-native-maps';
import styles from '../style';


export default class GraphEdge extends Component {
	constructor(routeInfo) {
		this.state = { isLoading: true, scrollable: false, coordArray: []};
		region: new AnimatedRegion({latitude: 44.98295, longitude: -93.2325, latitudeDelta: 0.00415,longitudeDelta: 0.0054,});
		graph='https://sase-labs-2020.github.io/assets/graph.json';
	}

	onRegionChange(region) {
		this.setState({ region });
	  }

	getRouteInfo(){
		uri='https://sase-labs-2020.github.io/assets/directions/coffman_yudof.json'
		return fetch(this.routeInfo.uri)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({
					isLoading: false,
					data: responseJson,
				})
			})
			.catch(error => console.error(error));
	}

	componentDidMount() {

		return fetch(this.props.graph)
		.then(response => response.json())
		.then(responseJson => {
			this.setState({
				isLoading: false,
				data: responseJson,
			})
		})
		.catch(error => console.error(error));
			//look at output, compare pairs
			coordArray = this.state.data.coordinates;

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
				<Overlay image={uri='https://sase-labs-2020.github.io/assets/images/eastBankOverlay.png'} bounds={[[44.9788, -93.2379], [44.9705, -93.2271]]}/>

				<Polyline coordinates={}/>
			</MapView>
		);
	}
}graph["Coffman Memorial Union"]["Mark G. Yudof Hall"]