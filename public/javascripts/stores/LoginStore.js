/**
 * Created by crossys on 2016-01-14.
 */

import Dispatcher from '../core/Dispatcher';
import ActionConstants from '../constants/ActionConstants';

import BaseStore from './BaseStore'

class LoginStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
        this.token;
    }

    _registerToActions(payload) {
        let action = payload.action;
        switch (action.actionType) {
            case ActionConstants.RECEIVE_LOGIN:
                this.token = action.token;
                setStorage('token', this.token);
                break;
            case ActionConstants.RECEIVE_LOGOUT:
                removeItem('token');
                break;
            case ActionConstants.RECEIVE_LOGIN_ERROR:
                break;
            default:
                return true;
        }

        this.emitChange();
        return true;
    }

    getToken() {
        return this.token;
    }

    getAccessToken() {
        return getLocalToken().access_token;
    }

    isLogin() {
        return getLocalToken() != null;
    }
}

function getLocalToken() {
    return getStorage("token");
}

function getStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
        return JSON.parse(value);
    }
    return null;
}

function removeItem(key) {
    localStorage.removeItem(key);
}
function setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export default new LoginStore();
