function islandCount(matrix) {
  let totalRows = matrix.length;
  let totalCols = matrix[0].length;
  let counter = 0;

  for(let currentRow = 0; currentRow < totalRows; currentRow++) {
    for(let currentCol = 0; currentCol < totalCols; currentCol++) {
      if(matrix[currentRow][currentCol] === 1) {
        recursiveIslandMarker(matrix, currentRow, currentCol, totalRows, totalCols);
        counter++;
      }
    }
  }

  return counter;
}

function recursiveIslandMarker(matrix, currentRow, currentCol, totalRows, totalCols) {
  matrix[currentRow][currentCol] = -1; // replace visited

  let leftIndex = currentCol-1,
    rightIndex = currentCol+1,
    topIndex = currentRow-1,
    bottomIndex = currentRow+1;

  if(leftIndex>=0 && totalCols>leftIndex) {
    let left = matrix[currentRow][leftIndex];
    if(left === 1) recursiveIslandMarker(matrix, currentRow, leftIndex, totalRows, totalCols);
  }

  if(rightIndex>=0 && totalCols>rightIndex) {
    let right = matrix[currentRow][rightIndex];
    if(right === 1) recursiveIslandMarker(matrix, currentRow, rightIndex, totalRows, totalCols);
  }

  if(topIndex>=0 && totalRows>topIndex) {
    let bottom = matrix[topIndex][currentCol];
    if(bottom === 1) recursiveIslandMarker(matrix, topIndex, currentCol, totalRows, totalCols);
  }

  if(bottomIndex>=0 && totalRows>bottomIndex) {
    let top = matrix[bottomIndex][currentCol];
    if(top === 1) recursiveIslandMarker(matrix, bottomIndex, currentCol, totalRows, totalCols);
  }
}

module.exports = { islandCount }
