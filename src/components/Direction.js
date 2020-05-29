import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, SafeAreaView, ScrollView, StyleSheet, Image} from 'react-native';
import styles from '../style';

export default class Direction extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoading: true, scrollable: false };
	}

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
	}

	render() {
		if (this.state.isLoading) {
			return (
				<View style={{flex: 1, padding: 20}}>
					<ActivityIndicator/>
				</View>
			);
		}
		const new_data = this.state.data.info;
		return (
			<ScrollView>
				<Text style={styles.heading}>Getting from {this.state.data.origin} to {this.state.data.destination}</Text>			
				<FlatList
					scrollEnabled={this.state.scrollable}
					data={new_data}
					renderItem={({item}) => 
						<SafeAreaView style={styles.container}>
							<Text>{item.instr}</Text>
							<Image style={item.src ? styles.image : null} source={item.src}/>
							<Text>{item.desc}</Text>
				
						</SafeAreaView>
					}
					keyExtractor={(item,index) => index.toString()}
				/>
			</ScrollView>
		);
	}
}
