import React, { Component } from 'react';
import {ActivityIndicator, FlatList, Image, Picker, ScrollView, Text, View, Button, Alert} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import styles from '../style';
import colors from '../style';

const eastBankList =
[
	{value: '10 Church',},
	{value: 'Akerman Hall',},
	{value: 'Amundson Hall',},
	{value: 'Boynton Clinic',},
	{value: 'Childrens Rehab',},
	{value: 'Civil Engineering',},
	{value: 'Coffman Union',},
	{value: 'Diehl Hall',},
	{value: 'Dwan Cardio./Masonic Cancer Research Center',},
	{value: 'East River Road Garage',},
	{value: 'Folwell Hall',},
	{value: 'Ford Hall',},
	{value: 'Graduate Hotel',},
	{value: 'Hospital Patient/Visitor Ramp',},
	{value: 'HSEC',},
	{value: 'Jackson Hall',},
	{value: 'Johnston Hall',},
	{value: 'Keller Hall',},
	{value: 'Kolthoff Hall',},
	{value: 'Lind Hall',},
	{value: 'Mayo Auditorium',},
	{value: 'Mayo Building',},
	{value: 'MCB',},
	{value: 'McNamara Alumni',},
	{value: 'Mechanical Engineering Building',},
	{value: 'Moos Tower',},
	{value: 'Morrill Hall',},
	{value: 'Murphy Hall',},
	{value: 'Nils-Hasselmo Hall',},
	{value: 'Nolte Center',},
	{value: 'Nolte Center Garage',},
	{value: 'Northrop Auditorium',},
	{value: 'Northrop Garage',},
	{value: 'P-W Building',},
	{value: 'Rapson Hall',},
	{value: 'Shepherd Labs',},
	{value: 'Smith Hall',},
	{value: 'Tate Hall',},
	{value: 'Transportation & Safety Building',},
	{value: 'UMN Medical Center',},
	{value: 'University Avenue Ramp',},
	{value: 'Variety Club Resource Center',},
	{value: 'Vincent Hall',},
	{value: 'Walter Library',},
	{value: 'Washington Avenue Parking Ramp',},
	{value: 'Weaver-Densford Hall',},
	{value: 'Williamson Hall',},
	{value: 'Yudof Hall',}
];

const nAFloors =
[
	{value: 'Not Applicable, only one floor available'}
];

export default class RouteSelection extends Component 
{
	constructor(props) 
	{
		super(props);
		this.state = {isLoading: false, scrollable: false};//Initial state
	}//Called in App.js
			
	routeSubmit()
	{
		Alert.alert('Wow the route would be submitted but it is not coded yet lol');
	}

	render() 
	{

		let floorList =
		[
			{value: 'B',}, {value: 'SB',}, {value: 'LC',}, {value: 'T',},
			{value: '1',}, {value: '2',}, {value: '3',}, {value: '4',},
			{value: '5',}, {value: '6',}, {value: '7',}, {value: '8',},
			{value: '9',}, {value: '10',}, {value: '11',}, {value: '12',},
			{value: '13',}, {value: '14',}, {value: '15',}, {value: '16',},
			{value: '17',}, {value: '18',}
		];
		
		if (this.state.isLoading) 
		{
			return (
				<View style={{flex: 1, padding: 20}}>
					<ActivityIndicator/>
				</View>
			);
		}

		return (
			<View>
				<Text style={styles.heading}>Pick Your Route</Text>			
				<Text style={styles.subHeading}>Starting Point</Text>
				<Dropdown label='Building' style={styles.dropdownLg} data={eastBankList}/>
				<Dropdown label='Floor' style={styles.dropdownSm} data={floorList}/>
				<Text style={styles.subHeading}> Ending Point </Text>
				<Dropdown label='Building' style={styles.dropdownLg} data={eastBankList}/>
				<Dropdown label='Floor' style={styles.dropdownSm} data={floorList}/>
				<Button title='submit' style = {styles.button} onClick={()=>this.routeSubmit}/>
			</View>
		);
	}
}
/*Eventually, I would want this component to be able to use previously 
input information (which campus was chosen) before running this to
display certian arrays of info in the dropdown */
/*Also I would like to make it so the building 
has to be chosen first, and based on that input
the floor selection would change (access certain
array values or run nAFloors under that dropdown)*/
