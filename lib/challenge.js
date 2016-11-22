'use strict';

let ROT13Cipher = {
  alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
  rotatedAlphabet: 'nopqrstuvwxyzabcdefghijklm'.split(''),

  _encodeLetter: function(letter) {
    // console.log('this is ', this);
    const index = this.alphabet.indexOf(letter);
    const encodedLetter = this.rotatedAlphabet[index];

    return encodedLetter;
  },

  _decodeLetter: function(letter) {
    const index = this.rotatedAlphabet.indexOf(letter);
    const decodedLetter = this.alphabet[index];

    return decodedLetter;
  },

  encode: function (message) {
    // console.log('this is ', this);
    const words = message.split(' ');

    const encodeWord = (word) => {
      return word.split('').map((letter) => {
        return this._encodeLetter(letter);
      }).join('');
    };
    const encodedWords = words.map(encodeWord);

    return encodedWords.join(' ');
  },

  decode: function (message) {
    const words = message.split(' ');

    const decodeWord = (word) => {
      return word.split('').map((letter) => {
          return this._decodeLetter(letter);
      }).join('');
    };

    const decodedWords = words.map(decodeWord);

    return decodedWords.join(' ');
  }
};

module.exports = ROT13Cipher;
