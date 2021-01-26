class HashTable {
  /**
   * The quantity of space that will have our hash table
   * @param {Number} size 
   */
  constructor(size) {
    this.data = new Array(size)
  }


  /**
   * The key that we'll use to hash the data and create the reference
   * @param {String} key 
   * 
   * @returns {Number} hash
   */
  hashMethod(key){
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }

    return hash
  }

  /**
   * 
   * @param {String} key
   * @param {*} value 
   * 
   * @returns {Array}
   */
  set(key, value) {
    const address = this.hashMethod(key)
    if(!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key, value])
    return this.data
  }

  /**
   * 
   * The key to be hashed to find the address of the Bucket and return the corresponding Data
   * @param {String} key 
   * 
   * @returns {* | undefined} value | undefined
   */
  get(key) {
    const address = this.hashMethod(key)
    const currentBucket = this.data[address]
    if(currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }

    return undefined
  }


  /**
   * 
   * Will return the an Array with Arrays with his key-value data
   * @returns {Array | Null}
   */
  getAll() {
    const data = []
    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i]) {
        for (let f = 0; f < this.data[i].length; f++) {
          data.push(this.data[i][f])
        }
      }      
    }

    if(data.length === 0) {
      return null;
    }

    return data
  }


  /**
   * 
   * The Key that will be hashed to find the reference of the Bucket to delete
   * @param {String} key 
   * 
   * The method will return the Array key-value that was deleted if exists, if don't will return undefined
   * @returns {Array | undefined}
   */
  delete(key) {
    const address = this.hashMethod(key)
    const currentBucket = this.data[address]
    if(currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key){
          const deleted = currentBucket[i]
          currentBucket.splice(i, 1)
          return deleted
        }
      }
    }

    return undefined
  }
}

const myHashTable = new HashTable(50)
myHashTable.set('Juanes', 'Tech')
myHashTable.set('Beatriz', 'Art')
myHashTable.set('Hugo', 'Sci')
myHashTable.set('Death', true)
