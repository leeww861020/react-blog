"use strict";

import React, { Component } from 'react';
import CodeMirror from 'codemirror';

var IS_MOBILE = typeof navigator === 'undefined' || (
        navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    );

export default class CodeMirrorEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isControlled: this.props.value != null
        };
    }

    componentDidMount() {
        var isTextArea = this.props.forceTextArea || IS_MOBILE;
        if (!isTextArea) {
            this.editor = CodeMirror.fromTextArea(this.refs.editor, this.props);
            this.editor.on('change', this.handleChange.bind(this));
        }
    }

    componentDidUpdate() {
        if (this.editor) {
            if (this.props.value != null) {
                if (this.editor.getValue() !== this.props.value) {
                    this.editor.setValue(this.props.value);
                }
            }
        }
    }

    handleChange() {
        if (this.editor) {
            var value = this.editor.getValue();
            if (value !== this.props.value) {
                this.props.onChange && this.props.onChange({target: {value: value}});
                if (this.editor.getValue() !== this.props.value) {
                    if (this.state.isControlled) {
                        this.editor.setValue(this.props.value);
                    } else {
                        this.props.value = value;
                    }
                }
            }
        }
    }

    render() {
        var editor = React.createElement('textarea', {
            ref: 'editor',
            value: this.props.value,
            readOnly: this.props.readOnly,
            defaultValue: this.props.defaultValue,
            onChange: this.props.onChange,
            style: this.props.textAreaStyle,
            className: this.props.textAreaClassName || this.props.textAreaClass
        });
        return React.createElement('div', {style: this.props.style, className: this.props.className}, editor);
    }
}

CodeMirrorEditor.propTypes = {
    value: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    onChange: React.PropTypes.func
}
