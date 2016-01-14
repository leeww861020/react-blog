/**
 * Created by crossys on 2016-01-14.
 */

import Dispatcher from '../core/Dispatcher';
import ActionConstants from '../constants/ActionConstants';
import { EventEmitter } from 'events';
import assign from 'object-assign';

var CHANGE_EVENT = 'change',
    _access_token = [];

/**
 * Set the values for categories that will be used
 * with components.
 */

function setAccess_Token(access_token) {
    _access_token = access_token;
}

var LoginStore = assign({}, EventEmitter.prototype, {

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getAccess_Token: function () {
        return _access_token;
    },
});

LoginStore.dispatchToken = Dispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.actionType) {
        case ActionConstants.RECEIVE_LOGIN:
            setAccess_Token(action.token);
            break;
        default:
            return true;
    }

    LoginStore.emitChange();

    return true;
});

export default LoginStore;