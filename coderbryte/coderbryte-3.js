function LetterChanges(str) {
  const strArr = str.split("");
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  str = "";

  for (let ii = strArr.length - 1; ii >= 0; ii--) {
    let char = strArr[ii];
    let code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      if (code === 90) {
        code = 65;
      } else code++;

      char = String.fromCharCode(code);
      console.log(char);
    } else if (code >= 97 && code <= 122) {
      if (code === 122) {
        code = 97;
      } else code++;

      char = String.fromCharCode(code);
    }

    if (~vowels.indexOf(char)) {
      char = char.toUpperCase();
    }

    str = char + str;
  }

  // code goes here
  return str;
}

module.exports = { LetterChanges };
