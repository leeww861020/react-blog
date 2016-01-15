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
        this.access_token;
    }

    _registerToActions(payload) {
        let action = payload.action;
        switch (action.actionType) {
            case ActionConstants.RECEIVE_LOGIN:
                this.access_token = action.token;
                localStorage.setItem('token', this.access_token);
                break;
            default:
                return true;
        }
        this.emitChange();

        return true;
    }

    getToken () {
        return this.access_token;
    }

    isLogin(){
        return getLocalToken() != null;
    }
}

function getLocalToken(){
    return localStorage.getItem("token");
}

export default new LoginStore();
