const { isToeplitz } = require('./isToeplitz');

it('should test', () => {
  let matrix =
  [[1,2,3,4],
  [5,1,2,3],
  [6,5,1,2]];

 expect(isToeplitz(matrix)).toBe(true)
})
