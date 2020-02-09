const solution = require('./problem-1');

it('should test', function() {
    expect(solution([10, 15, 3, 7], 17)).toEqual(true);
    expect(solution([10, 15, 3], 17)).toEqual(false);
    expect(solution([1, 2, 3], 3)).toEqual(true);
    expect(solution([0, 1, 2, 3], 3)).toEqual(true);
});