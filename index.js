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

    flatten: function(array, shallow = false, flattenedArray = []) {
      if (shallow) {
        for (let i = 0; i < array.length; i++) {
          if (Array.isArray(array[i])) {
            for (let j = 0; j < array[i].length; j++) {
              flattenedArray.push(array[i][j]);
            }
          } else {
            flattenedArray.push(array[i]);
          }
        }
      } else {
        for (let item of array) {
          if (Array.isArray(item)) {
            this.flatten(item, false, flattenedArray);
          } else {
            flattenedArray.push(item);
          }
        }
      }
      return flattenedArray;
    },

    uniq: function(array, isSorted = false, callback = false) {
      let finalArray;
      if (isSorted) {
        finalArray = [array[0]];
        for (let i = 1; i < array.length; i++) {
          if (finalArray[i - 1] !== array[i]) {
            finalArray.push(callback(array[i]));
          }
        }
      } else if (!callback) {
        return Array.from(new Set(array));
      } else {
        let newArray = array.sort(function(a, b) {
          return callback(a) - callback(b);
        });
        let modifiedArray = [];
        finalArray = [];
        for (let item of newArray) {
          const modifiedValue = callback(item);
          if (!modifiedArray.includes(modifiedValue)) {
            modifiedArray.push(modifiedValue);
            finalArray.push(item);
          }
        }
      }
      return finalArray.sort((a, b) => a - b);
    },

    keys: function(object) {
      let keysArray = [];
      for (let i in object) {
        keysArray.push(i);
      }
      return keysArray;
    },

    values: function(object) {
      let valuesArray = [];
      for (let i in object) {
        valuesArray.push(object[i]);
      }
      return valuesArray;
    },

    functions: function(object) {
      let functionsArray = [];
      for (let i in object) {
        if (typeof object[i] === "function") {
          functionsArray.push(object[i]);
        }
      }
      return functionsArray;
    }
  };
})();

fi.libraryMethod();
