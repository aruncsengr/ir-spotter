const PATTERN = /(\w+:)/g;

module.exports = class Jsonify {

  constructor(givenString) {
    this.givenString = givenString
  }

  targetKeys() {
    return this.givenString.match(PATTERN)
  }

  filterKeys() {
    let keys = {}

    this.targetKeys().forEach((key) => 
      (keys.hasOwnProperty(key) || key.match(/(\d+:)/)) ? null : keys[key] = true
    )
    return keys
  }

  convertToValidKeys() {
    let target = this.givenString
    const filterkeys = this.filterKeys()
    for(const[key, value] of Object.entries(filterkeys)){
      let pattern = new RegExp(key, 'g')
      target = target.replace(pattern, `"${key}": `) 
    }
    
    return target
  }

  toJson() {
    const validJsonString = this.convertToValidKeys();
    console.log(validJsonString)
    data = JSON.parse(validJsonString);
    

    return data
  }

}
