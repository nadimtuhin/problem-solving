function robotDirectionAfter(m) {
  let units = Math.floor(m/0.1);
  const directions = ['N', 'E', 'S', 'W'];

  let direction = null;
  let ii = 0;

  while(ii <= units) {
    console.log('---------');
    console.log(ii); console.log(units); console.log(direction);
    console.log('---------');

    if(!direction) {
      direction = directions[0];
      ii = ii + 1; continue;
    }

    if (direction === directions[0]) {
      ii = ii + 1;
      direction = directions[1];
    } else if (direction === directions[1]) {
      ii = ii + ii;
      direction = directions[2];
    } else if (direction === directions[2]) {
      direction = directions[3];
    } else if (direction === directions[3]) {
      ii = ii + ii;
      direction = directions[0];
    }
  }

  return direction;
}

// robotDirectionAfter( 0.3)  // ‘S’
// robotDirectionAfter( 7.25) // ‘N’
// robotDirectionAfter( 1.20) // ‘E’
// robotDirectionAfter(19.62) // ‘W’
/*

[
  1,
  1
  2,
  2
  3,
  3
  4 ,
  4
]

[
  1 = N
  1, = E

  1,
  1 = N+1

  1,
  1 = N+1


  1
  1
  1 = S +1


  1
  1
  1 = S + 1
]

*/


module.exports = { robotDirectionAfter }
