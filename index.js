const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newArray = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < newArray.length; i++){
        callback(newArray[i])
      };

        return collection
    },

    map: function(collection, callback) {
      const newArray = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let finalArray = []

      for (let i = 0; i < newArray.length; i++) {
        finalArray.push(callback(newArray[i]))
      };
      
      return finalArray
    },

    reduce: function(collection, callback, acc) {


      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }

      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }

      return acc
      
    },

    find: function(collection, predicate) {
      const newArray = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < newArray.length; i++) {
        if (predicate(newArray[i])) {
          return newArray[i]
        }
      };
    },

    filter: function(collection, predicate) {
      const newArray = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let answer = []

      for (let i = 0; i < newArray.length; i++) {
        if (predicate(newArray[i])) {
          answer.push(newArray[i])
        }
      };
      return answer
    },

    size: function(collection) {
      const newArray = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let total
      for (let i = 0; i < newArray.length; i++) {
        total = i
      }
      return total +=1
    },

    first: function(array, n) {

      let newArray = []
      if (!n){
        return array[0]
      }
      else {
        array.length = n
        for (let i = 0; i < array.length; i++) {
          newArray.push(array[i])
        }
        return newArray
      }
    },

    last: function(array, n) {
      let newArray = []

      if (!n) {
        return array.slice(-1)[0]
      }
      else {
        return array.slice(-n)
      }
    },

    compact: function(array) {
      let newArray = [];

      for(let i = 0; i < array.length; i++) {
        if (!!array[i]) {
          newArray.push(array[i])
        }
      };
      return newArray
    },

    sortBy: function(collection, callback) {
      const newArray = collection.slice()

      return newArray.sort((a,b) => callback(a) - callback(b))
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

    keys: function(object) {
      const allKeys = []
      for (let key in object) {
        allKeys.push(key)
      }
      return allKeys
    },

    values: function(object) {
      const allValues = [];

      for (let value in object) {
        allValues.push(object[value])
      };
      return allValues
    },

    functions: function(object) {
      let allFunctions = [];

      for (let key in object) {
        if (typeof object[key] === 'function'){
          allFunctions.push(key)
        }
      }
      return allFunctions
    },


  }
})()

fi.libraryMethod()
