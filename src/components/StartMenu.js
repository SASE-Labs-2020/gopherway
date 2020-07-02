import React, { Component } from 'react';
import {ActivityIndicator, Image, Button, Text, View, FlatList, Alert} from 'react-native';
import styles from '../style';
import colors from '../style';

export default class StartMenu extends Component {
	constructor(props){
		super(props);
		this.state = {isLoading: true, scrollable: false };//Initial state
	}

  	uncodedPress(){
		console.log("This capability is not yet available");
	}
	

	render(){
		if (this.state.isLoading)	{
			return(
				<View style={{flex: 1, padding: 20}}>
					<ActivityIndicator/>
				</View>
			);
		}

		//Ones in <> are js, types of components
		return(
			<View>
				<Text style={styles.heading}>Which is your campus?</Text>
				<FlatList>
					<Image
						style={styles.image}
						source={{uri: 'https://sase-labs-2020.github.io/assets/images/coffman_yudof_1.png',}}//westBank.png
					/>
					<Button style={styles.button} title = "West Bank" onPress={()=>this.uncodedPress()}/>
					<Image
						style={styles.image}
						source={{uri: 'https://sase-labs-2020.github.io/assets/images/coffman_yudof_1.png',}}//eastBank.png
					/>
					<Button style={styles.button} title = "East Bank" onPress={()=>this.uncodedPress()}/>
					<Image
						style={styles.image}
						source={{uri: 'https://sase-labs-2020.github.io/assets/images/coffman_yudof_1.png',}}//sPCampus.png
					/>
					<Button style={styles.button} title = "Saint Paul" onPress={()=>this.uncodedPress()}/>
				</FlatList>
			</View>
		);
	}
}