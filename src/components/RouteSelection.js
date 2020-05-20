import React, { Component } from 'react';
import {ActivityIndicator, FlatList, Image, ScrollView, Text, View, Button, Alert} from 'react-native';
import {Picker} from '@react-native-community/picker'
import { Dropdown } from 'react-native-material-dropdown';
import styles from '../style';
import colors from '../style';

export default class RouteSelection extends Component 
{
	constructor(props) 
	{
		super(props);
		this.state = {isLoading: false, scrollable: false};//Initial state
	}//Called in App.js
			
	routeSubmit()
	{
		routePts = [startBuilding,endBuilding]
		return routePts
		Alert.alert('Route points submitted');
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
				<Picker style={styles.dropdownLg}
					startBuilding={this.state.PickerSelectedVal}
					onValueChange={(itemValue, itemPosition) => this.setState({PickerSelectedVal: itemValue})}>
					<Picker.Item label="10 Church St" value="10 Church St"/>
					<Picker.Item label="Akerman Hall" value="Akerman Hall"/>
					<Picker.Item label="Amundson Hall" value="Amundson Hall"/>
					<Picker.Item label="Boynton Clinic" value="Boynton"/>
					<Picker.Item label="Childrens Rehab" value="Childrens Rehab"/>
					<Picker.Item label="The Civil Engineering Building" value="Civil Engineering"/>
					<Picker.Item label="Coffman Union" value="Coffman"/>
					<Picker.Item label="Diehl Hall" value="Diehl Hall"/>
					<Picker.Item label="Dwan Cardio./Masonic Cancer Research Center" value="Dwan"/>
					<Picker.Item label="East River Road Garage" value="East River Road Garage"/>
					<Picker.Item label="Folwell Hall" value="Folwell Hall"/>
					<Picker.Item label="Ford Hall" value="Ford Hall"/>
					<Picker.Item label="The Graduate Hotel" value="The Graduate Hotel"/>
					<Picker.Item label="Hospital Patient/Visitor Ramp" value="Hospital Patient/Visitor Ramp"/>
					<Picker.Item label="Jackson Hall" value="Jackson Hall"/>
					<Picker.Item label="Johnston Hall" value="Johnston Hall"/>
					<Picker.Item label="Keller Hall" value="Keller Hall"/>
					<Picker.Item label="Kolthoff Hall" value="Kolthoff Hall"/>
					<Picker.Item label="Lind Hall" value="Lind Hall"/>
					<Picker.Item label="Mayo Auditorium" value="Mayo Auditorium"/>
					<Picker.Item label="Mayo Building" value="Mayo Building"/>
					<Picker.Item label="MCB" value="MCB"/>
					<Picker.Item label="McNamara Alumni Center" value="McNamara Alumni Center"/>
					<Picker.Item label="Mechanical Engineering Building" value="Mechanical Engineering Building"/>
					<Picker.Item label="Moos Tower" value="Moos Tower"/>
					<Picker.Item label="Morrill Hall" value="Morrill Hall"/>
					<Picker.Item label="Murphy Hall" value="Murphy Hall"/>
					<Picker.Item label="Nils-Hasselmo Hall" value="Nils-Hasselmo Hall"/>
					<Picker.Item label="Nolte Center" value="Nolte Center"/>
					<Picker.Item label="Nolte Center Garage" value="Nolte Center Garage"/>
					<Picker.Item label="Northrop Auditorium" value="Northrop Auditorium"/>
					<Picker.Item label="Northrop Garage" value="Northrop Garage"/>
					<Picker.Item label="P-W Building" value="P-W Building"/>
					<Picker.Item label="Rapson Hall" value="Rapson Hall"/>
					<Picker.Item label="Shepherd Labs" value="Shepherd Labs"/>
					<Picker.Item label="Smith Hall" value="Smith Hall"/>
					<Picker.Item label="Tate Hall" value="Tate Hall"/>
					<Picker.Item label="Transportation and Safety Building" value="Transportation and Safety Building"/>
					<Picker.Item label="UMN Medical Center" value="UMN Medical Center"/>
					<Picker.Item label="University Avenue Ramp" value="University Avenue Ramp"/>
					<Picker.Item label="Variety Club Resource Center" value="Variety Club Resource Center"/>
					<Picker.Item label="Vincent Hall" value="Vincent Hall"/>
					<Picker.Item label="Walter Library" value="Walter Library"/>
					<Picker.Item label="Washington Avenue Parking Ramp" value="Washington Avenue Parking Ramp"/>
					<Picker.Item label="Weaver-Densford Hall" value="Weaver-Densford Hall"/>
					<Picker.Item label="Williamson Hall" value="Williamson Hall"/>
					<Picker.Item label="Yudof Hall" value="Yudof Hall"/>
					</Picker>

				<Text style={styles.subHeading}> Ending Building </Text>
				<Picker style={styles.dropdownLg} 
					endBuilding={this.state.PickerSelectedVal}
					onValueChange={(itemValue, itemPosition) => this.setState({PickerSelectedVal: itemValue})}>
					<Picker.Item label="10 Church St" value="10 Church St"/>
					<Picker.Item label="Akerman Hall" value="Akerman Hall"/>
					<Picker.Item label="Amundson Hall" value="Amundson Hall"/>
					<Picker.Item label="Boynton Clinic" value="Boynton"/>
					<Picker.Item label="Childrens Rehab" value="Childrens Rehab"/>
					<Picker.Item label="The Civil Engineering Building" value="Civil Engineering"/>
					<Picker.Item label="Coffman Union" value="Coffman"/>
					<Picker.Item label="Diehl Hall" value="Diehl Hall"/>
					<Picker.Item label="Dwan Cardio./Masonic Cancer Research Center" value="Dwan"/>
					<Picker.Item label="East River Road Garage" value="East River Road Garage"/>
					<Picker.Item label="Folwell Hall" value="Folwell Hall"/>
					<Picker.Item label="Ford Hall" value="Ford Hall"/>
					<Picker.Item label="The Graduate Hotel" value="The Graduate Hotel"/>
					<Picker.Item label="Hospital Patient/Visitor Ramp" value="Hospital Patient/Visitor Ramp"/>
					<Picker.Item label="Jackson Hall" value="Jackson Hall"/>
					<Picker.Item label="Johnston Hall" value="Johnston Hall"/>
					<Picker.Item label="Keller Hall" value="Keller Hall"/>
					<Picker.Item label="Kolthoff Hall" value="Kolthoff Hall"/>
					<Picker.Item label="Lind Hall" value="Lind Hall"/>
					<Picker.Item label="Mayo Auditorium" value="Mayo Auditorium"/>
					<Picker.Item label="Mayo Building" value="Mayo Building"/>
					<Picker.Item label="MCB" value="MCB"/>
					<Picker.Item label="McNamara Alumni Center" value="McNamara Alumni Center"/>
					<Picker.Item label="Mechanical Engineering Building" value="Mechanical Engineering Building"/>
					<Picker.Item label="Moos Tower" value="Moos Tower"/>
					<Picker.Item label="Morrill Hall" value="Morrill Hall"/>
					<Picker.Item label="Murphy Hall" value="Murphy Hall"/>
					<Picker.Item label="Nils-Hasselmo Hall" value="Nils-Hasselmo Hall"/>
					<Picker.Item label="Nolte Center" value="Nolte Center"/>
					<Picker.Item label="Nolte Center Garage" value="Nolte Center Garage"/>
					<Picker.Item label="Northrop Auditorium" value="Northrop Auditorium"/>
					<Picker.Item label="Northrop Garage" value="Northrop Garage"/>
					<Picker.Item label="P-W Building" value="P-W Building"/>
					<Picker.Item label="Rapson Hall" value="Rapson Hall"/>
					<Picker.Item label="Shepherd Labs" value="Shepherd Labs"/>
					<Picker.Item label="Smith Hall" value="Smith Hall"/>
					<Picker.Item label="Tate Hall" value="Tate Hall"/>
					<Picker.Item label="Transportation and Safety Building" value="Transportation and Safety Building"/>
					<Picker.Item label="UMN Medical Center" value="UMN Medical Center"/>
					<Picker.Item label="University Avenue Ramp" value="University Avenue Ramp"/>
					<Picker.Item label="Variety Club Resource Center" value="Variety Club Resource Center"/>
					<Picker.Item label="Vincent Hall" value="Vincent Hall"/>
					<Picker.Item label="Walter Library" value="Walter Library"/>
					<Picker.Item label="Washington Avenue Parking Ramp" value="Washington Avenue Parking Ramp"/>
					<Picker.Item label="Weaver-Densford Hall" value="Weaver-Densford Hall"/>
					<Picker.Item label="Williamson Hall" value="Williamson Hall"/>
					<Picker.Item label="Yudof Hall" value="Yudof Hall"/>
					</Picker>

				<Button title="Submit" style={styles.button} onPress={()=>this.routeSubmit}/>
			</View>
		);
	}
}
/*Eventually, I would want this component to be able to use previously 
input information (which campus was chosen) before running this to
display certain arrays of info in the dropdown */
