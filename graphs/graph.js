class Node {
  constructor(value, connections = []) {
    this.value = value
    this.connectedVertex = connections
  }

  addConnection(node) {

    if(this.connectedVertex.some(el => el === node)) return new Error("The Node already exist")

    const oldVertex = this.connectedVertex
    this.connectedVertex = [...oldVertex, node]
    return this.connectedVertex
  }

  getConnections() {
    return this.connectedVertex
  }
}

class NonManagedGraph {
  constructor(){
    this.nodes = []
    this.list = {}
  }

  getGraph() {
    let currGrap = {}
    this.nodes.forEach((node, index) => {
      currGrap[index] = node.getConnections()
    });
    return currGrap
  }

  getNode(index){
    if(!this.nodes[index]) return undefined

    return this.nodes[index]
  }

  addNode(value){
    const newNode = new Node(value)
    this.nodes.push(newNode)
    this.list[this.nodes.length] = []

    return this.list
  }

  insertInto(value, index) {
    const newNode = new Node(value)
    
    if(this.nodes.length === 0 || !this.nodes) {
      this.nodes.push(newNode)
      this.list = {
        0: newNode.getConnections()
      }
      return this.list
    }

    if(!this.nodes[index]) return undefined
    else {
      this.nodes.push(newNode)
      this.nodes[index].addConnection(newNode)
      newNode.addConnection(this.nodes[index])
      
      this.list = {
        [index]: this.nodes[index].getConnections()
      }

      return this.list
    }
  }

  connectInto(who, to) {
    if(!this.nodes[who] || !this.nodes[to]) return undefined

    this.nodes[to].addConnection(this.nodes[who])
    this.nodes[who].addConnection(this.nodes[to])

    return this.getGraph()
  }
}

const myGraph = new NonManagedGraph()