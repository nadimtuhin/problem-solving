function islandCount(matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  let counter = 0;

  for(let i = 0; i < row; i++) {
    for(let j = 0; j < col; j++) {
      if(matrix[i][j] === 1) {
        recursiveIslandMarker(matrix, i, j, row, col);
        console.log('done');
        counter++;
      }
    }
  }

  return counter;
}

function recursiveIslandMarker(matrix, i, j, row, col) {
  console.log('entered', i, j);
  matrix[i][j] = -1; // replace visited
  if(j-1>=0 && j-1<col) {
    let left = matrix[i][j-1];
    if(left === 1) recursiveIslandMarker(matrix, i, j-1);
  }

  if(j+1>=0 && j+1<col) {
    let right = matrix[i][j+1];
    if(right === 1) recursiveIslandMarker(matrix, i, j+1);
  }

  if(i+1>=0 && i+1<row) {
    let bottom = matrix[i+1][j];
    if(bottom === 1) recursiveIslandMarker(matrix, i+1, j);
  }

  if(i-1>=0 && i-1<row) {
    let top = matrix[i-1][j];
    if(top === 1) recursiveIslandMarker(matrix, i-1, j);
  }
}

module.exports = { islandCount }
