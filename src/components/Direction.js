import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Image } from 'react-native';

export default class Direction extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoading: true };
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
		return (
			<View>
				<Text style={styles.title}>Getting from {this.state.data.origin} to {this.state.data.destination}</Text>			
				<FlatList
					data={this.state.data.instructions}
					renderItem={({item, index}) => <Text style={styles.item}>{index+1}. {item}</Text>}
				/>
				<FlatList
					data={this.state.data.images}
					renderItem={({item}) => 
						<View>
							<Image
								style={styles.image}
								source={item.src}
							/>
							<Text style={styles.item}>{item.desc}</Text>
						</View>
					}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	title: {
    		margin: 24,
    		fontSize: 22,
    		fontWeight: 'bold',
  	},
	item: {
		padding: 10,
		fontSize: 14,
	},
	image: {
		resizeMode: "contain",
		padding: 15,
	}
});
