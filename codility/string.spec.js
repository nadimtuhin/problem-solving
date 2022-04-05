const { solution } = require('./string');

it('should test', () => {
 expect(solution('The quick brown fox jumps over the lazy dog', 39))
  .toBe('The quick brown fox jumps over the lazy');
 expect(solution('codility we test coders', 14)).toBe('codility we');
 expect(solution('To crop or not to crop', 19)).toBe('To crop or not to');

 // empty test
 expect(solution('', 19)).toBe('');
 expect(solution(' ', 19)).toBe('');

 // dont remove starting space
 expect(solution(' 1', 19)).toBe(' 1');

 // start with number
 expect(solution('1', 19)).toBe('1');

 // space on both sides
 expect(solution(' 12 ', 19)).toBe(' 12');
 expect(solution(' is ', 5)).toBe(' is');

 // single digit words at the end tests
 expect(solution(' is a', 4)).toBe(' is');
 expect(solution(' is a', 5)).toBe(' is a');
});
