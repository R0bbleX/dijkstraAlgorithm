var cy = cytoscape({

  container: document.getElementById('dijsktraGraph'),
    
    style:[ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': '#102CB0',
        'label': 'data(id)'
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': '#000000',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle'
      }
    }
  ]
    
});

var eles = cy.add([
    
    { group: "nodes", data: { id: "a", weight: 5}, position: { x: 100, y: 350 } },
    { group: "nodes", data: { id: "b" }, position: { x: 400, y: 100 } },
    { group: "nodes", data: { id: "c" }, position: { x: 400, y: 600 } },
    { group: "nodes", data: { id: "d" }, position: { x: 600, y: 350 } },
    { group: "nodes", data: { id: "e" }, position: { x: 800, y: 600 } },
    { group: "nodes", data: { id: "f" }, position: { x: 800, y: 100 } },
    { group: "nodes", data: { id: "g" }, position: { x: 1100, y: 350 } },
    { group: "edges", data: { id: "ab", source: "a", target: "b" } },
    { group: "edges", data: { id: "ad", source: "a", target: "d" } },
    { group: "edges", data: { id: "ac", source: "a", target: "c" } },
    { group: "edges", data: { id: "bf", source: "b", target: "f" } },
    { group: "edges", data: { id: "bd", source: "b", target: "d" } },
    { group: "edges", data: { id: "cd", source: "c", target: "d" } },
    { group: "edges", data: { id: "ce", source: "c", target: "e" } },
    { group: "edges", data: { id: "df", source: "d", target: "f" } },
    { group: "edges", data: { id: "dg", source: "d", target: "g" } },
    { group: "edges", data: { id: "de", source: "d", target: "e" } },
    { group: "edges", data: { id: "eg", source: "e", target: "g" } },
    { group: "edges", data: { id: "fg", source: "f", target: "g" } }],
    );

var weightAB = document.getElementById("inputAB").value;
var weightAD = document.getElementById("inputAD");
var weightAC = document.getElementById("inputAC");
var weightBF = document.getElementById("inputBF");
var weightBD = document.getElementById("inputBD");
var weightCD = document.getElementById("inputCD");
var weightCE = document.getElementById("inputCE");
var weightDF = document.getElementById("inputDF");
var weightDG = document.getElementById("inputDG");
var weightDE = document.getElementById("inputDE");
var weightEG = document.getElementById("inputEG");
var weightFG = document.getElementById("inputFG");

var networkWeights = [
    []
];

function fillNetworkWeights (){
    networkWeights.push(parseFloat(weightAB));
    console.log(networkWeights);
    console.log(typeof parseFloat(weightAB));
    
};

document.getElementById("submitWeights").onclick = function () {
        fillNetworkWeights();
};