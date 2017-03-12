/*
Coin Sums
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p
2p
5p
10p
20p
50p
£1 (100p)
£2 (200p)
Given a given number of pence, return the possible number of ways someone could make change.
*/

var coins = [1,2,5,10,20,50,100,200];

function coinSums(total) {
  var setSize = coins.length;

  var renderCoinSum = function(total, setSize) {
    if (total < 0) {
      return 0;
    }
    if (total === 0) {
      return 1;
    }
    if (setSize <=1) {
      return 1;
    } else {
      return renderCoinSum(total, setSize - 1) + renderCoinSum(total - coins[setSize - 1], setSize);
    }
  };

  return  renderCoinSum(total, setSize);
}

console.log(coinSums(5));

// function coinSums (total) {
//   var coins = [1,2,5,10,20,50,100,200];
//   var count = 0;

//   var recurse = function(sum, index) {
//     if (sum === total) {
//       count++;
//     } else if (sum < total) {
//       for (var i = index; i < coins.length; i++) {
//         recurse(sum+coins[i], i);
//       }
//     }
//   };
//   recurse(0,0);
//   return count;
// }

