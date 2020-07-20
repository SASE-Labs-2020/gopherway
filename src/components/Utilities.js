// Utilities
import React from 'React';
import AsyncStorage from '@react-native-community/async-storage';

export default class Utilities extends React.Component {

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


    async pullGraph() {
        const stored = this.get('graph');

        fetch('https://SASE-Labs-2020.github.io/assets/graph.json')
            .then(graph => graph.json())
            .then(data => {
                data = JSON.stringify(data);
                if (stored !== data) {
                    this.store('graph', data);
                }
            })
            .catch(error => console.log(error));
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
        const names = await fetch('https://SASE-Labs-2020.github.io/assets/names.json')
            .then(names => names.json())
            .catch(error => console.log(error));  

        var file = names[start] + "_" + names[end];
        fetch('https://SASE-Labs-2020.github.io/assets/directions/' + file + '.json')
            .then(file1 => file1.json())
            .then(data => {
                return data;
            })
            .catch(error => console.log(error)); 
    }
    
}



