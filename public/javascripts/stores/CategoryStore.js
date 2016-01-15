'use strict';

import Dispatcher from '../core/Dispatcher';
import ActionConstants from '../constants/ActionConstants';

import BaseStore from './BaseStore';


var CHANGE_EVENT = 'change',
    _categories = [];

/**
 * Set the values for categories that will be used
 * with components.
 */

function setCategories(categories) {
  _categories = categories;
}

class CategoryStore extends BaseStore{

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
  }

  _registerToActions(payload) {
    var action = payload.action;
    switch (action.action.actionType) {
      case ActionConstants.RECEIVE_CATEGORY:
       setCategories(action.action.categories.content);
          console.log(_categories)
        this.emitChange();
        break;
      default:
        break;
    };

  }

  get getCategories() {
    return this._categories;
  }

}

export default new CategoryStore();