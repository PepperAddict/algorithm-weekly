const hash = function (key, size) {
    let hashedKey = 0;

    for (let i=0; i< key.length; i++) {
        hashedKey += key.charCodeAt(i)
    }
    return hashedKey % size

}

const HashTable = function() {
    this.size = 20
    this.buckets = Array(this.size)

    for (let x = 0; x < this.buckets.length; x++) {
        this.buckets[x] = new Map()
    }
}

HashTable.prototype.insert = function(key, value) {
    let index = hash(key, this.size)
    this.buckets[index].set(key, value)

}
HashTable.prototype.remove = function(key) {
    let index = hash(key, this.size)
    let deleted = this.buckets[index].get(key)
    this.buckets[index].delete(key)
    return deleted

}

HashTable.prototype.search = function() {
    let index = hash(key, this.size)
    return this.buckets[index].get(key)

}

let hashy = new HashTable()
hashy.insert('hello', 'world')
hashy.insert('love', 'cheese')
console.log(hashy)