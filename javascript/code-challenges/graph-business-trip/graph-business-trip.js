"use strict";
class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight = 0) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }

    addDirectedEdge(start, end, weight = 0) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            console.log("Vertex dose not exist or invalid vertex");
        }
        const list = this.adjacencyList.get(start);
        list.push(new Edge(end, weight));
    }

    display() {
        for (const [vertex, edge] of this.adjacencyList.entries()) {
            console.log("vertex = ", vertex, "his neighbors: ", edge);
        }
    }

    getNeighbors(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            console.log("Vertex dose not exist or invalid vertex");
            return;
        }
        return this.adjacencyList.get(vertex);
    }

    getNode() {
        try {
            let collectionOfNodes = [];
            for (const [vertex, edge] in this.adjacencyList.entries()) {
                collectionOfNodes.push(vertex);
            }
            return collectionOfNodes;
        } catch (error) {
            console.log(error.message);
        }
    }

    size() {
        try {
            let size = 0;
            for (const vertex of this.adjacencyList.keys()) {
                size++;
            }
            return size;
        } catch (error) {
            console.log(error.message);
        }
    }



    businessTrip(graph, arr) {

        console.log(graph.adjacencyList.has(arr[0]));
        let totalcost = 0;
        if (graph.adjacencyList.has(arr[0])) {
            // console.log(list);
            for (let i = 0; i < arr.length - 1; i++) {
                let list = graph.adjacencyList.get(arr[i]);
                let flag = false;
                for (const { vertex, weight } of list) {
                    console.log(weight);
                    console.log(vertex);
                    if (vertex == arr[i + 1]) {

                        flag = true;
                        totalcost += weight;
                        break;
                    }
                }
                if (!flag) {
                    return [false, 0];
                }
            }
        } else {
            return [false, 0];
        }
        return [true, totalcost];
    }
}
const myGraph = new Graph();




console.log(myGraph.businessTrip(myGraph, ['amman', 'irbid', 'mafraq', 'zarqa', 'aqaba', 'al-jafr']));



module.exports = { Vertex, Edge, Graph }









