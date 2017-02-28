/*
Insertion Sort
Insertion sort is a basic sorting algorithm.

Insertion sort iterates over an array, growing a sorted array behind the
current location. It takes each element from the input and finds the
spot, up to the current point, where that element belongs (in constant
space). It does this until it gets to the end of the array.

Insertion sort should be implemented as a stable sort. This means that
equal elements
should retain their relative order. Numbers, as primitives, give us no
way to check this,
so we’ll be sorting objects with a value field, on which they will be
sorted, like so:

[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]

A stable sort must return {value: 5, order: 1}, {value:5, order: 2} in
that order.

Examples
Input
array:
[ { "value": 3 }, { "value": 1 }, { "value": 2 } ]
Output:
[ { "value": 1 }, { "value": 2 }, { "value": 3 } ]

Input
array:
[ { "value": 10 }, { "value": 5, "order": 1 }, { "value": 5, "order": 2 } ]
Output:
[ { "value": 5, "order": 1 }, { "value": 5, "order": 2 }, { "value": 10 } ]
*/

function insertionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i].value > array[j].value) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      } else if ( array[i].value === array[j].value) {
        if (array[i].order > array[j].order) {
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
  }

  return array;
}

console.log(insertionSort([ { "value": 3 }, { "value": 1 }, { "value": 2 } ]));
console.log(insertionSort([ { "value": 10 }, { "value": 5, "order": 1 }, { "value": 5, "order": 2 } ]));