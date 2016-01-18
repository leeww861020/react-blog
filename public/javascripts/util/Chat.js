/**
 * Created by wonwoo on 2016. 1. 18..
 */
import ActionConstants from '../constants/ActionConstants';


export default function (socket, Dispatcher) {

    socket.on('createdMessage', function (text) {
        Dispatcher.handleViewAction({
            actionType: ActionConstants.CREATE_MESSAGE,
            text: text,
        });
    });
};
