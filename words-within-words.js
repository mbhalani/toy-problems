/*
Words within Words
Given an array of unique words, find the word that
contains the greatest number of other words. A word must
be at least two letters long.

Examples
Input Output
wordList:
[ "gray", "grays", "ray", "rays", "strays" ]  "grays"
*/

function nestedWordCount(wordList) {
  let maxCount = 0;
  let result;

  wordList.forEach( (firstWord) => {
    let count = 0;

    wordList.forEach( (secondWord) => {
      if (firstWord.includes(secondWord)) {
        count++;
      }
    });

    if (count > maxCount) {
      maxCount = count;
      result = firstWord;
    }
  });

  return result || '';
}

let words = [ "gray", "grays", "ray", "rays", "strays" ] ;
console.log(nestedWordCount(words));