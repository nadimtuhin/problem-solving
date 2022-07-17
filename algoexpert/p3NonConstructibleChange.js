function p3NonConstructibleChange(coins) {
  if (!coins.length) return 1;
  coins = coins.sort((m, n) => m-n);

  let change = 0;
  for (let coin of coins) {
    if(coin > change + 1) {
      return change + 1;
    }

    change += coin;
  }

  // Write your code here.
  return change + 1;
}

module.exports = { p3NonConstructibleChange }
