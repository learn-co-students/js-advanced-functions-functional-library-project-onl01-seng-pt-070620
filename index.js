const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
     for(const numbers in collection){
       callback(collection[numbers])
     }
     return collection
    },

    map: function(collection, callback) {
      let array = []
      for(const numbers in collection){
        array.push(callback(collection[numbers]))
      }
      return array
    },

  reduce: function(collection, callback, acc=0) {

    if (acc == 0) {
      acc = collection[0]
      collection = collection.slice(1)
    }

    for (let i = 0; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection)
    }
    return acc;
  },


    find: function(collection,predicate) {
      for(let i=0; i < collection.length; i++){
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
    },

    filter: function(collection,predicate) {
      let array = []
      for(let i=0; i < collection.length; i++){
        if (predicate(collection[i])) {
          array.push(collection[i])
        }
      }
      return array
    },

    size: function(collection) {
      let i = 0
      for(const numbers in collection){
        i++;
      }
      return i
    },

    first: function(collection, n=1) {
      let array = []
      for(let i=0; i < [n]; i++) {
        if (n === 1){
          return collection[i]
        }
        array.push(collection[i])
      }
      return array
    },

    last: function(collection, start = false) {
      return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
    },

    compact: function(collection) {
      let array = []
      for (let i=0; i < collection.length; i++) {
        if (collection[i]){
          array.push(collection[i])
        }
      }
      return array
    },

    sortBy: function(collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },


    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values


    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },

  }
})()

fi.libraryMethod()
