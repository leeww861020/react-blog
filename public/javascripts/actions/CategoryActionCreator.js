/**
 * Created by wonwoo on 16. 1. 11..
 */

import Dispatcher from '../core/Dispatcher';
import ActionConstants from '../constants/ActionConstants';
import { Promise } from'es6-promise'; // jshint ignore:line
import Api from '../services/Api';

export default {
    getCategories: function () {
        Api
            .get('category/')
            .then(function (categories) {
                Dispatcher.handleViewAction({
                    actionType: ActionConstants.RECEIVE_CATEGORY,
                    categories: categories
                });
            })
            .catch(function (error) {
                Dispatcher.handleViewAction({
                    actionType: ActionConstants.RECEIVE_ERROR,
                    error: error
                });
            });
    }
}
