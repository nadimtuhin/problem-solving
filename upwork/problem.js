/*
# Challenge (Node)

Given an array `nums` of n integers where n > 1,
return an array output such that output[i]
is equal to the product of all the elements of `nums` except `nums[i]`.

*Note: The solution should have time and space complexity O(n) and not use division*

## Example

* Input:
```js
[1,2,3,4]
```
* Output:
```js
[24,12,8,6]
```

[1,2,3,4]
[1,1,2,6]
[-, -, -, 1]
*/


function solution(arr) {
    let leftToRight = [];
    let rightToLeft = [];

    for (let ii=0; ii<arr.length; ii++) {
        if (ii === 0) {
            leftToRight[ii] = 1;
        } else {
            leftToRight[ii] = leftToRight[ii-1]*arr[ii-1];
        }
    }

    for (let jj=arr.length-1; jj>=0; jj--) {
        if (jj === arr.length-1) {
            rightToLeft[jj] = 1;
        } else {
            rightToLeft[jj] = arr[jj+1] * rightToLeft[jj+1];
        }
    }

    const output = leftToRight.map((l, index) => l*rightToLeft[index]);

    return output;
}

module.exports = { solution };