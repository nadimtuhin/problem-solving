const { pollution } = require('./pollution');

it('should test', () => {
 expect(pollution([5, 19, 8, 1])).toBe(3)
 expect(pollution([10, 10])).toBe(2)
 expect(pollution([3, 0, 5])).toBe(2)
})
