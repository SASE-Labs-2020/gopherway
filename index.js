/*import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('gopherway', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('gopherway', { rootTag });
}*/

import {Navigation} from 'react-native-navigation';
import RouteSelection from './src/components/RouteSelection.js';
import Direction from './src/components/Direction.js';
import GraphEdge from './src/components/GraphEdge.js';

Navigation.registerComponent('RouteSelection', () => RouteSelection);
Navigation.registerComponent('Direction', () => Direction);
Navigation.registerComponent('GraphEdge', () => GraphEdge);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            bottomTabs: {
                id: 'NAV_BAR',
                children: [
                    {
                        stack: {
                            id: 'ROUTE_TAB',
                            children: [
                                {
                                    component: {
                                        id: 'ROUTE_SELECTION',
                                        name: 'RouteSelection'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        stack: {
                            id: 'DIRECTION_TAB',
                            children: [
                                {
                                    component: {
                                        id: 'DIRECTION',
                                        name: 'Direction',
                                        passProps: {
                                            buildings: null
                                        }
                                    }
                                }
                            ]
                        }
                    },
                    {
                        stack: {
                            id: 'GRAPH_TAB',
                            children: [
                                {
                                    component: {
                                        id: 'GRAPH_EDGE',
                                        name: 'GraphEdge',
                                        passProps: {
                                            filenames: null
                                        }
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    })
})
