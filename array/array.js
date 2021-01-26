class MyArray {

  constructor() {
    this.length = 0
    this.data = {}
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item
    this.length++
    
    return this.data
  }

  pop() {
    const deletedItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return deletedItem
  }

  quantity() {
    return this.length
  }

  delete(index) {
    const deleted = this.data[index]
    this.shiftIndex(index)
    return deleted
  }

  shift() {
    const deleted = this.data[0]
    this.shiftIndex(0)
    return deleted
  }

  unshift(item) {

    this.pushIndex(item)

    return this.data
  }

  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
  }

  pushIndex(item) {
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i]      
    }
    this.data[0] = item
    this.length++
  }
  
}

const myArr = new MyArray()
myArr.push('Juan')
myArr.push('Esteban')
myArr.push('Deossa')
myArr.push('Pertuz')
myArr.push('God')