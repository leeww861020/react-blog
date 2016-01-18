'use strict';

import React from 'react';
import CodeMirrorEditor from './Codemirror';

module.exports = React.createClass({
    displayName: 'Editor',

    propTypes: {
        onChange: React.PropTypes.func.isRequired,
        value: React.PropTypes.string
    },

    onInputChange: function (e) {
        this.props.onChange(e.target.value);
    },

    render: function () {
        return (
            <form className="editor pure-form">
                <CodeMirrorEditor
                    mode="markdown"
                    theme="monokai"
                    value={this.props.value}
                    onChange={this.onInputChange}
                />
            </form>
        );
    }
});
