// Utilities

import AsyncStorage from '@react-native-community/async-storage';

export default class Utilities {

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


    pullGraph() {
        const stored = this.get('graph');

        fetch('https://github.com/SASE-Labs-2020/SASE-Labs-2020.github.io/blob/master/assets/graph.json')
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

    getFile(start, end)
    {
        fetch('https://github.com/SASE-Labs-2020/SASE-Labs-2020.github.io/blob/master/assets/names.json')
            .then(names => names.json())
            .then(data => {
                file = data[start] + "_" + data[end];
                fetch('https://github.com/SASE-Labs-2020/SASE-Labs-2020.github.io/blob/master/assets/directions/'+ file + '.json')
                    .then(file1 => file1.json())
                    .then(data1 => {
                        return data1;
                    })
                    .catch(error => console.log(error)); 
            })
            .catch(error => console.log(error));  
    }
    
}



