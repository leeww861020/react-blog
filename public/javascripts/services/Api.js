'use strict';

import request from 'superagent';
import {Promise} from  'es6-promise'; // jshint ignore:line

import ConfigConstants from '../constants/ConfigConstants';

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
  },
  oauth : function(url,username, password,data){
    return new Promise(function(resolve, reject){
        request
            .post(ConfigConstants.API_URL + url)
            .auth(username,password)
            .query(data)
            .end(function(res){
                if (res.status === 404) {
                    reject();
                } else {
                    resolve(JSON.parse(res.text));
                }
            });
        });
    }
};

export default Api;