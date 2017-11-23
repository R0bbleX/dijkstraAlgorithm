var noArc = Infinity;
var networkWeights = [
    [noArc,4,3,7,noArc,noArc,noArc],
    [4,noArc,noArc,1,noArc,4,noArc],
    [3,noArc,noArc,3,5,noArc,noArc],
    [7,1,3,noArc,2,2,7],
    [noArc,noArc,5,2,noArc,noArc,2],
    [noArc,4,noArc,2,noArc,noArc,4],
    [noArc,noArc,noArc,7,2,4,noArc]
];

var route = null; // array of node numbers
var shortest = 0;
var shortestRoute = null;

function dijsktraSPAlgorithm() {
 
  route = null; // route empty at start
  shortest = Infinity; // set artificially high to start
 
  findRoute(0,[],0);
 
  console.log(shortest);
  console.log(route);
}
 
function findRoute(currentNode, visited, distanceSoFar) {
 
  visited.push(currentNode);
 
  var row = networkWeights[currentNode];
  var distance = distanceSoFar;
 
  for (var targetNode = 0; targetNode < row.length; targetNode++) {
 
    if (visited.indexOf(targetNode) === -1) {
 
      var weight = row[targetNode];
 
      if (weight !== Infinity) {
 
        if (targetNode < (row.length - 1)) {
 
         // NOT the last node
          distance = findRoute(targetNode,visited,distanceSoFar+weight);
 
        } else {
 
          // This IS the last node
 
          distance = distanceSoFar + weight;
 
          if (distance < shortest) { //Is new distance shorter
            route = visited.slice(0);
            route.push(targetNode); // This just copies the visited nodes and adds the last one
            shortest = distance;
          }
        }
      }
    }
  }
 
  visited.pop();
 
}

document.getElementById("solveBtn").onclick = function () {
    dijsktraSPAlgorithm();
};
