/*
Hash Table
Finish this implementation of a Hash Table. It should have the methods
insert(), retrieve(), and remove(). Your hash table need not resize
itself, but shall handle collisions.
*/

var makeHashTable = function(){
  var table = {};
  var storage = [];
  var storageLimit = 1000;

  table.insert = function(key, value){
    // get unique index from hash function using key
    var index = getIndexBelowMaxForKey(key, storageLimit);
    //storage[index] is a bucket
    storage[index] = storage[index] || [];
    //YOUR CODE HERE
    // remove existing key
    this.remove(key);
    // push key-value pair to bucket
    storage[index].push([key, value]);
  };

  table.retrieve = function(key){
    //YOUR CODE HERE
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (storage[index]) {
      for (let i; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };

  table.remove = function(key){
    //YOUR CODE HERE
    // get unique index from hash function using key
    var index = getIndexBelowMaxForKey(key, storageLimit);

    // if bucket exists iterate over bucket
    if (storage[index]) {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index].splice(i, 1);
        }
      }
    }
  };
  return table;
};

var getIndexBelowMaxForKey = function(str, max){
 var hash = 0;
 for (var i = 0; i < str.length; i++) {
   hash = (hash<<5) + hash + str.charCodeAt(i);
   hash = hash & hash; // Convert to 32bit integer
   hash = Math.abs(hash);
 }
 return hash % max;
};


