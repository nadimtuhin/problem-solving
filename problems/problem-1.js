// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

// visited = {
//     10: 7,
//     15: 2,
//     3: 14,
// }

function solution(arr, k) {
    const visited = {};

    for (let ii=0; ii<arr.length; ii++) {
        const current = arr[ii];
        const neededForK = k-current;

        if (typeof visited[neededForK] === 'undefined') {
             visited[current] = neededForK;
             continue;
        } else {
            return true;
        }
    }

    return false;
}

function es6Solution(arr, k) {
    const visited = {};

    return arr.some((current, ii) => {
        const neededForK = k-current;

        if (typeof visited[neededForK] === 'undefined') {
            visited[current] = neededForK;
            return false;
        }

        return true;
    });
}

module.exports = { solution, es6Solution };