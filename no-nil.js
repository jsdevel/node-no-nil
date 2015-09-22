'use strict';

var noUtils = require('no-utils');

module.exports = noNil;

function noNil(input) {
  return noUtils.transform(input, isNil);
}

function isNil(value) {
  return value === undefined || value === null;
}
