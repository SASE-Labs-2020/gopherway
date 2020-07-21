<<<<<<< HEAD
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
=======
import React, { Component } from 'react';
import { ActivityIndicator, View} from 'react-native';
import Direction from './src/components/Direction';
>>>>>>> origin
import styles from './src/style';
import StartMenu from './src/components/StartMenu';
import Direction from './src/components/Direction';
import RouteSelection from './src/components/RouteSelection';
import GraphEdge from './src/components/GraphEdge';

<<<<<<< HEAD
function StartScreen() {
    return (
        <View style={styles.container}>
            <StartMenu/>
        </View>
    );
}

function RouteScreen() {
    return (
        <View style={styles.container}>
				<RouteSelection/>
		</View>
    );
}

function DirectionScreen() {
    return (
        <View style={styles.container}>
            <Direction buildings={['tNs', 'graduate', 'mcNamara', 'universityAveRamp']}/>
        </View>
    );
}

function GraphScreen() {
    return (
        <View style={styles.container}>
				<GraphEdge filenames = {['tNs_graduate', 'graduate_mcNamara', 'mcNamara_universityAveRamp']}/>
		</View>
    );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Start"
                activeColor="white"
                style={{ backgroundColor: 'blue' }}
            >
                <Tab.Screen
                    name="Start"
                    component={StartScreen}
                    options={{
                        tabBarLabel: 'Start',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Route"
                    component={RouteScreen}
                    options={{
                        tabBarLabel: 'Route',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="directions" color={color} size={26} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Direction"
                    component={DirectionScreen}
                    options={{
                        tabBarLabel: 'Directions',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="format-list-numbered" color={color} size={26} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Graph"
                    component={GraphScreen}
                    options={{
                        tabBarLabel: 'Map',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="map" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
=======
export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
        <Direction buildings={['tNs', 'graduate', 'mcNamara', 'universityAveRamp']}/>
      </View>
		);
	}
>>>>>>> origin
}


