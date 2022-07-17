const { p3NonConstructibleChange } = require('./p3NonConstructibleChange');

it('should test', () => {
  expect(p3NonConstructibleChange([
    1, 1,  2, 3,
    5, 7, 22
  ])).toBe(20)
})
