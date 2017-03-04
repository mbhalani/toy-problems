/*
Rock Paper Permutation
Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.

Examples
Input Output
roundCount:
1 [ "r", "p", "s" ]
roundCount:
2 [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]
roundCount:
0 [ ]
*/

function rockPaperPermutation(n) {
  // base case n === 0
  if (n <= 0) {
    return [];
  }

  // base case n === 1
  if (n === 1) {
    return ['r', 'p', 's'];
  }

  // Recursive cases
    // Calculate rps(n-1)
      // Run through each of these plays and prepend an r, p, or s to each
      // Push each of these new plays to an (initially empty) array
    // Return the new array!
  var prevPlay = rockPaperPermutation(n - 1);

  var result = [];

  prevPlay.forEach( (play) => {
    result.push(play + 'r');
    result.push(play + 'p');
    result.push(play + 's');
  });

  return result;
}

console.log(rockPaperPermutation(4));

