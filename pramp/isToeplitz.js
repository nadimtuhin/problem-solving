function isToeplitz(arr) {
	/**
	@param arr: integer[][]
	@return: boolean
	*/

  let row = arr.length, col=arr[0].length;

	for(let ii=0; ii<row; ii++) {
    for(let jj=0; jj<col; jj++) {
      if(ii+1>=row) continue;
      if(jj+1>=col) continue;

      let nextTpltz = arr[ii+1][jj+1];
      if (nextTpltz === arr[ii][jj]) continue;
      return false;
    }
  }

  return true;
}

/*
[[1,2,3,4],
 [5,1,2,3],
 [6,5,1,2]]
*/

module.exports = { isToeplitz }
