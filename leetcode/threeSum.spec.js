const { threeSum } = require('./threeSum');

it('should test', () => {
  expect(threeSum([-1,0,1,2,-1,-4])).toStrictEqual([[ -1, 0, 1 ], [ -1, -1, 2 ]]);
});
