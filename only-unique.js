/*
Only Unique
Given a string, remove any characters that are not unique from the string.

          Examples             Input Output
string:   "abccdefe"            "abdf"
string:   "hello there"         "h tr"
string:   "xyz"                 "xyz"
string:   "iiii"                ""
*/

function onlyUnique(str) {
  let charObj = {};
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (charObj[str[i]]) {
      charObj[str[i]] += 1;
    } else {
      charObj[str[i]] = 1;
    }
  }

  for (let key in charObj) {
    if (charObj[key] === 1) {
      result += key;
    }
  }

  return result;
}

console.log(onlyUnique('abccdefe'));
console.log(onlyUnique('hello there'));
console.log(onlyUnique('xyz'));
console.log(onlyUnique('iiii'));
