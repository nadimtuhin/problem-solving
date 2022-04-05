function indexElementEquity(arr) {
  let low = 0, high = arr.length-1, result = -1;

  let ii=0;

  while(low < high) {
    let val = arr[high];

    console.log(arr);
    console.log(low, high, val);

    if(high === val) {
      result = val;
    }

    if (val > high) {
      // because distinct sorted array, we can safely assume
      // that the value is in the left side
      high = val - high;
    }

    if(++ii>arr.length) break;
  }

  return result;
}

module.exports = { indexElementEquity }
