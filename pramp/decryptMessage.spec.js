const { decryptMessage } = require('./decryptMessage');

it('should test', () => {
 expect(decryptMessage('dnotq')).toBe('crime');
})
