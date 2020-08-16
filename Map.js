import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import Direction from './src/components/Direction';
import styles from './src/style';
import RouteSelection from './src/components/RouteSelection';

const url = 'https://sase-labs-2020.github.io/assets/directions/coffman_yudof.json'
import MapView, {Marker} from 'react-native-maps';

export default class BuildingMarker extends Component {
  
  constructor(props){
          super(props);
          this.state = {isLoading: true, scrollable: false , data:[]};
     }
     
     async getData(url) {
    const response = await fetch(url);
    return response.json()
  }

	async componentDidMount(){
    var urls;
		if(this.props.filenames==null){
			const graph = await this.getData('https://SASE-Labs-2020.github.io/assets/graph.json');
			const names = await this.getData('https://SASE-Labs-2020.github.io/assets/names.json');
      //console.log(JSON.stringify(graph) + JSON.stringify(names));
	  const first = Object.entries(graph).map(([start, ends]) => {
        const n_ends = Object.keys(ends).length;
					return [Array(n_ends).fill(start), Object.keys(ends)];
			});
			const zip= rows=>rows[0].map((_,index)=>rows.map(row=>row[index]));
			const second = first.map(([starts, ends]) => zip([starts, ends]));
      console.log(second);
			const third = second.map(
        (paths) => paths.map(
          (path) => {
            const new_path = [names[path[0]], names[path[1]]];
            return 'https://sase-labs-2020.github.io/assets/directions/' + new_path.join('_') + '.json';
          }
        )
      );
			urls = [].concat.apply([], third);
			
		} else{
			var filenames= this.props.filenames;
			urls = filenames.map(filename => 'https://sase-labs-2020.github.io/assets/directions/'+ filename + '.json');
		}
			urls = urls.forEach(url =>{return fetch(url, {
					method: "GET",
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					},
				})
				.then(response => response.json())
					.then((responseData) => {
						console.log(responseData)
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
  
  render()
	{
		if (this.state.isLoading)
		{
			return(
				<View style={{flex: 1, padding: 20}}>
					<ActivityIndicator/>
				</View>
			);
		}
		
		return(
			<MapView region={this.state.Region}  style={styles.mapStyle}>
				{this.state.data.map(json => <Polyline coordinates={json.coordinates}/>)}
			</MapView>
		);
	}
}
