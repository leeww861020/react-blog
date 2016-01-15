'use strict';

import Dispatcher from '../core/Dispatcher';
import ActionConstants from '../constants/ActionConstants';
import { Promise } from'es6-promise'; // jshint ignore:line
import Api from '../services/Api';

export default {

  getPosts: function () {
    Api
      .get('post')
      .then(function (posts) {
        Dispatcher.handleViewAction({
          actionType: ActionConstants.RECEIVE_POSTS,
          posts: posts
        });        
      })
      .catch(function () {
        Dispatcher.handleViewAction({
          actionType: ActionConstants.RECEIVE_ERROR,
          error: 'There was a problem getting the Posts'
        });      
      });
   },
  getPost: function (id) {
     Api
        .get('post/'+id)
        .then(function (post) {
            Dispatcher.handleViewAction({
                actionType: ActionConstants.RECEIVE_POST,
                post: post
            });
        })
        .catch(function () {
            Dispatcher.handleViewAction({
                actionType: ActionConstants.RECEIVE_ERROR,
                error: 'There was a problem getting the Posts'
            });
        });
    }
};