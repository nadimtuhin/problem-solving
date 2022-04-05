function decryptMessage(word) {
  if (!word.length) return;
  let msg = '';

  // your code goes here
  let firstCharCode = word.charCodeAt(0);
  let charCodeSum = firstCharCode;

  // first rule
  msg = String.fromCharCode(firstCharCode - 1);

  for(ii=1; ii<word.length; ii++) {
    let charCode = word.charCodeAt(ii) - charCodeSum;
    // console.log("======");
    // console.log(word.charCodeAt(ii));
    // console.log(charCode);
    // console.log(charCodeSum);

    while(charCode<97) {
      charCode = charCode + 26;
    }

    msg+=String.fromCharCode(charCode);
    charCodeSum+= msg.charCodeAt(ii);
  }

  return msg;
}


module.exports = { decryptMessage }
