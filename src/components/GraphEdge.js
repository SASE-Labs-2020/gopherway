import React, { Component } from 'react';
import {ActivityIndicator, View} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import {Polyline} from 'react-native-maps';
import styles from '../style';
import { Card, Title, Paragraph } from 'react-native-paper';

const LATITUDE = 44.974208;
const LONGITUDE = -93.2325;
const LATITUDE_DELTA = 0.001;
const LONGITUDE_DELTA = 0.012;

export default class GraphEdge extends Component 
{
	constructor(props) 
	{
		super(props);
		this.state = 
		{ isLoading: false, scrollable: false, data: [], markerData: [], filenames: [],
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
		var marker_urls;
		if(this.props.route.params.filenames==null){
			const graph = await this.getData('https://SASE-Labs-2020.github.io/assets/graph.json');
			const names = await this.getData('https://SASE-Labs-2020.github.io/assets/names.json');
      		//console.log(JSON.stringify(graph) + JSON.stringify(names));
	  		const first = Object.entries(graph).map(
				([start, ends]) => {
        			const n_ends = Object.keys(ends).length;
					return [Array(n_ends).fill(start), Object.keys(ends)];
				}
			);
			const zip= rows=>rows[0].map((_,index)=>rows.map(row=>row[index]));
			const second = first.map(([starts, ends]) => zip([starts, ends]));
      		console.log(second);
			const third = second.map(
        		(paths) => paths.map(
          			(path) => {
            			const new_path = [names[path[0]], names[path[1]]];
            			return 'https://sase-labs-2020.github.io/assets/directions/' + new_path.join('_') + '.json';
          			}
        		)
      		);
			urls = [].concat.apply([], third);
			marker_urls = Object.values(names).map(name => 'https://SASE-Labs-2020.github.io/assets/informations/' + name + '.json');
		}
		else{
			this.setState({filenames: this.props.route.params.filenames});
			urls = this.props.route.params.filenames.map(filename => 'https://sase-labs-2020.github.io/assets/directions/'+ filename + '.json');
			marker_urls = this.props.route.params.filenames.map(filename => 'https://sase-labs-2020.github.io/assets/informations/' + filename.split('_')[0] + '.json').concat(this.props.route.params.filenames.pop().split('_')[1]);
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
			marker_urls = urls.forEach(url =>{return fetch(url, {
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
									markerData: prevState.markerData.concat(responseData),
									isLoading: false,
								};
							}
						);
					});
			});
	}

	async componentDidUpdate(){
		if(this.props.route.params.filenames!=null && JSON.stringify(this.state.filenames)!=JSON.stringify(this.props.route.params.filenames)){
			var urls;
			this.setState({filenames: this.props.route.params.filenames, data: []});
			urls = this.props.route.params.filenames.map(filename => 'https://sase-labs-2020.github.io/assets/directions/'+ filename + '.json');
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
								};
							}
						);
					});
			});
			marker_urls = this.props.route.params.filenames.map(filename => 'https://sase-labs-2020.github.io/assets/informations/' + filename.split('_')[0] + '.json').concat(this.props.route.params.filenames.pop().split('_')[1]);
			marker_urls = urls.forEach(url =>{return fetch(url, {
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
									markerData: prevState.markerData.concat(responseData),
								};
							}
						);
					});
			});
		}
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
				{this.state.data.map(json => <Polyline strokeWidth={3} strokeColor='#0668B3' coordinates={json.coordinates}/>)}
				{this.state.markerData.map(json => 
					<Marker coordinate={json.location}>
						<Callout>
							<Card>
								<Title>{json.building}</Title>
								{json.info.university ? <Paragraph>json.info.university</Paragraph> : null}
								{json.info.public ? <Paragraph>json.info.public</Paragraph> : null}
								{json.info.accessibility ? <Paragraph>json.info.accessibility</Paragraph> : null}
							</Card>
						</Callout>
					</Marker>
				)}
			</MapView>
		);
	}
}