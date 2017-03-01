/*
Longest Palindrome
Implement a function that finds the longest palindrome in a given string. For example, in the string “My dad is a racecar athlete”, the longest palindrome is “a racecar a”. Count whitespaces as valid characters. Other palindromes in the above string include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).

Examples
Input                                      Output
string: "aibohphobia"                     "aibohphobia"
string: "My dad is a racecar athlete"     "a racecar a"
*/

function longestPalindrome(string) {
  let result = '';

  for (let r = 0; r < string.length; r++) {
    for (let l = string.length; l >= 0; l--) {
      let subStr = string.slice(r, l);
      let reverseSubStr = subStr.split('').reverse().join('');

      if (subStr === reverseSubStr && subStr.length > result.length) {
        result = subStr;
      }
    }
  }


  return result;
}

console.log(longestPalindrome('aibohphobia'));
console.log(longestPalindrome('My dad is a racecar athlete'));