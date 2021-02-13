const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newCollection = (collection instanceof Array) ? collection.split() : Object.values(collection)
        //tests to see if the prototype property of a constructor appears 
        //anywhere in the prototype chain in an object.
        //the return value is a BOOLEAN
      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
      }
      return collection

    },

    map: function(collection, callback) {
      if (!(collection instanceof Array)) 
        collection = Object.values(collection)
    
      let populatedArray = []
      for (let i = 0; i < collection.length; i++) {
        populatedArray.push(callback(collection[i]))
      }
      return populatedArray
    },


    reduce: function(collection, callback, acc) {
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      //returns a shallow copy of a portion of an array into a new array object
      //original not modified
      }

      for (let idx = 0; idx < collection.length; idx++) {
        acc = callback(acc, collection[idx], collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array))
      collection = Object.values(collection)

      for (let i = 0; i < collection.length; i++) 
      if (predicate(collection[i])) 
        return collection[i]
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array))
      collection = Object.values(collection)

      let newCollection = []

      for (let i = 0; i < collection.length; i++)
      if (predicate(collection[i]))
        newCollection.push(collection[i])
        return newCollection
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(array, n) {
      if (array == null)
        return void 0
      if (n == null)
        return array[0]
      if (n < 0)
        return []
      return array.slice(0, n)
    //selected from start to end - end not included (index of items in that array)

    },

    last: function(array, n) {
      if (array == null)
        return void 0
      if (n == null)
        return array[array.length -1]
      return array.slice(Math.max(array.length - n, 0))
      //returns a shallow copy of a portion of an array into a new array object
      //selected from start to end - end not included (index of items in that array)
      //original not modified
    },

    compact: function(array) {
      return array.filter(x => !!x)
    },

    sortBy: function(array, callback) {
      let newArray = [...array]
      return newArray.sort((a, b) => callback(a) - callback(b))
    },

    unpack: function(receiver, array) {
      for (let value of array) {
        receiver.push(value)
      }
    },

    flatten: function(collection, shallow, newArray=[]) {
      //shallow is a copy of an object

      if (!Array.isArray(collection)) 
      //this method determines whether the passed value is an Array
        return newArray.push(collection)

      if (shallow) {
        for (let value of collection)
          Array.isArray(value) ? this.unpack(newArray, value) : newArray.push(value)
          //unpacks values from arrays
      } else {
          for (let value of collection) {
            this.flatten(value, false, newArray)
          }
      }
      return newArray
  },

    uniqSorted: function(array, callback) {
      let isSorted = [array[0]]
      for (let i = 0; i < array.length; i ++) {
        if (isSorted[i-1] != array[i])
        isSorted.push(array[i])
      }
      return isSorted
    },

    uniq: function(array, isSorted = false, callback = false) {
      if (isSorted) {
        return result.uniqSorted(array, callback)
      } else if (!callback) {
        // Set is a new data object and lets you store unique values. 
        // When you pass in an array, it will remove any duplicate values
        // Create new Set by passing in an array. Because Set only allows unique vaues, 
        //it will remove duplicates
        return Array.from(new Set(array))
        //Convert Set to an array using Array.from
      } else {
        const newValues = new Set()
        const uniqValues = new Set()
        for (let value of array) {
          const modifiedValue = callback(value)
          if (!newValues.has(modifiedValue)) {
            //.has returns a boolean indicating whether an element with the 
            //specified value exists in a Set object of not
            //modifiedValue tests for the presence in the Set object
            newValues.add(modifiedValue)
            uniqValues.add(value)
          }
        }
        return Array.from(uniqValues)
      }
    },

    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
    },

    functions: function(object) {
      let functionNames = []
      for (let key in object) {
        //iterates over enumerable, non-symbol properties. 
        //Not used to iterate over an array where the index order is important.
        if (typeof object[key] === "function") {
          functionNames.push(key)
          //adds elements to the end of an array
        }
      }
      return functionNames.sort()
      //sorts the elments of an array in place and returns the sorted array
      //default: ascending, converting the elements into strings
    },
  }
})()

fi.libraryMethod()
