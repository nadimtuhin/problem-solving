const { echoCarSeatPlanner } = require('./echoCarSeatPlanner');

it('should test', () => {
  expect(echoCarSeatPlanner([1, 4, 1], [1, 5, 1])).toBe(2);
  expect(echoCarSeatPlanner([4, 4, 2, 4], [5, 5, 2, 5])).toBe(3);
  expect(echoCarSeatPlanner([2, 3, 4, 2], [2, 5, 7, 2])).toBe(2);
 })

 it('should test equal seat equal people with no search', () => {
  expect(echoCarSeatPlanner([1], [1])).toBe(1);
  expect(echoCarSeatPlanner([], [])).toBe(0);
  expect(echoCarSeatPlanner([2, 2], [2, 2])).toBe(2);
 })
