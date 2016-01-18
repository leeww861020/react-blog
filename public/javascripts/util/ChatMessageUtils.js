/**
 * Created by wonwoo on 2016. 1. 18..
 */


export default {
    getCreatedMessageData: function (text, userId) {
        var timestamp = Date.now();
        return {
            id: 'm_' + timestamp,
            authorName: userId, // hard coded for the example
            date: timestamp,
            text: text,
            isRead: true
        };
    }
};
