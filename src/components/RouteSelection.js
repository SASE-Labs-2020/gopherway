import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from 'react-native';
import styles from '../style';
import { Dropdown } from 'react-native-material-dropdown';
import { Title, Button } from 'react-native-paper';

export default class RouteSelection extends Component 
{
	constructor(props) 
	{
		super(props);
		this.state = {isLoading: false, scrollable: false, campusInput: "East Bank", start: null, end: null, EBank: [], dictionary: {}};//Initial state

	}//Called in App.js

	async getData(url) {
        const response = await fetch(url);
        return response.json();
    }

	async componentDidMount(){
		var names = await this.getData('https://SASE-Labs-2020.github.io/assets/names.json');
		var buildings = Object.keys(await this.getData('https://SASE-Labs-2020.github.io/assets/names.json')).map(
			function(name){
				return {value: name}
			});
		this.setState({EBank: buildings, dictionary: names});
	}

	render() 
	{
		if (this.state.isLoading) 
		{
			return (
				<View style={{flex: 1, padding: 20}}>
					<ActivityIndicator/>
				</View>
			);
		}

		return (
			<ScrollView style={{ backgroundColor: '#7fb9e6' }}>
				<Title style={styles.heading}>Pick Your Route</Title>			
				<Dropdown
        			label='Starting Building'
					data={this.state.EBank}
					onChangeText ={(value)=> this.setState({start: value})}
					baseColor='#0668B3'
					textColor='#0668B3'
					containerStyle={{ margin: 10 }}
					itemColor='#0668B3'
					selectedItemColor='#0668B3'
			     />

				<Dropdown
        			label='Ending Building'
					data={this.state.EBank}
					onChangeText ={(value)=> this.setState({end: value})}
					baseColor='#0668B3'
					textColor='#0668B3'
					containerStyle={{ margin: 10 }}
					itemColor='#0668B3'
					selectedItemColor='#0668B3'
			     />

				<Button
					color='#7DC242'
					mode='contained'
					style={{ margin: 20 }}
					onPress={ async ()=>{
						const Dijkstra = require('node-dijkstra');
						const graph = new Dijkstra(await this.getData('https://SASE-Labs-2020.github.io/assets/graph.json'));
						const path = graph.path(this.state.start, this.state.end);

						var temps = path.reduce((acc, cur, idx, src) => idx < src.length - 1 ? acc.concat([[this.state.dictionary[cur], this.state.dictionary[src[idx+1]]]]) : acc, []);
						var temps = temps.map(temp => temp.join("_"));

						this.props.navigation.navigate('Graph', {filenames: temps});
						this.props.navigation.navigate('Direction', {buildings: path.map(key => this.state.dictionary[key])});
						
						//this.props.navigation.navigate('Graph', {filenames: ['tNs_graduate', 'graduate_mcNamara', 'mcNamara_universityAveRamp']});
						//this.props.navigation.navigate('Direction', {buildings: ['tNs', 'graduate', 'mcNamara', 'universityAveRamp']})
					}}
				>
					Get Directions	
				</Button>
				<Button
					color='#7DC242'
					mode='contained'
					style={{ margin: 20 }}
					onPress={async ()=>{
						const Dijkstra = require('node-dijkstra');
						const graph = new Dijkstra(await this.getData('https://SASE-Labs-2020.github.io/assets/graph.json'));
						const path = graph.path(this.state.start, this.state.end);

						var temps = path.reduce((acc, cur, idx, src) => idx < src.length - 1 ? acc.concat([[this.state.dictionary[cur], this.state.dictionary[src[idx+1]]]]) : acc, []);
						var temps = temps.map(temp => temp.join("_"));

						this.props.navigation.navigate('Direction', {buildings: path.map(key => this.state.dictionary[key])});
						this.props.navigation.navigate('Graph', {filenames: temps});
						
						//this.props.navigation.navigate('Graph', {filenames: ['tNs_graduate', 'graduate_mcNamara', 'mcNamara_universityAveRamp']});
						//this.props.navigation.navigate('Direction', {buildings: ['tNs', 'graduate', 'mcNamara', 'universityAveRamp']})
					}}
				>
					See Path
				</Button>
				<Button
					color='#7DC242'
					mode='contained'
					style={{ margin: 20 }}
					onPress={() => this.props.navigation.navigate('Graph', {filenames: null})
					}
				>
					See all Paths
				</Button>
			</ScrollView>
		);
	}
}
