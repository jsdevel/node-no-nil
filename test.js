'use strict';

var chai = require('chai');
var expect = chai.expect;
var noNil = require('./');

chai.should();

describe('no-nil', function() {
  it('should remove undefined and null values from objects', function() {
    var input = {boo: undefined, foo: null, coo: 5};

    var result = noNil(input);

    expect('boo' in result).to.be.false;
    expect('foo' in result).to.be.false;
    result.coo.should.equal(5);
  });

  it('should remove undefined and null values from arrays', function() {
    var input = [null, undefined, 4];

    var result = noNil(input);

    result.length.should.equal(1);
    result[0].should.equal(4);
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
