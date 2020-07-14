import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function StartScreen() {
    return (
        <View>
            <Text>Start</Text>
        </View>
    );
}

function RouteScreen() {
    return (
        <View>
            <Text>Route</Text>
        </View>
    );
}

function DirectionScreen() {
    return (
        <View>
            <Text>Direction</Text>
        </View>
    );
}

function GraphScreen() {
    return (
        <View>
            <Text>Graph</Text>
        </View>
    );
}

const Tab = createMaterialBottomTabNavigator();

export default function NavigationBar() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Start"
                activeColor="#0693e3"
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
}