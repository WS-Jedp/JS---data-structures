class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }

  addReference(next) {
    this.next = next
    return this.next
  }

  getNextNode() {
    return this.next
  }

}

class MySinglyLinkedList {
  constructor(value) {
    if(value) {
      this.length = 1
    } else this.length = 0

    this.head = new Node(value)
    this.tail = this.head
  }

  getAll() {
    const list = [this.head]
    for (let i = 0; i < list.length; i++) {
      if(list[i].getNextNode()) list.push(list[i].getNextNode())
    }
    return list
  }

  prepend(value) {
    const oldHead = this.head
    this.head = new Node(value)
    this.head.addReference(oldHead)
    this.length++

    return this.head
  }

  append(value) {
    const lastNode = new Node(value)
    this.tail.addReference(lastNode)
    this.tail = lastNode
    this.length++

    return this.tail
  }

  insertNext(reference, value){
    const list = this.getAll()
    for (let i = 0; i < list.length; i++) {
      if(list[i].value === reference) {
        let newNextNode = null
        if(list[i].getNextNode()) {
          newNextNode = list[i].getNextNode()
        } else {
          this.tail = new Node(value)
          list[i].addReference(this.tail)
          this.length++
          return this.getAll()
        }
        const newNode = list[i].addReference(new Node(value))
        newNode.addReference(newNextNode)
        this.length++

        return this.getAll()
      }
    }

    return new Error("No exists the reference that you specify")
  }

  insertBefore(reference, value){
    const list = this.getAll()
    for (let i = 0; i < list.length; i++) {
      if(list[i].value === reference) {
        let newBeforeNode = null
        if(list[i-1]) {
          newBeforeNode = list[i-1]
        } else {
          this.head = new Node(value)
          this.head.addReference(list[i])
          this.length++
          return this.getAll()
        }
        const newNode = new Node(value)
        newNode.addReference(newBeforeNode.getNextNode())
        newBeforeNode.addReference(newNode)
        this.length++

        return this.getAll()
      }
    }

    return new Error("No exists the value that you specify")
  }

  getTail() {
    return this.tail
  }

  getHead() {
    return this.head
  }

  

  get(value) {
    const list = this.getAll()
    for (let i = 0; i < list.length; i++) {
      if(value === list[i].value) {
        return list[i]
      }
    }
    return null
  }

  remove(value) {
    const list = this.getAll()

    for (let i = 0; i < list.length; i++) {

      if(list[i].value === value) {
        const deleted = list[i]

        if(i === 0) {
          this.head = list[i].getNextNode()
          delete list[i]
          this.length--

          return deleted

        } else if(i === this.length - 1) {
          this.tail = list[i-1]
          delete list[i]
          this.length--

          return deleted
        }

        list[i-1].addReference(list[i].getNextNode())
        delete list[i]
        this.length--

        return deleted
      }      
    }
    return new Error("There is no such Node")
  }
}

const mySinglyLinkedList = new MySinglyLinkedList(1)