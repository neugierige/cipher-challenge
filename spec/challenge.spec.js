'use strict';

const chai = require('chai');
const expect = chai.expect;

const ROT13Cipher = require('../lib/challenge');

describe('ROT13Cipher', function () {
  it('encodes a single word', function () {
    const message = "rachelwuzheer";
    const encoded_message = "enpuryjhmurre";
    expect(ROT13Cipher.encode(message)).to.eql(encoded_message);
  });

  it('encodes multiple words', function () {
    const message = "rachel wuz heer";
    const encoded_message = "enpury jhm urre";
    expect(ROT13Cipher.encode(message)).to.eql(encoded_message);
  });

  it('decodes a single word', function () {
    const encoded_message = 'uryybjbeyq';
    const decoded_message = 'helloworld';
    expect(ROT13Cipher.decode(encoded_message)).to.eql(decoded_message);
  });

  it('decodes multiple words', function () {
    const encoded_message = "enpury jhm urre";
    const decoded_message = "rachel wuz heer";
    expect(ROT13Cipher.decode(encoded_message)).to.eql(decoded_message);
  });
});

// 'abcdefghijklmnopqrstuvwxyz
// 'nopqrstuvwxyzabcdefghijklm'
