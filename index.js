'use strict';

var ap = require('ap');
var d = require('themeleon/decorators');
var fs = require('fs');
var q = require('q');
var swig = require('swig');

var renderFile = q.denodeify(swig.renderFile);
var writeFile = q.denodeify(fs.writeFile);

exports.swig = d.srcDest(function swig(src, dest) {
  var writeIndex = ap([dest], writeFile);
  this.push(renderFile(src, this.ctx).then(writeIndex));
});
