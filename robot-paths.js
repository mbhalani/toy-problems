/*
Robot Paths
A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. The robot can move either up, down, left, or right, but cannot visit the same spot twice. How many possible unique paths are there to the bottom right corner?

Make your solution work for a grid of any size.

Parameters:

n (required) - amount of rows/columns (max 6)

You've got Helpers!
makeBoard(name)

Examples
Input Output
n:
1 1
n:
2 2
n:
3 12
*/

function makeBoard(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
}

function robotPaths(n) {
  var uniquePathCount = 0;
  var grid = makeBoard(n);

  var searchPath = function(i, j) {
    if (i === n - 1 && j === n - 1) {
      uniquePathCount++;
      return;
    }
    if (i < 0 || i >= n || j < 0 || j >= n || grid.hasBeenVisited(i, j)) {
      return;
    } else {
      grid.togglePiece(i, j);
      searchPath(i, j + 1);
      searchPath(i + 1, j);
      searchPath(i, j - 1);
      searchPath(i - 1, j);
      grid.togglePiece(i, j);
    }
  };
  searchPath(0, 0);

  return uniquePathCount;
}

console.log(robotPaths(3));



