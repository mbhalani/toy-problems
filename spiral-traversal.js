/*
Spiral Traversal
Write a function that accepts a 2-dimensional array (that is, an array containing
many same-length arrays),
and prints out every value found, but in a spiral from the upper left in to the
center.

Examples
Input
matrix:
[ [ 1, 2, 3, 4, 5 ],
  [ 6, 7, 8, 9, 10 ],
  [ 11, 12, 13, 14, 15 ],
  [ 16, 17, 18, 19, 20 ],
  [ 21, 22, 23, 24, 25 ] ]
Output
[ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]

Input
matrix:
[ [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
  [ 10, 11, 12 ],
  [ 13, 14, 15 ],
  [ 16, 17, 18 ],
  [ 19, 20, 21 ],
  [ 22, 23, 24 ] ]
Output
[ 1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20 ]

Input
matrix:
[ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]
Ouput
[ 1, 2, 3, 4 ]

Input
matrix:
[ [ 1, 2, 3, 4, 5, 6, 7 ] ]
Output
[ 1, 2, 3, 4, 5, 6, 7 ]
*/

function spiralTraversal(matrix){
  var array = [];

  var traverseMatrix = function(matrix) {
    if (matrix.length === 0) {
      return;
    }

    // TOP
    // shift top row and push to array
    array = array.concat(matrix.shift());
    if (matrix.length === 0) {
      return;
    }

    // RIGHT
    // add last item from each row
    matrix.forEach((row) => {
      array.push(row.pop());
    });
    if (matrix.length === 0) {
      return;
    }

    // BOTTOM
    // add last row in reverse
    array = array.concat(matrix.pop().reverse());
    if (matrix.length === 0) {
      return;
    }

    // LEFT
    // add first item from each row from last to first
    let leftArray = [];
    matrix.forEach((row) => {
      leftArray.push(row.shift());
    });
    array = array.concat(leftArray.reverse());

    return traverseMatrix(matrix);
  };
  traverseMatrix(matrix);

  var result = [];
  array.forEach((item) => {
    if (item) {
      result.push(item);
    }
  });
  return result;
}

var mat = [ [ 1, 2, 3, 4, 5 ],
  [ 6, 7, 8, 9, 10 ],
  [ 11, 12, 13, 14, 15 ],
  [ 16, 17, 18, 19, 20 ],
  [ 21, 22, 23, 24, 25 ] ];

console.log(spiralTraversal(mat));

var mat = [ [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
  [ 10, 11, 12 ],
  [ 13, 14, 15 ],
  [ 16, 17, 18 ],
  [ 19, 20, 21 ],
  [ 22, 23, 24 ] ];

console.log(spiralTraversal(mat));

var mat = [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ];
console.log(spiralTraversal(mat));

var mat = [ [ 1, 2, 3, 4, 5, 6, 7 ] ];
console.log(spiralTraversal(mat));
