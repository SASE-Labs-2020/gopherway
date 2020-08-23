import React, { Component } from 'react';
import {ActivityIndicator, FlatList, Image, ScrollView, Text, View, Button} from 'react-native';
import styles from '../style';
import { Dropdown } from 'react-native-material-dropdown';

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
			<ScrollView>
				<Text style={styles.heading}>Pick Your Route</Text>			
				<Dropdown
        			label='Starting Building'
					data={this.state.EBank}
					onChangeText ={(value)=> this.setState({start: value})}
					baseColor='#ffcc33'
					textColor='#7a0019'
					itemColor='#ffcc33'
					selectedItemColor='#610014'
			     />

				<Dropdown
        			label='Ending Building'
					data={this.state.EBank}
					onChangeText ={(value)=> this.setState({end: value})}
					baseColor='#ffcc33'
					textColor='#7a0019'
					itemColor='#ffcc33'
					selectedItemColor='#610014'
			     />

				<Button
					title="Submit"
					style={styles.button}
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
				/>
			</ScrollView>
		);
	}
}
