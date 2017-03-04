/*
Arrayception
Given an array of arbitrarily nested arrays, return n, where n is the
deepest level that contains a non-array value.

Examples
Input                                       Output
array: [ [ 5 ], [ [ ] ] ]                   2
array: [ 10, 20, 30, 40 ]                   1
array: [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]   4
array: [ ]                                  0
array: [ [ [ ] ] ]                          0
*/

function arrayception(array) {
  var deepest = 0;

  var traverseArray = (array, level) => {
    array.forEach( (subArr) => {
      if (Array.isArray(subArr)) {
        traverseArray(subArr, level + 1);
      } else if (level > deepest) {
        deepest = level;
      }
    });
  };
  traverseArray(array, 1);

  return deepest;
}

console.log(arrayception([ [ [ 1] ] ] ));
