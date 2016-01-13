/**
 * Created by crossys on 2016-01-13.
 */

import React, { Component } from 'react';


class Login extends Component{
    render () {
        return (
            <div id="myModal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h2 className="text-center"><img src="//placehold.it/110" className="img-circle" /><br>Login</br></h2>
                        </div>
                        <div className="modal-body row">
                            <h6 className="text-center">COMPLETE THESE FIELDS TO SIGN UP</h6>
                            <form className="col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
                                <div className="form-group">
                                    <input type="text" className="form-control input-lg" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control input-lg" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-danger btn-lg btn-block">Sign In</button>
                                    <span className="pull-right"><a href="#">Register</a></span><span><a href="#">Need help?</a></span>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <h6 className="text-center"><a href="">Privacy is important to us. Click here to read why.</a></h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Login;
