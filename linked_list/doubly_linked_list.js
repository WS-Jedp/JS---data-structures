class Node {
  constructor(value, prev = null) {
    this.value = value
    this.prev = prev
    this.next = null
  }

  getNextNode(){
    return this.next
  }

  getPreviousNode(){
    return this.prev
  }

  addNextNode(node){
    return this.next = node
  }

  addPrevNode(node){
    return this.prev = node
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value, null)
    this.tail = this.head
    this.length = 1
  }

  getAll(){
    const list = [this.head]
    for (let i = 0; i < list.length; i++) {
      if(list[i].getNextNode()) list.push(list[i].getNextNode())
    }

    return list
  }

  get(index) {
    const list = this.getAll()
    if(index < list.length) {
      return list[index]
    }

    return new Error("No exists that index in the List")
  }

  insertBefore(index, value) {
    const list = this.getAll()

    if(index === 0) {
      this.prepend(value)
      return this.getAll()
    }

    for (let i = 0; i < list.length; i++) {
      if(i === index) {
        const prevNode = list[i].getPreviousNode()
        const newNode = new Node(value, prevNode)
        prevNode.addNextNode(newNode)
        newNode.addNextNode(list[i])
        list[i].addPrevNode(newNode)
        this.length++
        return this.getAll()
      }
    }

    return new Error("We can't find the index")
  }

  insertAfter(index, value) {
    const list = this.getAll()

    if(index === list.length - 1) {
      this.append(value)
      return this.getAll()
    }

    for (let i = 0; i < list.length; i++) {
      if(i === index) {
        const nextNode = list[i].getNextNode()
        const newNode = new Node(value, list[i])
        list[i].addNextNode(newNode)
        newNode.addNextNode(nextNode)
        this.length++
        return this.getAll()
      }
      
    }

    return new Error("We can't find that index")
  }

  append(value) {
    const newNode = this.tail.addNextNode(new Node(value, this.tail))
    this.tail = newNode
    this.length++
    return this.getAll()
  }

  prepend(value){
    const oldHead = this.head
    this.head = new Node(value, null)
    this.head.addNextNode(oldHead)
    oldHead.addPrevNode(this.head)
    this.length++
    return this.getAll()
  }

  getHead(){
    return this.head
  }

  delete(index){
    const list = this.getAll()

    if(index === 0) {
      this.deleteHead()
      return this.getAll()
    }
    if(index === list.length - 1) {
      this.deleteTail()
      return this.getAll()
    }

    for (let i = 0; i < list.length; i++) {
      if(index === i) {
        const deleted = list[i]
        const prevNode = list[i].getPreviousNode()
        const nextNode = list[i].getNextNode()
        prevNode.addNextNode(nextNode)
        nextNode.addPrevNode(prevNode)
        delete list[i]
        this.length--
        return deleted
      }
    }

    return new Error("We can't find the index")
  }

  deleteHead() {
    const newHead = this.head.getNextNode()
    newHead.addPrevNode(null)
    delete this.head 
    this.head = newHead
    this.length--
    return this.head
  }

  deleteAfterHead(){
    const newNextNode = this.head.getNextNode().getNextNode()
    const deleted = this.head.getNextNode()
    newNextNode.addPrevNode(this.head)
    this.head.addNextNode(newNextNode)
    delete this.head.getNextNode()
    this.length--

    return deleted
  }

  deleteBeforeTail(){
    const newPrevNode = this.tail.getPreviousNode().getPreviousNode()
    const deleted = this.tail.getPreviousNode()
    newPrevNode.addNextNode(this.tail)
    this.tail.addPrevNode(newPrevNode)
    delete this.tail.getPreviousNode()
    this.length--
    return deleted
  }

  deleteTail() {
    const deleted = this.tail
    const newTail = this.tail.getPreviousNode().addNextNode(null)
    delete this.tail
    this.tail = newTail
    this.length--
    return deleted
  }

  getTail() {
    return this.tail
  }
}

const myDoublyLinkedList = new DoublyLinkedList(1)
myDoublyLinkedList.append(2)
myDoublyLinkedList.append(3)
myDoublyLinkedList.append(4)
myDoublyLinkedList.append(5)
