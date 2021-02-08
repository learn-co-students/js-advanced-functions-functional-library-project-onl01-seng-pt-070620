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

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
