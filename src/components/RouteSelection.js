import React, { Component } from 'react';
import {ActivityIndicator, FlatList, Image, ScrollView, Text, View, Button, Picker} from 'react-native';
import styles from '../style';
import colors from '../style';
import buildings from '../buildings';

export default class RouteSelection extends Component 
{
	constructor(props) 
	{
		super(props);
		this.state = {isLoading: false, scrollable: false, campusInput: "East Bank"};//Initial state
	}//Called in App.js
			
	routeSubmit(start,end)
	{
		var routePts = []
    routePts[0] = start;
    routePts[1] = end;
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
			<View>
				<Text style={styles.heading}>Pick Your Route</Text>			
				<Text style={styles.subHeading}>Starting Building</Text>
				<buildings campus={campusInput}/>

				<Text style={styles.subHeading}> Ending Building </Text>
				<buildings campus={campusInput}/>

				<Button title="Submit" style={styles.button} onPress={()=>this.routeSubmit(this.startBuilding,this.endBuilding)}/>
			</View>
		);
	}
}
