/**
 * Created by wonwoo on 15. 12. 27..
 */
import React, { Component } from 'react';
import PostsStore from '../stores/PostsStore';
import PostsActionCreator from '../actions/PostsActionCreator';
import MarkDown from './MarkDown/MarkDown';

export default class Content extends Component {

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = this.getStateStore();
    }

    getStateStore(props) {
        this.id = props ? props.params : this.props.params;
        return {
            post: {}
        }
    }

    componentWillMount() {
        PostsStore.addChangeListener(this._onChange);
    }

    componentDidMount() {
        PostsActionCreator.getPost(this.id.id);
    }

    componentWillUnmount() {
        PostsStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({
            post: PostsStore.getPost()
        });
    }

    render() {
        return (
            <div className="col-md-8">
                <h1>{this.state.post.title}</h1>
                <p className="lead">
                    by <a href="#">{this.state.post.email}</a>
                </p>
                <hr>
                </hr>
                <p><span className="glyphicon glyphicon-time"></span> Posted on August 24, 2013 at 9:00 PM</p>
                <hr></hr>
                <MarkDown content={this.state.post.content}/>
            </div>
        );
    }
}

