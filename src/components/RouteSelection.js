import React, { Component } from 'react';
import {ActivityIndicator, FlatList, Image, Picker, ScrollView, Text, View, Button} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import styles from '../style';
import colors from '../style';

export default class RouteSelection extends Component {
	constructor(props) {
		super(props);
		this.state = {isLoading: true, scrollable: false};//Initial state
	}//Called in App.js
	
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
	}//Need if taking data from json (api, data storage on the server), like images that aren't the logo, stuff that changes
			
	render() 
	{
		let buildingList =
		[
			{value: 'Building 1',},
			{value: 'Building 2'}
		];
		let floorList =
		[
			{value: '1',}, {value: '2'}, {value: '3'}, {value: '4'}, {value: '5'}
		];
		if (this.state.isLoading) 
		{
		return (
			<View>
				<Text style={styles.heading}>Pick Your Route</Text>			
				<Text style={styles.subHeading}> Starting Point </Text>
				<Dropdown label='Building' style={styles.dropdownLg} data={this.buildingList}/>
				<Dropdown label='Floor' style={styles.dropdownSm} data={this.floorList}/>
				<Text style={styles.subHeading}> Ending Point </Text>
				<Dropdown label='Building' style={styles.dropdownLg} data={this.buildingList}/>
				<Dropdown label='Floor' style={styles.dropdownSm} data={this.floorList}/>
				<Button style = {styles.image} onClick={()=>/*Submits data*/}/>
			</View>
		);
		}
	}