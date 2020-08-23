import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Direction from './src/components/Direction';
import RouteSelection from './src/components/RouteSelection';
import GraphEdge from './src/components/GraphEdge';

const Tab = createMaterialBottomTabNavigator();

export default class App extends Component {
    render(){
        console.disableYellowBox = true;
        return (
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="Start"
                    activeColor="white"
                    style={{ backgroundColor: 'blue' }}
                >

                    <Tab.Screen
                        name="Route"
                        component={RouteSelection}
                        options={{
                            tabBarLabel: 'Route',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="directions" color={color} size={26} />
                            ),
                        }}
                    />

                    <Tab.Screen
                        name="Direction"
                        component={Direction}
                        initialParams={{buildings: null}}
                        options={{
                            tabBarLabel: 'Directions',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="format-list-numbered" color={color} size={26} />
                            ),
                        }}
                    />

                    <Tab.Screen
                        name="Graph"
                        component={GraphEdge}
                        initialParams={{filenames: null}}
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
    }
}