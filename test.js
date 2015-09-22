'use strict';

var chai = require('chai');
var expect = chai.expect;
var noNil = require('./');

chai.should();

describe('no-nil', function() {
  it('should remove undefined and null values from objects', function() {
    var input = {boo: undefined, foo: null, coo: 5};

    noNil(input);

    expect('boo' in input).to.be.false;
    expect('foo' in input).to.be.false;
    input.coo.should.equal(5);
  });

  it('should remove undefined and null values from arrays', function() {
    var input = [null, undefined, 4];

    noNil(input);

    input.length.should.equal(1);
    input[0].should.equal(4);
  });

  it('should return null for other undefined or null', function() {
    expect(noNil(null)).to.be.null;
    expect(noNil(undefined)).to.be.null;
  });

  it('should return all other values', function() {
    var expected = 'asdfasdf';

    noNil(expected).should.equal(expected);
  });
});
