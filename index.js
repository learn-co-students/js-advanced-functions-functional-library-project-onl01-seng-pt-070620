const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(col, callback) {
      let newCol = col
      
     if (Array.isArray(newCol)){
       for (let i = 0; i < newCol.length; i++)
      callback(newCol[i])
     }
    else {let values = Object.values(newCol)
      for (let v = 0; v < values.length; v++)
      callback(values[v])
    }  
      

      return col

    },

    map: function(col, callback) {
      let r = []
      let newCol = col
      
      if (Array.isArray(newCol)){
        for (let i = 0; i < newCol.length; i++){ 
          let e = callback(newCol[i])
          r.push(e)}
      }
      else {
        let values = Object.values(newCol)
        for (let v = 0; v < values.length; v++){
          let e = callback(values[v])
          r.push(e)
          
        }
        
      }
      return r;

    },

    reduce: function(col, callback, acc) {
      let newCol = col
      
      for (let i = 0; i < newCol.length; i++){
        acc = callback(acc, newCol[i], newCol)
        if (!acc) {
	acc = newCol[i]}
      }
      return acc
    },
    
    find: function(col, predicate){
      let newCol = col
      return newCol.find(predicate)
    },
    
    filter: function(col, predicate){
      let newCol = col
      return newCol.filter(predicate)
    },
    
    size: function(col){
      let newCol = col
      return Object.keys(newCol).length
    },
    
    first: function(arr, n){
      if (n)
       {return arr.slice(0, n)}
      else{ 
      return arr[0]}
    },
    
    last: function(arr, n){
      if (n)
       {return arr.slice(-n)}
      else{ 
      return arr.slice(-1)[0]}
    },
    
    
    compact: function(arr){
      let newArr = arr
      return newArr.filter(Boolean)
    },
    
    sortBy: function(arr, callback){
      let newArr = [...arr]
      return newArr.sort(function(a, b) {return callback(a) - callback(b)})
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

    
    uniq: function(arr, isSorted=false, callback=false){
      
      if(isSorted === true){
      return [...new Set(arr)]}
      if(callback === false){
        return [...new Set(arr)]
      }
      if(callback !== false){
        let uniqArr = []
        let returns = []
        for(let i =0; i < arr.length; i++){
          let modifiedVal = callback(arr[i])
        if(!uniqArr.includes(modifiedVal)){  
          returns.push(arr[i])
          uniqArr.push(modifiedVal)
        }
        
      }
      return returns
    }  

    },
    
    keys: function(obj){
      return Object.keys(obj)
    },
    
     values: function(obj){
      return Object.values(obj)
    },
    
    
    


  functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()},
    
    


  }
})()

fi.libraryMethod()