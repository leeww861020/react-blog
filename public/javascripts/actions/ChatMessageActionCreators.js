/**
 * Created by wonwoo on 2016. 1. 18..
 */

import Dispatcher from '../core/Dispatcher';
import ActionConstants from '../constants/ActionConstants';
import ChatMessageUtils from '../util/ChatMessageUtils';

var socket = io.connect();

export default  {

    createMessage: function (text, id) {
        var message = ChatMessageUtils.getCreatedMessageData(text, id);
        socket.emit('createMessage', message);
    }
}
