// Problem -2
// ---------------------
// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6]

function solution(arr) {
    let m=1;
    let totalZeros = 0;

    for(let i=0; i < arr.length; i++) {
        if (arr[i] === 0) {
            totalZeros++; 

            if (totalZeros > 1) {
                let result = [];
                for(let i=0; i < arr.length; i++) {
                    result[i] = 0;
                }
                return result;
            }

            continue;
        }
        m = m * arr[i];
    }


    let result = [];

    for(let i=0; i < arr.length; i++) {
        if (arr[i] === 0) {
            result[i] = m;
        } else if(totalZeros > 0) {
            result[i] = 0;
        } else {
            result[i] = m/arr[i];
        }
    }

    return result;
}

module.exports = solution;