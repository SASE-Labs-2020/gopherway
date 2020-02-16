import React from 'react';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';
import assets from '../assets/assets.js';

export default class Direction extends Component {
	render() {
		var images = assets.images;
		return (
			<View>
				<Text style={styles.title}>Getting from {this.props.origin} to {this.props.destination}</Text>			
				<FlatList
					data={this.props.directions}
					renderItem={({item, index}) => <Text style={styles.item}>{index}. {item}</Text>}
				/>
				<FlatList
					data={this.props.images}
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
