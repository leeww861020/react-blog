'use strict';

import Dispatcher from '../core/Dispatcher';
import ActionConstants from '../constants/ActionConstants';
import { EventEmitter } from 'events';
import assign from 'object-assign';

var CHANGE_EVENT = 'change',
    _categories = [];

/**
 * Set the values for categories that will be used
 * with components.
 */

function setCategories(categories) {
  _categories = categories;
}

var CategoryStore = assign({}, EventEmitter.prototype, {

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCategories: function () {
    return _categories;
  },
});

CategoryStore.dispatchToken = Dispatcher.register(function (payload) {
  var action = payload.action;

  switch (action.actionType) {
    case ActionConstants.RECEIVE_CATEGORY:
      setCategories(action.categories.content);
      break;
    default:
      return true;
  }

  CategoryStore.emitChange();

  return true;
});

export default CategoryStore;
