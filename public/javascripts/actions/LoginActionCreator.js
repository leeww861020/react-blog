/**
 * Created by crossys on 2016-01-14.
 */
'use strict';

import Dispatcher from '../core/Dispatcher';
import ActionConstants from '../constants/ActionConstants';
import { Promise } from'es6-promise'; // jshint ignore:line
import Api from '../services/Api';

var LoginActionCreator = {

    Login: function (username, password, data) {
        Api
            .oauth('oauth/token',username, password,data)
            .then(function (token) {
                Dispatcher.handleViewAction({
                    actionType: ActionConstants.RECEIVE_LOGIN,
                    token: token
                });
            })
            .catch(function (res) {
                Dispatcher.handleViewAction({
                    actionType: ActionConstants.RECEIVE_ERROR,
                    error: res
                });
            });
    },
};

export default LoginActionCreator;