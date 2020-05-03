import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, ScrollView, StyleSheet, Image} from 'react-native';
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
		
		return (
			<View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={()=>{alert("building info")}}
            title="Keller"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Akerman"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={()=>{alert("building info")}}
            title="Amundson"
          />
          <Button
            onPress={()=>{alert("building info")}}
            title="Boynton"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Children's Rehab"
          />
      </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Civil Engineering"
          />
	</View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Coffman"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Diehl Hall"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Folwell "
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Ford"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Graduate Hotel"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="HSEC"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Jackson"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Johnston"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Keller"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Kolthoff"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Lind Hall"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Mayo Auditorium"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Mayo Building"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="MCB"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="McNamara Alumni Center"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="MechE"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Moss Tower"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Morrill"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Murphy"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Nils-Hasselmo"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Nolte Center"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Nolte Ctr. Garage"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Northrop"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Northrop Garage"
          />
		    </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="P-W Building"
          />
		        </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Rapson "
          />
		        </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Shepherd labs"
          />
		        </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Smith"
          />
		        </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Tate Hall"
          />
		        </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Transportation & safety building"
          />
		        </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="UMN Medical Center"
          />
		        </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="University ave ramp"
          />
		        </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Variety Club Res Ctr"
          />
		        </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Vincent Hall"
          />
		        </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Walter Library"
          />
		        </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Wash-Ave Parking Ramp"
          />
		        </View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Weaver-Densford"
          /></View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Williamson"
          /></View>
        <View style={styles.buttonContainer}>
          <Button
           onPress={()=>{alert("building info")}}
            title="Yudof Hall"
          />
		    
		);
	}
}
