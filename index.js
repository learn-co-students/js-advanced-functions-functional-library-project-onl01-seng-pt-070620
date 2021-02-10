const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if(collection.constructor === Array){
        for(let i = 0; i < collection.length; i++){
          callback(collection[i], i, collection)
        }
      } else if(typeof(collection) === "object"){
        let keysCollection = Object.keys(collection)
        for(let i = 0; i < keysCollection.length; i++){
          callback(collection[keysCollection[i]], keysCollection[i], i)
        }
      }
      return collection
    },

    map: function(collection, callbackFun) {
      let newCollection = [];
      if (collection.constructor === Array) {
        for (let n = 0; n < collection.length; n ++) {
          newCollection.push(callbackFun(collection[n], n, collection));
        }
      } else if (typeof collection === "object") {
        let keys = Object.keys(collection);
        for (let n = 0; n < keys.length; n ++) {
          newCollection.push(callbackFun(collection[keys[n]], keys[n], collection))
        }
      }
      return newCollection
    },

    reduce: function(collection, callback, acc = 0) {
      for (let n = 0; n < collection.length; n ++) {
         acc = callback(acc, collection[n], collection) 
      }
      return acc
    },

    find: function(collection, truthTest) {
      for (let n = 0; n < collection.length; n ++) {
      //   truthTest = function(predicate) {
      //     if (predicate === collection[n]) { return predicate}
      //     else { return undefined}
      //   }
      if(truthTest(collection[n])) { 
        return collection[n]
        }
      }
      return undefined
    },

    filter: function(collection, filterFun) {
      let newArr = []
      for (let n = 0; n < collection.length; n ++) {
        if (filterFun(collection[n])) {
          newArr.push(collection[n])
        }
      }
      return newArr
    },

    size: function(collection) {
      if (Array.isArray(collection)) {
        return collection.length
      } else if (typeof(collection) === "object" && collection !== null) {
        return Object.keys(collection).length
      };
    },

    first: function(arr, firstArr) {
      if (firstArr == null) {return arr[0]}
      else {let firstOfArr = arr.slice(0, firstArr);
        return firstOfArr
      }
    },

    last: function(arr, lastArrEl) {
      if (lastArrEl == null) {return arr.slice(-1)[0]}
      else {let lastEls = arr.slice(-lastArrEl);
        return lastEls
      }
    
    },

    compact: function(arr) {
      let truthyOnly = arr.filter(Boolean)
      return truthyOnly
    },

   sortBy: function(collection, sortFun) {
     const newArr = [...collection];

     return newArr.sort((a, b) => sortFun(a) - sortFun(b))
    },

    // unpack: function(receiver, array) {
    //   for (let value of array) {
    //       receiver.push(value);
    //   }
    // },

    flatten: function(ary, shallow, newArr = []) {
      // if (!Array.isArray(ary)) return newArr.push(ary)
      // if (shallow == true) {
      //     for (let el of ary) 
      //       Array.isArray(el) ? this.unpack(newArr, el) : newArr.push(el)
      // } else {
      //     for (let el of ary)
      //       { this.flatten(el, false, newArr) }
      //   }
      //   return newArr

        if (shallow) {
          return ary.flat(1)
        } else {
          return ary.flat(Infinity)
        }
    },

    uniqueSorted: function(collection, iteratee) {
      const sorted = [collection[0]];

      for (let indx = 1; indx < collection.length; indx++) {
        if (sorted[indx - 1] !== collection[indx])
          sorted.push(collection[indx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqueSorted(collection, iteratee)
      } else if (!iteratee) {
        // let uniqVal = [...new Set(collection)]
        return Array.from(new Set(collection))
        // return uniqVal
      } else {
        const modifiedValues = new Set()
        const uniqueValues = new Set()

        for (let elemnt of collection) {
          const modifiedVal = iteratee(elemnt)
          if (!modifiedValues.has(modifiedVal)) {
            modifiedValues.add(modifiedVal)
            uniqueValues.add(elemnt)
          }
        }
        return Array.from(uniqueValues)
      }
      // attempt 1
      // for (let n = 0; n < collection.lentgth; n++) {
      //   if (isSorted.sort()) {
      //     let uniqVal = [...new Set(collection)]
      //     return uniqVal
      //   } else {
      //       return collection.filter(callback(item, pos, ary) {
      //         return !pos || item != ary[pos - 1]
      //       })
      //   }
      // }

      // attempt 2
      // if (Array.isArray(collection)) {
      //   const unique = collection.filter(uniqFun);
      //   return unique
      // };
      // if (typeof(arr) === 'object') {
      //   const newArr = collection => {return [...new Set(collection)]}
      //   return newArr
      // }

           // attempt 3
    //   let sorted = true;
    //   for (let n = 0; n < isSortedArr; n++) {
    //     if (isSortedArr[n] > isSortedArr[n+1]) {
    //       sorted = false;
    //       break;
    //     }
    //   }

    //   if (sorted) {
    //       let uniqVal = [...new Set(isSortedArr)]
    //       return uniqVal
    //   } else {
    //     function iteratee(collection) {
    //       let uniqVal = collection.reduce(function(a, b) {
    //         if (a.indexOf(b) < 0) 
    //           a.push(b);
    //           return a;
    //       }, []);
    //       return uniqVal
    //   }
    // }

    },

    keys: function(obj) {
      let keys = Object.getOwnPropertyNames(obj)
      return keys
    },

    values: function(obj) {
      let values = [];
      for (var key in obj) {
        var key = obj[key]
        values.push(key)
      }
      return values
    },

    functions: function(obj) {
      let funsArr = [];
      for (let key in obj) {
        if (typeof obj[key] === "function") {
          funsArr.push(key)
        }
      }
      return funsArr
    },


  }
})()

fi.libraryMethod()
