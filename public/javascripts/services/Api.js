'use strict';

var request = require('superagent');
var Promise = require('es6-promise').Promise; // jshint ignore:line

var ConfigConstants = require('../constants/ConfigConstants');

/**
 * Wrapper for calling a API
 */
var Api = {
  get: function (url) {
    return new Promise(function (resolve, reject) {
      request
        .get(ConfigConstants.API_URL + url)
        .end(function (res) {
          if (res.status === 404) {
            reject();
          } else {
            resolve(JSON.parse(res.text));
          }
        });
    });
  }
};

module.exports = Api;