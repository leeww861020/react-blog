/**
 * Created by wonwoo on 2016. 1. 18..
 */

module.exports = function (io, socket) {

    socket.on('join', function () {
        socket.join("ROOM");
    });

    socket.on('createMessage', function (newMessage) {
        io.sockets.emit('createdMessage', newMessage);
    });
}
