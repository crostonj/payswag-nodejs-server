'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.paymentGET = function paymentGET (req, res, next) {
  Default.paymentGET(req.swagger.params, res, next);
};
