// Problem -2
// ---------------------
// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6]

function solution(arr) {
    let m=1;
    let totalZeros = 0;

    for(let ii=0; ii < arr.length; ii++) {
        if (arr[ii] === 0) {
            totalZeros++; 

            if (totalZeros > 1) {
                let result = [];
                for(let jj=0; jj < arr.length; jj++) {
                    result[jj] = 0;
                }
                return result;
            }

            continue;
        }
        m = m * arr[ii];
    }


    let result = [];

    for(let kk=0; kk < arr.length; kk++) {
        if (arr[kk] === 0) {
            result[kk] = m;
        } else if(totalZeros > 0) {
            result[kk] = 0;
        } else {
            result[kk] = m/arr[kk];
        }
    }

    return result;
}

module.exports = solution;