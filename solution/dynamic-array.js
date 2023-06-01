class DynamicArray {

  constructor(defaultSize=4) {
    // Your code here
    this.length = 0
    this.capacity = defaultSize
    this.data = new Array(defaultSize)
  }

  read(index) {
    // Your code here
    if (index >= this.length) {
      return undefined
    }
    return this.data[index]
  }

  unshift(val) {
    // Your code here
    if (this.capacity === this.length) {
      this.capacity *= 2
      const newData = new Array(this.capacity)
      for (let i = 0; i < this.length; i++) {
        newData[i+1] = this.data[i]
        this.length++
      }
      newData[0] = val
      this.data = newData
    }

    for (let i = (this.length - 1); i >= 0; i--) {
      this.data[i+1] = this.data[i]
    }
    this.data[0] = val
    this.length++
  }
}


module.exports = DynamicArray;
