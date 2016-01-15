'use strict';

import Dispatcher from '../core/Dispatcher';
import ActionConstants from '../constants/ActionConstants';
import BaseStore from './BaseStore'

class CategoryStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
        this.categories;
    }

    _registerToActions(payload) {
        let action = payload.action;
        switch (action.actionType) {
            case ActionConstants.RECEIVE_CATEGORY:
                this.categories = action.categories.content;
                break;
            default:
                return true;
        }
        this.emitChange();
        return true;
    }

    getCategories() {
        return this.categories;
    }

}

export default new CategoryStore();
