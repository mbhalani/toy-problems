/*
Sum Array
Given an array of numbers, calculate the greatest contiguous sum of numbers in
it. A single array item will count as a contiguous sum.

          Examples             Input Output
array:   [1, 2, 3]             6
array:   [4, -1, 5]            8
array:   [10, -11, 11]         11
array:   [1,2,3,-6,4,5,6]      15
*/

function sumArray(array) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let currentSum = 0;

  array.forEach((item) => {
    currentSum += item;
    maxSum = Math.max(maxSum, currentSum);

    if (currentSum < 0) {
      currentSum = 0;
    }
  });

  return maxSum;
}

console.log(sumArray([1,2,3]));
console.log(sumArray([4,-1,5]));
console.log(sumArray([10,-11,11]));
console.log(sumArray([1,2,3,-6,4,5,6]));
