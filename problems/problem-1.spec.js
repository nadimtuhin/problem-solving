const { solution, es6Solution } = require('./problem-1');

it('should test for solution', function() {
    expect(solution([10, 15, 3, 7], 17)).toEqual(true);
    expect(solution([10, 15, 3], 17)).toEqual(false);
    expect(solution([1, 2, 3], 3)).toEqual(true);
    expect(solution([0, 1, 2, 3], 3)).toEqual(true);
});

it('should test for es6 solution', function() {
    expect(es6Solution([10, 15, 3, 7], 17)).toEqual(true);
    expect(es6Solution([10, 15, 3], 17)).toEqual(false);
    expect(es6Solution([1, 2, 3], 3)).toEqual(true);
    expect(es6Solution([0, 1, 2, 3], 3)).toEqual(true);
});