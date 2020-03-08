import React, { Component } from 'react';
import {ActivityIndicator, Image, Button, Text, View, FlatList, Alert} from 'react-native';
import styles from '../style';
import colors from '../style';

export default class StartMenu extends Component 
{
	constructor(props) 
	{
		super(props);
		this.state = {isLoading: true, scrollable: false };//Initial state
	}//Called in App.js

	componentDidMount() 
	{
		return fetch(this.props.uri)
			.then(response => response.json())
			.then(responseJson => 
			{
				this.setState
				({
					isLoading: false,
					data: responseJson,
				})
			})
			.catch(error => console.error(error));
	}//Need if taking data from json (api, data storage on the server), like images that aren't the logo, stuff that changes

	render()
	{
		if (this.state.isLoading)
		{
			return
			(
				<View style={{flex: 1, padding: 20}}>
					<ActivityIndicator/>
				</View>
			);
		}
		
		westBankPress(){
			Alert.alert('This would direct you to West Bank, but the capability is not yet available');
		}
		
		eastBankPress(){
			Alert.alert('Sorry, this has not been coded yet');
		}

		sPPress(){
			Alert.alert('This would direct you to the Saint Paul Campus, but the capability is not yet available');
		}

		//Ones in <> are js, types of components
		return
		(
			<View>
				<Text style={styles.heading}>Which is your campus?</Text>
				<FlatList
					<Image
						style={styles.image}
						source={westBank.png}
					/>
					<Button style={styles.button} title = "West Bank" onPress={()=>this.westBankPress}/>
					<Image
						style={styles.image}
						source={eastBank.src}
					/>
					<Button style={styles.button} title = "East Bank" onPress={()=>this.eastBankPress/>
					<Image
						style={styles.image}
						source={sPCampus.src}
					/>
					<Button style={styles.button} title = "Saint Paul" onPress={()=>this.sPPress/>
				/>
			<View/>
		);
	}
}