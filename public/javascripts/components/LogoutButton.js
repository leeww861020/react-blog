/**
 * Created by wonwoo on 2016. 1. 18..
 */

import React, { Component } from 'react';
import { Modal, Button ,ButtonToolbar } from "react-bootstrap";
import LoginStore from '../stores/LoginStore';

import LoginActionCreator from '../actions/LoginActionCreator';

export default class LogoutButton extends Component {

    logout() {
        LoginActionCreator.logout();
    }

    render() {
        return (
            <a href="javascript:void(0)" onClick={this.logout.bind(this)}>
                Logout
            </a>
        );
    }
}


