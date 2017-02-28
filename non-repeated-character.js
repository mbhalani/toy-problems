/*
Non-repeated Character
Given an arbitrary input string, return the first non-repeating character. For
strings with all repeats, return 'sorry'.

          Examples             Input Output
string:   "ABCDBIRDUP"          "A"
string:   "XXXXXXX"             "sorry"
string:   "ALAMABA"             "L"
string:   "BABA"                "sorry"
*/

function firstNonRepeatedCharacter (string) {
  for (let i = 0; i < string.length; i++) {
    let result = string.charAt(i);

    if (string.indexOf(result) === i && string.indexOf(result, i + 1) === -1) {
      return result;
    }
  }

  return 'sorry';
}

console.log(firstNonRepeatedCharacter('ABCDBIRDUP'));
console.log(firstNonRepeatedCharacter('XXX'));
console.log(firstNonRepeatedCharacter('ALABAMA'));
console.log(firstNonRepeatedCharacter('BABA'));