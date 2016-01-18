/**
 * Created by wonwoo on 2016. 1. 18..
 */

import React, { Component } from 'react';


export default class MessageListItem extends Component {

    //propTypes: {
    //    message: ReactPropTypes.object
    //},

    render() {
        var message = this.props.message;
        return (
            <li className="message-list-item">
                <h5 className="message-author-name">{message.authorName}</h5>
                <div className="message-time">
                    {new Date(message.date).toLocaleTimeString()}
                </div>
                <div className="message-text">{message.text}</div>
            </li>
        );
    }
}

