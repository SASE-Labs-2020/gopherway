import React, { Component } from 'react';
import {ActivityIndicator, View} from 'react-native';
import MapView from 'react-native-maps';
import {Polyline} from 'react-native-maps';
import styles from '../style';

const LATITUDE = 44.974208;
const LONGITUDE = -93.2325;
const LATITUDE_DELTA = 0.001;
const LONGITUDE_DELTA = 0.012;

export default class RouteAccessedMap extends Component 
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

	render()
	{
		if (this.state.isLoading)
		{
			return(
				<View style={{flex: 1, padding: 20}}>
					<ActivityIndicator/>
				</View>
			);
		}
		
		return(
			<MapView region={this.state.Region}  style={styles.mapStyle}/>
		);
	}
}