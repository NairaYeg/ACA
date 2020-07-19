class Dictionary {
  constructor(defaultValue) {
    this.dict = new Map();
    if (defaultValue) {
      const normalized = Object
          .entries(defaultValue)
          .map(([key, value]) => [key, new Set([value])])
          
          this.dict = new Map(normalized)
    }
  }

  add(key, value) {
    if (this.dict.has(key)) {

      this.dict.set(key, this.dict.get(key).add(value));

    } else {
      let val = new Set([value]);
      this.dict.set(key, val);
    }
  }

  getByKey(key) {

    return this.dict.get(key);
  }

  keys() {
    let keys = [];

    for (let key of this.dict.keys()) {
      keys.push(key);
    }
    return keys;
  }

  values() {
    let values = [];

    for (let value of this.dict.values()) {
      values.push(...value);
    }
    return values;
  }

  getCountByKey(key) {
    if (this.dict.has(key)){

        return this.getByKey(key).size;
    }
     throw new Error("key is not found")
  }

   remove(key) {  
     return  this.dict.delete(key);
  }
}




const dict = new Dictionary({num: 30, negNum: -90});

dict.add('num', 10)
dict.add('num', 10)
dict.add('negNum', -10)
dict.add('num', 200)

// console.log(dict.getByKey("num"))
// console.log(dict.getCountByKey("num")) 
// dict.getByKey('num').delete(10)
// console.log(dict.getCountByKey("num")) 
console.log(dict) 

console.log(dict.remove("negNum"))
console.log(dict.getByKey('num').delete(200)) 

// console.log(dict.getCountByKey('num')); 
// console.log(dict.getCountByKey('negNum')); 

// console.log(dict.keys()) // [ 'num', 'negNum' ]
// console.log(dict.values()) //[ 30, 10, 200, -10 ]
