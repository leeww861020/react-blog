'use strict';

import Dispatcher from '../core/Dispatcher';
import ActionConstants from '../constants/ActionConstants';
import BaseStore from './BaseStore'

class PostsStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
    this.posts;
    this.post;
  }

  _registerToActions(payload) {
    let action = payload.action;
    switch (action.actionType) {
      case ActionConstants.RECEIVE_POSTS:
        this.posts = action.posts.content;
        break;
      case ActionConstants.RECEIVE_POST:
        this.post = action.post;
        break;
      default:
        return true;
    }

    this.emitChange();

    return true;
  }

  getPosts() {
    return this.posts;
  }
  getPost(){
    return this.post;
  }

}

export default new PostsStore();
