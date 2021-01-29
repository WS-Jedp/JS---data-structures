class Node {
  constructor(value, next = null, previous = null) {
    this.value = value
    this.next = next
    this.previous = previous
  }

  insertNext(node) {
    this.next = node
    return this.next
  }

  insertPrevious(node) {
    this.previous = node
    return this.previous
  }
}

class NonManagedGraph {

  constructor() {
    this.vertex = []
    this.graph = {}
  }

  getOne(index) {
    return this.vertex[index]
  }

  getNodes() {
    return this.vertex
  }

  getGraph() {
    return this.graph
  }

  insertNode(value, index) {
    const newNode = new Node(value)
    this.vertex.push(newNode)

    if(this.vertex.length === 0) {
      this.vertex.push(newNode)
      this.graph = {
        0: []
      }
      return this.graph
    }

    if(!this.vertex[index]) {
      return undefined
    } else {
      this.graph[index] = [...this.graph[index], newNode]
      return this.graph
    }

  }

}

const myGraph = new NonManagedGraph()