/**
 * This file is provided by Facebook for testing and evaluation purposes
 * only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import MessageListItem from './MessageListItem';
import MessageComposer from './MessageComposer';
import React, { Component } from 'react';
import MessageStore from '../stores/MessageStore';

import '../../stylesheets/chatapp.css';

function getStateFromStores() {
    return {
        messages: MessageStore.getAllForThread()
    };
}

function getMessageListItem(message) {
    return (
        <MessageListItem
            key={message.id}
            message={message}
        />
    );
}

export default class MessageSection extends Component {

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = getStateFromStores();
    }

    componentDidMount() {
        this._scrollToBottom();
        MessageStore.addChangeListener(this._onChange);
    }

    //
    componentWillUnmount() {
        MessageStore.removeChangeListener(this._onChange);
    }


    render() {
        var messageListItems = this.state.messages.map(getMessageListItem);
        return (
            <div className="message-section">
                <h3 className="message-thread-heading"></h3>
                <ul className="message-list" ref="messageList">
                    {messageListItems}
                </ul>
                <MessageComposer />
            </div>
        );
    }


    componentDidUpdate() {
        this._scrollToBottom();
    }

    _scrollToBottom() {
        var ul = this.refs.messageList;
        ul.scrollTop = ul.scrollHeight;
    }

    /**
     * Event handler for 'change' events coming from the MessageStore
     */
    _onChange() {
        this.setState(getStateFromStores());
    }

}
