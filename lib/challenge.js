'use strict';


let ROT13Cipher = {

  // alphabet: "abcdefghijklmnopqrstuvwxyz",

  encode: function(string, someNumber) {
    let alphaArray = "abcdefghijklmnopqrstuvwxyz".split('');
    someNumber = someNumber || 13;

    let caesarArray = [];
    alphaArray.forEach(function(element, index) {
      caesarArray.push(alphaArray[(index + someNumber)%26]);
    });
    // console.log(caesarArray);

    let charArray = string.split('');
    let newCharArray = charArray.map(function(element) {
      if (/[a-zA-Z]/.test(element)) {
        let alphaIndex = alphaArray.indexOf(element.toLowerCase());
        if (element === element.toUpperCase()) {
          element = caesarArray[alphaIndex].toUpperCase();
          return element;
        } else {
          element = caesarArray[alphaIndex];
          return element;
        }
      } else {
        return element;
      }
    });
    return newCharArray.join('');
  }
};

module.exports = {
  ROT13Cipher
};
