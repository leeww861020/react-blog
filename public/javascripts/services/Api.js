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
                    response(res, resolve, reject);
                });
        });
    },
    post: function (url, data) {
        return new Promise(function (resolve, reject) {
            console.log("123");
            request
                .post(ConfigConstants.API_URL + url, data)
                .end(function (res) {
                    console.log(res);
                    response(res, resolve, reject);
                });
        });
    },
    oauth: function (url, username, password, data) {
        return new Promise(function (resolve, reject) {
            request
                .post(ConfigConstants.API_URL + url)
                .auth(username, password)
                .query(data)
                .end(function (res) {
                    response(res, resolve, reject);
                });
        });
    }
};

function response(res, resolve, reject) {
    if (res.status >= 200 && res.status < 300) {
        resolve(JSON.parse(res.text));
    } else {
        reject();
    }
}


export default Api;
