'use strict';

import Dispatcher from '../core/Dispatcher';
import ActionConstants from '../constants/ActionConstants';
import { EventEmitter } from 'events';
import assign from 'object-assign';

var CHANGE_EVENT = 'change',
    _posts = [] , _post;;

/**
 * Set the values for categories that will be used
 * with components.
 */
function setPosts(posts) {
	_posts = posts;
}

function setPost(post) {
	_post = post;
}

var PostsStore = assign({}, EventEmitter.prototype, {

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getPosts: function () {
    return _posts;
  },

  getPost: function () {
      console.log(_post)
	return _post;
  }
});

PostsStore.dispatchToken = Dispatcher.register(function (payload) {
  var action = payload.action;

  switch (action.actionType) {
    case ActionConstants.RECEIVE_POSTS:
      setPosts(action.posts.content);
      break;
    case ActionConstants.RECEIVE_POST:
      setPost(action.post);
      break;
    default:
      return true;
  }

 PostsStore.emitChange();

  return true;
});

export default PostsStore;
