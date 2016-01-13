/**
 * Created by wonwoo on 16. 1. 11..
 */

var Dispatcher = require('../core/Dispatcher');
var ActionConstants = require('../constants/ActionConstants');
var Promise = require('es6-promise').Promise; // jshint ignore:line
var Api = require('../services/Api');

var CategoryActionCreator = {
    getCategories: function () {
        Api
            .get('category/')
            .then(function (categories) {
                Dispatcher.handleViewAction({
                    actionType: ActionConstants.RECEIVE_CATEGORY,
                    categories: categories
                });
            })
            .catch(function () {
                Dispatcher.handleViewAction({
                    actionType: ActionConstants.RECEIVE_ERROR,
                    error: 'There was a problem getting the Categoris'
                });
            });
    }
}

module.exports = CategoryActionCreator;