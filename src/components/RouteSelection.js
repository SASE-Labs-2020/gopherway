import React, { Component } from 'react';
import {ActivityIndicator, FlatList, Image, ScrollView, Text, View, Button} from 'react-native';
import {Picker} from '@react-native-community/picker';
import styles from '../style';
import colors from '../style';
import { Dropdown } from 'react-native-material-dropdown';
import GraphEdge from './GraphEdge';

export default class RouteSelection extends Component 
{
	constructor(props) 
	{
		super(props);
		this.state = {isLoading: false, scrollable: false, campusInput: "East Bank", start: null, end: null};//Initial state
	}//Called in App.js

	openMap(){
		return(
			<View style={styles.container}>
				<GraphEdge/>
			</View>
		);
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

		let EBank = [
			{value: "10 Church St",}, {value: "Akerman Hall",}, {value: "Amundson Hall",},
			  {value: "Boynton Clinic",}, {value: "Childrens Rehab",}, {value: "The Civil Engineering Building",},
			  {value: "Coffman Union",}, {value: "Civil Engineering",}, {value: "Diehl Hall",},
			  {value: "Dwan Cardio./Masonic Cancer Research Center",}, {value: "East River Road Garage",}, 
			  {value: "Folwell Hall",}, {value: "Ford Hall",}, {value: "The Graduate Hotel",},
			  {value: "Hospital Patient/Visitor Ramp",}, {value: "Jackson Hall",}, {value: "Johnston Hall",},
			  {value: "Keller Hall",}, {value: "Kolthoff Hall",}, {value: "Lind Hall",},
			  {value: "Mayo Auditorium",}, {value: "Mayo Building",}, {value: "Molecular & Cellular Biology Building",},
			  {value: "McNamara Alumni Center",}, {value: "Mechanical Engineering Building",}, {value: "Moos Tower",},
			  {value: "Morrill Hall",}, {value: "Murphy Hall",}, {value: "Nils-Hasselmo Hall",},
			  {value: "Nolte Center",}, {value: "Nolte Center Garage",}, {value: "Northrop Auditorium",},
			  {value: "Northrop Garage",}, {value: "P-W Building",}, {value: "Rapson Hall",},
			  {value: "Shepherd Labs",},{value: "Smith Hall",},{value: "Tate Hall",},
			  {value: "Transportation and Safety Building",},{value: "UMN Medical Center",},
			  {value: "University Avenue Ramp",}, {value: "Variety Club Resource Center",},
			  {value: "Vincent Hall",},{value: "Walter Library",}, {value: "Washington Avenue Parking Ramp",},
			  {value: "Weaver-Densford Hall",},{value: "Williamson Hall",},{value: "Yudof Hall",},
		];

		return (
			<ScrollView>
				<Text style={styles.heading}>Pick Your Route</Text>			
				<Dropdown
        			label='Starting Building'
					data={EBank}
					onChangeText ={(value)=> this.setState({start: value})}
					baseColor='#ffcc33'
					textColor='#7a0019'
					itemColor='#ffcc33'
					selectedItemColor='#610014'
			     />

				<Dropdown
        			label='Ending Building'
					data={EBank}
					onChangeText ={(value)=> this.setState({end: value})}
					baseColor='#ffcc33'
					textColor='#7a0019'
					itemColor='#ffcc33'
					selectedItemColor='#610014'
			     />

				<Button title="Submit" style={styles.button} onPress={()=>console.log(this.state.start + ", " + this.state.end)}/>
				<Button title="Map" style={styles.button} onPress={()=>openMap()}/>
			</ScrollView>
		);
	}
}
