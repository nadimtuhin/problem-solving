/**
 * @param {character[][]} board
 * @return {boolean}
 */

 function hasDuplicate(arr) {
  var hash = new Map();
  for(let ii=0; ii<arr.length; ii++) {
      if (hash.get(arr[ii])) return true;
      hash.set(arr[ii], 1);
  }
  return false;
}

function removeEmpty(nums) {
  return nums.filter(box => box !== '.')
}

function isRowValid(ii, board) {
 return !hasDuplicate(removeEmpty(board[ii]));
}

function isColumnValid(jj, board) {
  var nums = [];
  for(let ii=0; ii<9; ii++) {
      nums.push(board[ii][jj]);
  }
  return !hasDuplicate(removeEmpty(nums));
}

function isBoxValid([ii, jj], board) {
  var nums = [];

  for(let aa=0; aa<3; aa++) {
    nums.push(board[ii][jj+aa]);
    nums.push(board[ii+1][jj+aa]);
    nums.push(board[ii+2][jj+aa]);
  }

  return !hasDuplicate(removeEmpty(nums));
}

var isValidSudoku = function(board) {
  for (let ii=0; ii<9; ii++) {
      if (!isRowValid(ii, board)) return false;
      if (!isColumnValid(ii, board)) return false;
  }

  var isValid = [
    isBoxValid([0, 0], board),
    isBoxValid([3, 0], board),
    isBoxValid([6, 0], board),
    isBoxValid([0, 3], board),
    isBoxValid([3, 3], board),
    isBoxValid([6, 3], board),
    isBoxValid([0, 6], board),
    isBoxValid([3, 6], board),
    isBoxValid([6, 6], board),
  ].every(box => box)


  return isValid;
};


module.exports = { isValidSudoku };
