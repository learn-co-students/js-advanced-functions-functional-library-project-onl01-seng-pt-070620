const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(things,func) {
      if (things instanceof Array) {
        things.forEach(thing => {
          func(thing)
        });
      }
      else {
        Object.values(things).forEach(thing=> {
          func(thing)
        })
      }
      return things
    },

    map: function(things,func) {
      const newArray = []
      if (things instanceof Array) {
        things.forEach(thing => {
          newArray.push(func(thing))
        })
      }
      else {
        Object.values(things).forEach(thing=> {
          newArray.push(func(thing))
        })
      }
      return newArray
    },

    reduce: function(arr = [],callback = () => {},startingValue) {
      let newArray = arr
      if (!startingValue) {
        newArray = arr.slice(1)
        startingValue = arr[0]
      }
      newArray.forEach(thing => {
        startingValue = callback(startingValue, thing, arr)
      })
      return startingValue
    },

    find: (collection,predicate) => {
      if(!collection instanceof Array){
        collection = Object.values(collection)
      }
      let found
      for(let i = 0; i < collection.length; i++){
        if(predicate(collection[i]) == true){
          found = collection[i]
          break;
        }
      }
      return found
    },

    filter: (collection, predicate) => {
      let newArray = []
      collection.forEach(e => {
        if(predicate(e) == true){
          newArray.push(e)
        }
      })
      return newArray
    },

    size: (collection) => {
      if (!(collection instanceof Array)){
        collection = Object.keys(collection)
      }
      return collection.length
    },

    first: (arr,n) => {
      (!!n) ? n : n = 1
      let newArray = []
      for(let i = 0; i < n; i++){
        newArray.push(arr[i])
      }
      return newArray.length > 1 ? newArray : parseInt(newArray[0])
    },

    last: (arr,n) => {
      (!!n) ? n = arr.length - n : n = arr.length - 1
      let newArray = []
      for(let i = arr.length; i > n; i--){
        newArray.push(arr[i - 1])
      }
      return newArray.length > 1 ? newArray.reverse() : parseInt(newArray[0])
    },

    compact: (collection) => {
      let blacklist = [false, null, 0, "", undefined, NaN]
      let newArray = collection.filter(e =>{
        if(blacklist.indexOf(e) == -1){
          return e
        }
      })
      return newArray
    },

    sortBy: (collection,sortFunc) => {
      const newArray = [...collection]
      return newArray.sort((x,y) => {
        return sortFunc(x) - sortFunc(y)
      })
    },
    
    flatRecursive: (collection,arr,shallow) => {
      for (let e of collection) {
        console.log(`e is equal to ${e} is e an array? ${Array.isArray(e)}`)
        if(Array.isArray(e) == true && shallow == false){
            console.log(`${e} is an array and will be passed in recursively`)
            fi.flatRecursive(e,arr,shallow)
        }
        else {
            console.log(`${e} was pushed into ${arr}`)
            arr.push(e)
            console.log(arr)
        }
      }
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: (collection, shallow=false) => {
      let newArray = []
      if (shallow) {
        for(let e of collection){
          Array.isArray(e) ? fi.unpack(newArray, e) : newArray.push(e)
        }
      }
      else {
        fi.flatRecursive(collection,newArray,shallow)
      }
      
      
      return newArray
    },

    functions: function() {

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
      // Using for loop
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      // Using for loop
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values

      // Using the custom 'map' method from above
      // return this.map(obj, (value) => value)

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

