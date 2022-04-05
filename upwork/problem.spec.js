const { solution } = require('./problem');

it('should pass test for input', function() {
    expect(solution([1, 2, 3, 4])).toEqual([24, 12, 8, 6])
    expect(solution([2, 3, 4, 5])).toEqual([60,40,30,24])
    expect(solution([4, 3, 2, 1])).toEqual([6, 8, 12, 24])
    expect(solution([4, 3, 2, 1, 1])).toEqual([6, 8, 12, 24, 24])
    expect(solution([1, 5, 7, 2])).toEqual([70, 14, 10, 35])
    expect(solution([1, 1, 1, 1])).toEqual([1, 1, 1, 1])
    expect(solution([0, 1, 2, 3])).toEqual([6, 0, 0, 0])
    expect(solution([5, 5, 5, 5])).toEqual([125, 125, 125, 125])
    expect(solution([1, 2, 3, 0, 3, 2, 1])).toEqual([0, 0, 0, 36, 0, 0, 0])
    expect(solution([3, 2, 1, 2, 1, 2, 3])).toEqual([24, 36, 72, 36, 72, 36, 24])
    expect(solution([2, 13])).toEqual([13, 2])
});
