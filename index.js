const fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function(collection, callback) {
      const newCollection =
        collection instanceof Array
          ? collection.slice()
          : Object.values(collection);
      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      const newCollection =
        collection instanceof Array
          ? collection.slice()
          : Object.values(collection);
      let newArray = [];
      for (let i = 0; i < newCollection.length; i++) {
        newArray.push(callback(newCollection[i]));
      }
      return newArray;
    },

    reduce: function(collection, callback, acc) {
      let newCollection;
      if (!acc) {
        acc = collection[0];
        newCollection = collection.slice(1);
      } else {
        newCollection =
          collection instanceof Array
            ? collection.slice()
            : Object.values(collection);
      }
      let newAcc = acc;
      for (let i = 0; i < newCollection.length; i++) {
        newAcc = callback(newAcc, newCollection[i], collection);
      }
      return newAcc;
    },

    find: function(collection, predicate) {
      const newCollection =
        collection instanceof Array
          ? collection.slice()
          : Object.values(collection);
      for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
          return newCollection[i];
        }
      }
    },

    filter: function(collection, predicate) {
      const newCollection =
        collection instanceof Array
          ? collection.slice()
          : Object.values(collection);
      let newArray = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(newCollection[i])) {
          newArray.push(newCollection[i]);
        }
      }
      return newArray;
    },

    size: function(collection) {
      const newCollection =
        collection instanceof Array
          ? collection.slice()
          : Object.values(collection);
      return newCollection.length;
    },

    first: function(array, number) {
      let newArray = [];
      if (number) {
        for (let i = 0; i < number; i++) {
          newArray.push(array[i]);
        }
        return newArray;
      } else {
        return array[0];
      }
    },

    last: function(array, number) {
      let newArray = [];
      if (number) {
        for (let i = array.length - number; i < array.length; i++) {
          newArray.push(array[i]);
        }
        return newArray;
      } else {
        return array[array.length - 1];
      }
    },

    compact: function(array) {
      let finalArray = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          finalArray.push(array[i]);
        }
      }
      return finalArray;
    },

    sortBy: function(array, callback) {
      let finalArray = [...array];
      return finalArray.sort((a, b) => callback(a) - callback(b));
      finalArray.sort(function(a, b) {
        return callback(a) - callback(b);
      });
      return finalArray;
    },

    flatten: function(array, bool = false) {
      let newArray = [];
      if (!Array.isArray(array)) {
        return newArray.push(array);
      }
      if (bool) {
        for (let value of array) {
          Array.isArray(value) ? newArray.push(array[0]) : newArray.push(value);
        }
      } else {
        for (let value of array) {
          this.flatten(value, false);
        }
      }
      console.log(array);
      console.log(newArray);
      return newArray;
    },

    uniq: function(array, isSorted, callback = false) {
      let finalArray = [];
      if (isSorted) {
        for (let i = 0; i < array.length; i++) {
          if (!finalArray.includes(array[i])) {
            finalArray.push(callback(array[i]));
          }
        }
      } else if (!callback) {
        return Array.from(new Set(collection));
      } else {
        let newArray = array.sort(function(a, b) {
          return callback(a) - callback(b);
        });
        for (let i = 0; i < newArray.length; i++) {
          if (finalArray.some(newArray[i])) {
            finalArray.push(callback(newArray[i]));
          }
        }
      }
      console.log(finalArray);
      return finalArray;
    },

    functions: function() {}
  };
})();

fi.libraryMethod();
