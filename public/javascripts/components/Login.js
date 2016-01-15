/**
 * Created by wonwoo on 2016-01-13.
 */

import React, { Component } from 'react';
import { Modal, Button ,ButtonToolbar } from "react-bootstrap";
import LoginStore from '../stores/LoginStore';
import LoginActionCreator from '../actions/LoginActionCreator';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = {
            show : false,
        };
    }


    Login(){
        //var data = {
        //    username : this.refs.email.value,
        //    password : this.refs.password.value,
        //    grant_type : "password",
        //    scope : "read write"
        //};
        var data = {
            username : "aoruqjfu@gmail.com",
            password : "pwadmin",
            grant_type : "password",
            scope : "read write"
        };
        console.log(data);
        LoginActionCreator.Login("wonwooapp","XX0000001",data);
    }

    componentWillMount() {
        LoginStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        LoginStore.removeChangeListener(this._onChange);
    }

    showModal() {
        this.setState({show: true});
    }

    hideModal() {
        this.setState({show: false});
    }

    _onChange(){
        if(LoginStore.isLogin()){
            this.hideModal();
        }
    }

    render() {
        return (
            <ButtonToolbar>
                <Button bsStyle="primary" onClick={this.showModal.bind(this)}>
                    Login
                </Button>

                <Modal
                    {...this.props}
                    show={this.state.show}
                    onHide={this.hideModal.bind(this)}
                    dialogClassName="custom-modal"
                >
                    <Modal.Header closeButton>
                        <h2 className="text-center"><img src="//placehold.it/110" className="img-circle" /><br></br>Login</h2>
                    </Modal.Header>
                    <Modal.Body>
                        <h6 className="text-center">COMPLETE THESE FIELDS TO SIGN UP</h6>
                        <div className="col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
                            <div className="form-group">
                                <input type="text" className="form-control input-lg" placeholder="Email" ref="email" id="username"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control input-lg" placeholder="Password" id="password" ref="password"/>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-danger btn-lg btn-block" onClick={this.Login.bind(this)}>Sign In</button>
                                <span className="pull-right"><a href="#">Register</a></span><span><a href="#">Need help?</a></span>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.hideModal.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </ButtonToolbar>
        );
    }
}

