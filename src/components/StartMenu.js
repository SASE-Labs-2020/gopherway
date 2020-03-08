import React, { Component } from 'react';
import {ActivityIndicator, Image, Button, Text, View, FlatList} from 'react-native';
import styles from '../style';

export default class StartMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {isLoading: true, scrollable: false };//Initial state
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

	render() {
		if (this.state.isLoading) {
			return (
				<View style={{flex: 1, padding: 20}}>
					<ActivityIndicator/>
				</View>
			);
		}
		//Ones in <> are js, types of components
		return (
			<View>
				<Text style={styles.heading}>Tap the text to choose your campus</Text>
				<FlatList
					data={this.state.data.images}
					renderItem={({westBank}) => 
					<View style={styles.container}>
						<Image
							style={styles.image}
							source={westBank.src}
						/>
						<Button style={styles.item,}>{Button={{title: West Bank,color? '#ffcc33'}</Text>
					</View>
					}
					renderItem={({eastBank}) => 
					<View style={styles.container}>
						<Image
							style={styles.image}
							source={eastBank.src}
						/>
						<Text style={styles.item}>East Bank</Text>
					</View>
					}
					renderItem={({sPCampus}) => 
					<View style={styles.container}>
						<Image
							style={styles.image}
							source={sPCampus.src}
						/>
						<Text style={styles.item}>Saint Paul</Text>
					</View>
					}
				/>
			</View>
		);
	}
}