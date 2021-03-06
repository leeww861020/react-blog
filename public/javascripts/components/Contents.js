/**
 * Created by wonwoo on 15. 12. 27..
 */
//var React = require('react');
//var PostsStore = require('../stores/PostsStore');
//var PostsActionCreator = require('../actions/PostsActionCreator');
//
//var Link = require('react-router').Link


import React, { Component } from 'react';
import PostsStore from '../stores/PostsStore';
import PostsActionCreator from '../actions/PostsActionCreator';
import Router , { Link } from 'react-router';


export default class Contents extends Component {

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = {
            posts: []
        };
    }

    componentWillMount() {
        PostsStore.addChangeListener(this._onChange);
    }

    componentDidMount() {
        PostsActionCreator.getPosts();
    }

    componentWillUnmount() {
        PostsStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({
            posts: PostsStore.posts
        });
    }

    render() {
        if (this.state.posts) {
            var PostNode = this.state.posts.map((post, idx) => {
                return (
                    <div key={idx}>
                        <h2>
                            {post.title}
                        </h2>
                        <p className="lead">
                            by <a href="index.php">{post.email}</a>
                        </p>
                        <p><span className="glyphicon glyphicon-time"></span> Posted on August 28, 2013 at 10:00 PM</p>
                        <hr></hr>
                        <p>{post.content}</p>
                        <Link className="btn btn-primary" to={`/content/${post.id}`}>Read More <span
                            className="glyphicon glyphicon-chevron-right"></span></Link>
                        <hr></hr>
                    </div>
                )
            });
        }
        return (
            <div className="col-md-8">
                <h1 className="page-header">
                    Page Heading
                </h1>
                <ul className="pager">
                    <li className="next">
                        <Link to={`/content/`}>wirte</Link>
                    </li>
                </ul>
                {PostNode}
                <ul className="pager">
                    <li className="previous">
                        <a href="#">&larr; Older</a>
                    </li>
                    <li className="next">
                        <a href="#">Newer &rarr;</a>
                    </li>
                </ul>
            </div>
        );
    }
}

