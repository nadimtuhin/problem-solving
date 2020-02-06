const solution = require('./problem-2');

it('should test', function() {
    expect(solution([1, 2, 3])).toEqual([6, 3, 2]);
    expect(solution([0, 2, 3])).toEqual([6, 0, 0]);
    expect(solution([0, 2, 0])).toEqual([0, 0, 0]);
    expect(solution([0, 0, 0])).toEqual([0, 0, 0]);
    expect(solution([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
    expect(solution([3, 2, 1])).toEqual([2, 3, 6]);
});