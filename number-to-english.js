/*
Number to English
Write a function numberToEnglish, it should take a number
and return the number as a string using English words.

Examples
Input Output
number:
7 "seven"
number:
575 "five hundred seventy-five"
number:
78193512  "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*/

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

function numberToEnglish(number) {
  var result = [];

  if (numbersToWords[number]) {
    return numbersToWords[number];
  }

  let digits = number.toString().split('').reverse().join('').match(/.{1,3}/g);
  let place = 100;

  for (let i = 0; i < digits.length; i++) {
    digits[i] = digits[i].split('').reverse().join('');

    let digitNum = digits[i].split('');
    if (digitNum.length < 2) {
      digitNum.unshift('0');
    }
    if (digitNum.length < 3) {
      digitNum.unshift('0');
    }
    let tensPlace = +(digitNum[1] + digitNum[2]);
    let buildWord = '';

    if (+digits[i] >= 1) {
      if (+digitNum[0] >= 1) {
        buildWord += numbersToWords[+digitNum[0]] + ' ';
        buildWord += numbersToPlace[100] + ' ';
      }
      if (tensPlace >= 1) {
        if (numbersToWords[tensPlace]) {
          buildWord += numbersToWords[tensPlace] + ' ';
        } else {
          buildWord += numbersToWords[+digitNum[1] * 10] + '-';
          buildWord += numbersToWords[+digitNum[2]] + ' ';
        }
      }
      if (place >= 1000) {
        buildWord += numbersToPlace[place] + ' ';
      }
    }

    result.push(buildWord);

    if (place < 1000) {
      place *= 10;
    } else {
      place *= 1000;
    }
  }

return result.reverse().join('').trim();
}

// for (let i = 0; i < 100; i++) {
//   console.log(numberToEnglish(i));
// }

// console.log(numberToEnglish(121));
console.log(numberToEnglish(6543210987654321));

// console.log(numberToEnglish(76543210987654321));
console.log(numberToEnglish(78193512));
console.log(numberToEnglish(1000001));
console.log(numberToEnglish(700));