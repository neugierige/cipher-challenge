'use strict';

var ROT13Cipher = (function () {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz '.split('');
    var rotatedAlphabet = 'nopqrstuvwxyzabcdefghijklm '.split('');

    var code = (function () {
        var obj = {};

        _.each(alphabet, function (letter, index, alphabet) {
          obj[alphabet[index]] = rotatedAlphabet[index];
        });

        return obj;
    })();

    var encode = function (phrase) {
        var encoded = [];

        _.each(phrase.split(''), function (letter, index, phrase) {
            encoded[index] = code[letter];
        });

        return encoded.join('');
    };

    return {
      encode: encode,
      decode: encode
    };
})();