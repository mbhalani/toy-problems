/*
All Anagrams
Given a single input string, write a function that produces all possible
anagrams of a string and outputs them as an array. At first, don’t worry
about repeated strings. What time complexity is your solution?

Parameters:

string (required) - a string of characters.

Examples
Input             Output
string: "abc"     [ "abc", "acb", "bac", "bca", "cab", "cba" ]
*/

function allAnagrams(string) {
  var result = [];

  var traverseRecursive = (firstPart, lastPart) => {
    if (firstPart.length === string.length) {
      result.push(firstPart);
    }

    for (let i = 0; i < lastPart.length; i++) {
      let firstPartPlus = firstPart + lastPart[i];
      let remainOfString = lastPart.slice(0, i) + lastPart.slice(i + 1);
      traverseRecursive(firstPartPlus, remainOfString);
    }
  };
  traverseRecursive('', string);

  return result;
}

console.log(allAnagrams('abc'));