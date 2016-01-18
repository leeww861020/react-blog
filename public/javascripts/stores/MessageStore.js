import Dispatcher from '../core/Dispatcher';
import ActionConstants from '../constants/ActionConstants';
import ChatMessageUtils from '../util/ChatMessageUtils';

import BaseStore from './BaseStore'

var _messages = {};

class MessageStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
    }

    getAllForThread() {

        var messages = [];
        for (var id in _messages) {
            messages.push(_messages[id]);
        }
        messages.sort((a, b) => {
            if (a.date < b.date) {
                return -1;
            } else if (a.date > b.date) {
                return 1;
            }
            return 0;
        });
        return messages;
    }

    _registerToActions(payload) {
        let action = payload.action;
        switch (action.actionType) {
            case ActionConstants.CREATE_MESSAGE:
                var message = action.text;
                _messages[message.id] = message;
                break;
            default:
                return true;
        }

        this.emitChange();
        return true;
    }
}


export default new MessageStore();
