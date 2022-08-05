/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const len = nums.length;
  const target = 0;

  if (len < 3) return [];

  let ii = 0;
  let output = [];
  let hash = new Map();

  while (ii < len - 1 - 1) {
    let jj = ii + 1;
    while (jj < len - 1) {
      let kk = len - 1;

      while (jj < kk) {
        const sum = nums[ii] + nums[jj] + nums[kk];
        if (sum === target) {
          let ijk = [nums[ii], nums[jj], nums[kk]];
          let ijks = ijk.sort().join("");
          if (hash.has(ijks)) {
            kk--;
            continue;
          }

          hash.set(ijks, true);
          output.push(ijk);
        }

        kk--;
      }

      jj++;
    }

    ii++;
  }

  return output;
};

module.exports = { threeSum };
