'use strict';

let _ = require('lodash');

let ROT13Cipher = {
  alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
  rotatedAlphabet: 'nopqrstuvwxyzabcdefghijklm'.split(''),

  cipher: (function () {
    var obj = {};

    _.each(this.alphabet, function (letter, index) {
      obj[this.alphabet[index]] = this.rotatedAlphabet[index];
    });

    return obj;
  })(),

  encode: function (word) {
    console.log('this is ', this);
    var encoded = [];

    _.each(word.split(''), function (letter, index) {
      encoded[index] = this.cipher[letter];
    });

    return encoded.join('');
  },
};

module.exports = ROT13Cipher;
