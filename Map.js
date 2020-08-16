import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import Direction from './src/components/Direction';
import styles from './src/style';
import RouteSelection from './src/components/RouteSelection';

const url = 'https://sase-labs-2020.github.io/assets/directions/coffman_yudof.json'
import MapView, {Marker} from 'react-native-maps';

const LATITUDE =44.9727;
const LONGITUDE = -93.2354;
const LATITUDE_DELTA = 0.015;
const LONGITUDE_DELTA= 0.0121;

export default class BuildingMarker extends Component {
  
  constructor(props) 
	{
		super(props);
		this.state = 
		{ isLoading: false, scrollable: false, data: [],
			Region: {latitude: LATITUDE,
			longitude: LONGITUDE,
			latitudeDelta: LATITUDE_DELTA,
			longitudeDelta: LONGITUDE_DELTA,
			}
		};
	}
	
	
     async getData(url) {
    const response = await fetch(url);
    return response.json()
  }

	async componentDidMount(){
    var urls;
		if(this.props.filenames==null){
			const names = await this.getData('https://SASE-Labs-2020.github.io/assets/names.json');
			urls = names.map(name => 'https://sase-labs-2020.github.io/assets/informations/'+ name + '.json')
			
		} else{
			var filenames= this.props.filenames;
			urls = filenames.map(filename => 'https://sase-labs-2020.github.io/assets/informations/'+ filename + '.json');
		}
			urls = urls.forEach(url =>{return fetch(url, {
					method: "GET",
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					},
				})
				.then(response => response.json())
					.then((responseData) => {
						console.log(responseData)
						this.setState(
							(prevState) => {
								return {
									data: prevState.data.concat(responseData),
									isLoading: false,
								};
							}
						);
					});
			});
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
			<MapView region={this.state.Region}  style={styles.mapStyle}>
			
			{this.state.data.map(json => <Marker
			//coordinates={json.coordinates}
			title={json.building}
			description={json.info}
			/>)}
			
			</MapView>
		);
	}
}
