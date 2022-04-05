const { solution } = require('./string');

it('should test', () => {
 expect(solution('The quick brown fox jumps over the lazy dog', 39)).toBe('The quick brown fox jumps over the lazy');
 expect(solution('codility we test coders', 14)).toBe('codility we');
 expect(solution('To crop or not to crop', 19)).toBe('To crop or not to');
})
