/*
Character Frequency
Write a function that takes as its input a string and returns an array of
arrays as shown below sorted in descending order by frequency and then by
ascending order by character.

Examples
Input
string:
"aaabbc"
Output
[ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

string:
"mississippi"
Output
[ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

string:
""
Output
[ ]
*/

function characterFrequency(string) {
  var result = [];

  var freqObj = string.split('').reduce(function(a, b) {
    a[b] ? a[b]++ : a[b] = 1;
    return a;
  }, {});

  for (let key in freqObj) {
    result.push([key, freqObj[key]]);
  }

  return result.sort(function(a, b) {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
  });
}

console.log(characterFrequency('aaabbc'));
console.log(characterFrequency('mississippi'));
console.log(characterFrequency(''));