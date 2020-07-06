// Utilities
const AsyncStorage = require('@react-native-community/async-storage');
const fetch = require('node-fetch');

class Utilities {

    constructor() {
        
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


    pullGraph() 
    {   
        const stored = this.get('graph');
        
        fetch('https://github.com/SASE-Labs-2020/SASE-Labs-2020.github.io/blob/master/assets/graph.json')
            .then(graph => graph.json())
            .then(graphJson => {
                graphJson = JSON.stringify(graph.JSON);
                if (stored !== graphJson) {
                    this.store('graph', graphJson);
                }
                return true;
            })
            .catch(error => console.log(error));  
        return false;
    }

    getGraph() 
    {
        const graph = this.get('graph');
        return (graph != null ? JSON.parse(graph): null);
    }

    getPath()
    {
        const Graph = require('node-dijkstra')
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
    
}

module.exports = Utilities;

