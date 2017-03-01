/*
Prime Range Tester
Extra credit: Write a function that generates a list of all
prime numbers in a user-specified range (inclusive).

Parameters:
start   begin of range
end     end of range (inlcusive)
*/

function primeRangeTester(start, end) {
  var result = [];

  for (let i = start; i <= end; i++) {
    if (primeTester(i)) {
      result.push(i);
    }
  }

  return result;
}

function primeTester(n) {
  if (n <= 1) {
    return false;
  }

  if (n <= 3) {
    return true;
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

console.log(primeRangeTester(20, 22));
console.log(primeRangeTester(1, 2));
console.log(primeRangeTester(16, 20));