import React, { Component } from 'react';
import {ActivityIndicator, FlatList, Image, ScrollView, Text, View, Button, Picker} from 'react-native';
import styles from '../style';
import colors from '../style';

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

	whatCampus(campus)
	{
		if (this.campus == "East Bank")
		{
			campus = <Picker style={styles.dropdownLg}
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
		} else if (this.campus == "West Bank") 
		{
			campus = <Picker style={styles.dropdownLg}
					startBuilding={this.state.PickerSelectedVal}
					onValueChange={(itemValue, itemPosition) => this.setState({PickerSelectedVal: itemValue})}>
					<Picker.Item label="19th Ave Ramp" value="19th Ave Ramp"/>
					<Picker.Item label="Andersen Library" value="Andersen Library"/>
					<Picker.Item label="Blegen Hall" value="Blegen Hall"/>
					<Picker.Item label="Carlson School of Management" value="Carlson School of Management"/>
					<Picker.Item label="Ferguson Hall" value="Ferguson Hall"/>
					<Picker.Item label="Hanson Hall" value="Hanson Hall"/>
					<Picker.Item label="Heller Hall" value="Heller Hall"/>
					<Picker.Item label="HHH Center" value="HHH Center"/>
					<Picker.Item label="Mondale Hall" value="Mondale Hall"/>
					<Picker.Item label="Rarig Center" value="Rarig Center"/>
					<Picker.Item label="Social Sciences" value="Social Sciences"/>
					<Picker.Item label="Ted Mann Concert Hall" value="Ted Mann Concert Hall"/>
					<Picker.Item label="Willey Hall" value="Willey Hall"/>
					<Picker.Item label="Wilson Library" value="Wilson Library"/>
				</Picker>
		} else if (this.campus == "Saint Paul")
		{
			campus = <Picker style={styles.dropdownLg}
					startBuilding={this.state.PickerSelectedVal}
					onValueChange={(itemValue, itemPosition) => this.setState({PickerSelectedVal: itemValue})}>\
					<Picker.Item label="Alderman Hall" value="Alderman Hall"/>
					<Picker.Item label="Animal Science and Veterinary Medicine" value="Animal Science and Veterinary Medicine"/>
					<Picker.Item label="Bailey Hall" value="Bailey Hall"/>
					<Picker.Item label="Biological Science Center" value="Biological Science Center"/>
					<Picker.Item label="Borlaug Hall" value="Borlaug Hall"/>
					<Picker.Item label="Christensen Lab" value="Christensen Lab"/>
					<Picker.Item label="Coffey Hall" value="Coffey Hall"/>
					<Picker.Item label="Continuing Education and Conference Center" value="Continuing Education and Conference Center"/>
					<Picker.Item label="Dining Center" value="Dining Center"/>
					<Picker.Item label="Ecology" value="Ecology"/>
					<Picker.Item label="Gortner Lab" value="Gortner Lab"/>
					<Picker.Item label="Green Hall" value="Green Hall"/>
					<Picker.Item label="Hayes Hall" value="Hayes Hall"/>
					<Picker.Item label="Hodson Hall" value="Hodson Hall"/>
					<Picker.Item label="Kaufert Lab" value="Kaufert Lab"/>
					<Picker.Item label="Learning and Environmental Science" value="Learning and Environmental Science"/>
					<Picker.Item label="Lewis Hospital for Companion Animals" value="Lewis Hospital for Companion Animals"/>
					<Picker.Item label="Magrath Library" value="Magrath Library"/>
					<Picker.Item label="McNeal Hall" value="McNeal Hall"/>
					<Picker.Item label="North Central Forest Exp. Sta." value="North Central Forest Exp. Sta."/>
					<Picker.Item label="Peters Hall" value="Peters Hall"/>
					<Picker.Item label="Ruttan Hall" value="Ruttan Hall"/>
					<Picker.Item label="Skok Hall" value="Skok Hall"/>
					<Picker.Item label="Snyder Hall" value="Snyder Hall"/>
					<Picker.Item label="Soil Science" value="Soil Science"/>
					<Picker.Item label="St. Paul Student Center" value="St. Paul Student Center"/>
					<Picker.Item label="Stakman Hall" value="Stakman Hall"/>
					<Picker.Item label="Veterinary Diagnosis Lab" value="Veterinary Diagnosis Lab"/>
					<Picker.Item label="Veterinary Medical Center South" value="Veterinary Medical Center South"/>
					<Picker.Item label="Veterinary Science" value="Veterinary Science"/>
				</Picker>
		}
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
				this.whatCampus(this.props.state.campusInput)
				<Text style={styles.subHeading}> Ending Building </Text>
				this.whatCampus(this.props.state.campusInput)

				<Button title="Submit" style={styles.button} onPress={()=>this.routeSubmit(this.startBuilding,this.endBuilding)}/>
			</View>
		);
	}
}
