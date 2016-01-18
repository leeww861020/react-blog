/**
 * Created by wonwoo on 2016. 1. 16..
 */
'use strict';

import React, { Component } from 'react';
//require('../../stylesheets/markdown.css');

export default class Controls extends Component {

    onChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        var rawChecked = this.props.mode === 'raw',
            skipChecked = this.props.mode === 'skip',
            escapeChecked = this.props.mode === 'escape';

        return (
            <div className="markdown-controls">
                <form className="pure-form pure-form-inline">
                    <fieldset>
                        <legend>HTML mode:</legend>

                        <label htmlFor="raw-html" className="pure-checkbox">
                            Raw&nbsp;
                            <input
                                id="raw-html"
                                name="html-mode"
                                type="radio"
                                value="raw"
                                checked={rawChecked}
                                onChange={this.onChange.bind(this)}
                            />
                        </label>

                        <label htmlFor="escape-html" className="pure-checkbox">
                            Escape&nbsp;
                            <input
                                id="escape-html"
                                name="html-mode"
                                type="radio"
                                value="escape"
                                checked={escapeChecked}
                                onChange={this.onChange.bind(this)}
                            />
                        </label>

                        <label htmlFor="skip-html" className="pure-checkbox">
                            Skip&nbsp;
                            <input
                                id="skip-html"
                                name="html-mode"
                                type="radio"
                                value="skip"
                                checked={skipChecked}
                                onChange={this.onChange.bind(this)}
                            />
                        </label>
                    </fieldset>
                </form>
            </div>
        );
    }
}
Controls.defaultProps = {
    mode: 'raw'
}

Controls.propTypes = {
    mode: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
}
