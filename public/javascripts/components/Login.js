/**
 * Created by wonwoo on 2016-01-13.
 */

import React, { Component } from 'react';
import { Modal, Button ,ButtonToolbar } from "react-bootstrap";
import LoginStore from '../stores/LoginStore';
import LoginActionCreator from '../actions/LoginActionCreator';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';


export default class Login extends Component {

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = {
            login: LoginStore.isLogin()
        };
    }

    componentWillMount() {
        LoginStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        LoginStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({
            login: LoginStore.isLogin()
        });
    }

    render() {
        var loginButton;
        if (this.state.login) {
            loginButton = <LogoutButton />;
        } else {
            loginButton = <LoginButton />;
        }
        return (
            <li>
                {loginButton}
            </li>
        );
    }
}
