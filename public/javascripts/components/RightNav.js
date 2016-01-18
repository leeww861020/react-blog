/**
 * Created by wonwoo on 15. 12. 27..
 */
import React, { Component } from 'react';
import CategoryStore from '../stores/CategoryStore';
import CategoryActionCreator from '../actions/CategoryActionCreator';
import PostsStore from '../stores/PostsStore';
import MessageSection from './MessageSection';
import PostsActionCreator from '../actions/PostsActionCreator';

export default class RightNav extends Component {

    render() {
        return (
            <div className="col-md-4">
                <Search />
                <Category />
                <MessageSection />
            </div>
        );
    }
}

class Search extends Component {

    SearchPosts() {
        PostsActionCreator.getSearchTitlePosts(this.refs.title.value);
    }

    render() {
        return (
            <div className="well">
                <h4>Blog Search</h4>
                <div className="input-group">
                    <input type="text" ref="title" className="form-control"/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" onClick={this.SearchPosts.bind(this)}>
                            <span className="glyphicon glyphicon-search"></span>
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}

class Category extends Component {

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = {
            categories: []
        };
    }

    componentWillMount() {
        CategoryStore.addChangeListener(this._onChange);
    }

    componentDidMount() {
        CategoryActionCreator.getCategories();
    }

    componentWillUnmount() {
        CategoryStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({
            categories: CategoryStore.getCategories()
        });
    }


    render() {
        var CategoryNode = this.state.categories.map((category, idx) => {
            return (
                <ul className="list-unstyled" key={idx}>
                    <li><a href="#">{category.name}</a></li>
                </ul>
            )
        });

        return (
            <div className="well">
                <h4>Blog Categories</h4>
                <div className="row">
                    <div className="col-lg-6">
                        {CategoryNode}
                    </div>
                </div>
            </div>
        )
    }
}
