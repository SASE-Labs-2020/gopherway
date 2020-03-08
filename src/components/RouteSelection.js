import React, { Component } from 'react';
import {ActivityIndicator, FlatList, Image, Picker, ScrollView, Text, View, Button} from 'react-native';
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

	renderPicker(chooserType){
		if (chooserType == "Building"){
			<Picker
				enabled: true
				accessibilityRole: "combobox"
				selectedValue = {this.state.building}
				style ={{padding: 10 , fontSize: 18, fontFamily:'open-sans', backgroundColor: colors.gold, color: colors.maroon, alignItems: 'left', height: 50, width: 100}}
				onValueChange{(/*???*/,/*???*/) =>/*List expands*/this.setState({/*???*/: /*???*/)}
			>
			</Picker>
		} else if(chooserType == "Floor") {
			<Picker
				enabled: true
				accessibilityRole: "combobox"
				selectedValue = {this.state.Flr}
				style ={{padding: 10 , fontSize: 16, fontFamily:'open-sans', backgroundColor: colors.gold, color: colors.maroon, alignItems: 'left', height: 50, width: 75}}
				onValueChange{(/*???*/, /*???*/) =>/*List expands*/this.setState({/*???*/: /*???*/)}>
			</Picker>	
				}
		}
			
	render() {
		if (this.state.isLoading) {
		return (
			<View>
				<Text style={styles.heading}>Pick Your Route</Text>			
				<Text style={color.colors.gold, fontSize: 16, fontFamily: 'open-sans'}> Starting Point </Text>
				this.renderPicker("Building");
				this.renderPicker("Floor");
				<Text style={color.colors.gold, fontSize: 16, fontFamily: 'open-sans'}> Ending Point </Text>
				this.renderPicker("Building");
				this.renderPicker("Floor");
				<Button style = {styles.image} onClick={()=>/*Submits data*/}>

				<Button/>
			</View>
		);
		}
	}
/*What's the difference between render and return*/
/*What does "View" encompass? If it's the whole screen how do I set the background color*/
/*How will the top and bottom that are on multiple menus be implemented*/
/*I don't understand onValueChange */
/*Where does the list the Picker has come from? How do I assign it?*/
/*Difference between =,:, and is there even == */
/*How do I do a string as an input for a constructor?*/