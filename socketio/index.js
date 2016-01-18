/**
 * Created by wonwoo on 2016. 1. 18..
 */

module.exports = function (io) {
    io.on('connection', function (socket) {
        require('./ChatMessage.js')(io, socket);
    });

    io.on('disconnect', function () {
        io.reconnect();
    });
};
