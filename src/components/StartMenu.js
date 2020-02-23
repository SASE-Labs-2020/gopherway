import React, { Component } from 'react';
import {ActivityIndicator, Image, Button, Text, View} from 'react-native';
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
				<Text style={styles.heading}>Getting from {this.state.data.origin} to {this.state.data.destination}</Text>			
				<FlatList
					scrollEnabled={this.state.scrollable}
					data={this.state.data.images}
					renderItem={({item}) => 
						<View style={styles.container}>
							<Image
								style={styles.image}
								source={item.src}
							/>
							<Text style={styles.item}>{item.desc}</Text>
						</View>
					}
				/>
				<FlatList
					scrollEnabled={this.state.scrollable}
					data={this.state.data.instructions}
					renderItem={({item, index}) => <Text style={styles.item}>{index+1}. {item}</Text>}
				/>
			</View>
		);
	}
}