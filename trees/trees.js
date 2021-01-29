class Node {
  constructor(value) {
    this.value = value
    this.greater = null
    this.minor = null
  }
}

class BinarySearchTree {

  /**
   * @param {Number} root - Will be the Root number of this binary search tree
   */
  constructor(root) {
    this.root = new Node(root)
  }

  /**
   * 
   * @param {Number} value Add a new value into the tree. 
   */
  insert(value) {
    const newNode = new Node(value)
    let currentNode = this.root

    while(currentNode){

      if(value > currentNode.value) {
        if(!currentNode.greater) {
          currentNode.greater = newNode
          return this
        } else {
          currentNode = currentNode.greater
        }
      } else {
        if(!currentNode.minor) {
          currentNode.minor = newNode
          return this
        } else {
          currentNode = currentNode.minor
        }
      }

    }
  }

  /**
   * 
   * @param {Number} value Will search for the number specified
   * 
   * @returns {Number || undefined} If don't find anything will return an Undefined.
   */
  search(value){
    let currentNode = this.root
    while(currentNode) {
      if(value > currentNode.value) {
        if(currentNode.greater.value === value) {
          return currentNode.greater
        } else {
          if(!currentNode.greater) {
            return undefined
          }
          currentNode = currentNode.greater
        }
      } else {
        if(currentNode.minor.value === value) {
          return currentNode.minor
        } else {
          if(!currentNode.minor) {
            return undefined
          }
          currentNode = currentNode.minor
        }
      }
    }
  }
}

const myBinarySearchTree = new BinarySearchTree(10)
