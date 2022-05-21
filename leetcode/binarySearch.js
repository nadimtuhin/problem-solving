/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var binarySearch = function(nums, target) {
    var low = 0; high = nums.length - 1;
    
    while(low <= high) {
        var mid = Math.floor((low + high)/2);
        var val = nums[mid];

        if (target === val) return mid;

        if (target < val) {
            high = mid - 1;
        } else if (target > val) {
            low = mid + 1;
        }
    }
    
    return -1;
};

module.exports = { binarySearch }
