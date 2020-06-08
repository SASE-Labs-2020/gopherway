import React, { Component } from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {MapView, Polyline} from 'react-native-maps';
import styles from '../style';

const LATITUDE = 44.98295;
const LONGITUDE = -93.2325;
const LATITUDE_DELTA = 0.00415;
const LONGITUDE_DELTA = 0.0054;

export default class GraphEdge extends Component 
{
	constructor(routePts) 
	{
		super(routePts);
		this.state = 
		{ isLoading: true, scrollable: false, coordArray: [],
			Region: {latitude: LATITUDE,
			longitude: LONGITUDE,
			latitudeDelta: LATITUDE_DELTA,
			longitudeDelta: LONGITUDE_DELTA,
			}
		};
	}

	componentDidMount()
	{
		var filename='coffman_yudof.json';//file from ./directions if origin == routePts[0] && destination == routePts[1]
		return fetch('https://sase-labs-2020.github.io/assets/directions/'+ filename)
		.then(response => response.json())
		.then
			(responseJson => {
				this.setState
				({
					isLoading: false,
					data: responseJson,
					coordArray: this.state.data.coordinates,
				})
			})
		.catch(error => console.error(error));
	}

	render()
	{
		if (this.state.isLoading)
		{
			return 
			(
				<View style={{flex: 1, padding: 20}}>
					<ActivityIndicator/>
				</View>
			);
		}
		
		return 
		(
			<MapView region={this.state.Region}  style={styles.mapStyle}>
				<Polyline coordinates={this.state.coordArray}/>
			</MapView>
		);
	}
}