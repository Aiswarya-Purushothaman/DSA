class graph{
  constructor(){
    this.adjacencylist={}
  }

  addvertex(vertex){
    if(!this.adjacencylist[vertex]){
      this.adjacencylist[vertex]=new Set()
    }
  }
 addEdge(vertex1,vertex2){
  if(!this.adjacencylist[vertex1]){
    this.addvertex(vertex1)
  }
  if(!this.adjacencylist[vertex2]){
    this.addvertex(vertex2)
  }
  this.adjacencylist[vertex1].add(vertex2)
  this.adjacencylist[vertex2].add(vertex1)
 }
 hasEdge(vertex1,vertex2){
  return(this.adjacencylist[vertex1].has(vertex2)&&this.adjacencylist[vertex2].has(vertex1))
 }

 removeEdge(vertex1,vertex2){
  this.adjacencylist(vertex1).delete(vertex2),
  this.adjacencylist(vertex1).delete(vertex2)
 }
 removeVertex(vertex){
  if(!this.adjacencylist[vertex]){
    return null
  }
  for(let adjacentVertex of this.adjacencylist[vertex]){
    this.removeEdge(vertex,adjacentVertex)
  }
  delete this.adjacencylist[vertex]
 }
 display(){
  for(let vertex in this.adjacencylist){
    console.log(vertex+"--"+[this.adjacencylist[vertex]]);
  }
 }

 dfs(startVertex) {
  const visited = new Set();
  this.dfsHelper(startVertex, visited);
}
dfsHelper(vertex, visited) {
  
  visited.add(vertex);
  console.log(vertex);
  const neighbors = this.adjacencyList[vertex];
  for (let neighbor of neighbors) {
    if (!visited.has(neighbor)) {
      this.dfsHelper(neighbor, visited);
    }
  }
}
bfs(startVertex) {
  const visited = new Set();
  const queue = [];
  visited.add(startVertex);
  queue.push(startVertex);
  while (queue.length > 0) {
    const currentVertex = queue.shift();
    console.log(currentVertex);
    const neighbors = this.adjacencyList[currentVertex] || new Set();
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor); 
      }
    }
  }
}
}

const Graph=new graph()