// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/*
edge cases
- length could be more than K
- length could be less than K
*/

if (!String.prototype.trimEnd) {
	String.prototype.trimEnd = function () {
		return this.replace(new RegExp(/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/.source + '$', 'g'), '');
	};
}

function solution(message, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (message.length <= K) {
      return message.trimEnd();
    }

    let short = message.slice(0, K);
    let lastChar = short.slice(-1);

    if (lastChar === ' ') {
      return short.trimEnd();
    }

    if (message[K] === ' ') {
      return short;
    }

    while((message.indexOf(K-1) !== ' ')) {
      K--;
      if (K == 0) break;
    }

    // we have residue of an word
    let lastSpaceIndex = short.lastIndexOf(' ');
    short = short.slice(0, lastSpaceIndex);

    // there could be multiple spaces at the end, so lets trim
    return short.trimEnd();
}


module.exports = { solution }
