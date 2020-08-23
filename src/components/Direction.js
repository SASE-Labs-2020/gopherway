import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, SafeAreaView, ScrollView, StyleSheet, Image} from 'react-native';
import styles from '../style';

export default class Direction extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoading: true, scrollable: false, data: [], buildings: [] };
	}

	componentDidMount() {
		if(this.props.route.params.buildings==null){
			this.setState(
				(prevState) => {
					return {
						isLoading: false,
					};
				}
			);
		}else{
			this.setState({buildings: this.props.route.params.buildings});
			var paths = this.props.route.params.buildings.reduce((acc, cur, idx, src) => idx < src.length - 1 ? acc.concat([[cur, src[idx+1]]]) : acc, []);
			var urls = paths.map(path => "https://sase-labs-2020.github.io/assets/directions/" + path.join("_") + ".json");
			console.log(urls);
			urls = urls.forEach(url =>
				{return fetch(url,
						{
							method: "GET",
							headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json',
							},
						}
					).then(response => response.json())
						.then((responseData) => {
						console.log(responseData);
							this.setState(
								(prevState) => {
									return {
										data: prevState.data.concat(responseData),
										isLoading: false,
									};
								}
							);
						});
				});
		}
	}

	componentDidUpdate(){
		if(this.props.route.params.buildings!=null && JSON.stringify(this.state.buildings)!=JSON.stringify(this.props.route.params.buildings)){
			this.setState({buildings: this.props.route.params.buildings});
			var paths = this.props.route.params.buildings.reduce((acc, cur, idx, src) => idx < src.length - 1 ? acc.concat([[cur, src[idx+1]]]) : acc, []);
			var urls = paths.map(path => "https://sase-labs-2020.github.io/assets/directions/" + path.join("_") + ".json");
			console.log(urls);
			urls = urls.forEach(url =>
				{return fetch(url,
						{
							method: "GET",
							headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json',
							},
						}
					).then(response => response.json())
						.then((responseData) => {
						console.log(responseData);
							this.setState(
								(prevState) => {
									return {
										data: prevState.data.concat(responseData),
										isLoading: false,
									};
								}
							);
						});
				});
		}
	}

	render() {
		if (this.props.route.params.buildings==null){
			return (
				<Text>
					No route currently selected.
				</Text>
			)
		}
		if (this.state.isLoading) {
			return (
				<View style={{flex: 1, padding: 20}}>
					<ActivityIndicator/>
				</View>
			);
		}
		return (
			<ScrollView>
				{this.state.data.map(data => 
        <View>
				<Text style={styles.heading}>Getting from {data.origin} to {data.destination}</Text>			
				<FlatList
					scrollEnabled={this.state.scrollable}
					data={data.info}
					renderItem={({item}) => 
						<SafeAreaView style={styles.container}>
							<Text>{item.instr}</Text>
							<Image style={item.src ? styles.image : null} source={item.src}/>
							<Text>{item.desc}</Text>
						</SafeAreaView>
					}
					keyExtractor={(item,index) => index.toString()}
				/>
        </View>
        )
        }
			</ScrollView>
		);
	}
}
