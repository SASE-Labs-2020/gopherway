// Utilities
import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export default class Utilities extends Component {

    constructor() {
        super(null);

        this.get = function(key) { //returns string
            try {
                const value = AsyncStorage.getItem(key);
                return value;
            } catch (e) {
                console.log(e);
            }
        }

        this.store = function(key, value) { //takes in string
            try {
                AsyncStorage.setItem(key, value);
            } catch (e) {
                console.log(e);
            }
        }

        this.store('graph', null);
    }

    render() { }

    async getData(url) {
        const response = await fetch(url);
        return response.json();
    }

    async pullGraph() {
        const stored = this.get('graph');
        const data = await this.getData('https://SASE-Labs-2020.github.io/assets/graph.json');

        data = JSON.stringify(data);
        if (stored !== data) {
            this.store('graph', data);
        }           
    }

    getGraph() 
    {
        const graph = this.get('graph');
        return (graph != null ? JSON.parse(graph): null);
    }

    getPath()
    {
        const Graph = require('node-dijkstra');
        const route = new Graph(this.getGraph());
       
        let path = route.path(
            this.get('start'),
            this.get('end')
        );
        return path;
    }

    setEndpoints(start, end)
    {
        this.store('start', start);
        this.store('end', end);
    }

    async getFile(start, end)
    {
        const names = await this.getData('https://SASE-Labs-2020.github.io/assets/names.json');
         
        var file = names[start] + "_" + names[end];

        const data = await this.getData('https://SASE-Labs-2020.github.io/assets/directions/' + file + '.json');
        return data;     
    }
    
}



