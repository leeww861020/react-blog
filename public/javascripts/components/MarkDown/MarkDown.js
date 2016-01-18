/**
 * Created by wonwoo on 15. 12. 27..
 */

import React, { Component } from 'react';
import MarkdownControls from './Markdown-controls';
import Editor from './Editor';
import ReactMarkdown from 'react-markdown';
import hljs from 'highlight.js';
import { Tabs,Tab, Button } from 'react-bootstrap';

import PostsStore from '../../stores/PostsStore';
import PostsActionCreator from '../../actions/PostsActionCreator';


import 'codemirror/lib/codemirror.css';
import 'highlight.js/styles/github.css';
import 'codemirror/theme/monokai.css';
import '../../../stylesheets/markdown.css';

export default class MarkDown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            markdownSrc: [].join(''),
            htmlMode: 'raw'
        };
    }


    onMarkdownChange(md) {
        this.setState({
            markdownSrc: md
        });
    }

    highlightCodeBlocks() {
        if (this.state.markdownSrc.indexOf('```') === -1) {
            return;
        }

        var els = document.querySelectorAll('pre code');
        for (var i = 0; i < els.length; i++) {
            hljs.highlightBlock(els[i]);
        }
    }

    componentDidMount() {
        this.highlightCodeBlocks();

    }

    componentWillReceiveProps(props) {
        this.setState({
            markdownSrc: props.content
        });
    }

    componentDidUpdate() {
        this.highlightCodeBlocks();
    }

    onControlsChange(mode) {
        this.setState({htmlMode: mode});
    }

    writeClick() {
        var data = {
            content: this.state.markdownSrc,
            email: "aoruqjfu@gmail.com",
            category: {
                categoryId: 1
            },
            title: "create Test blog"
        }
        PostsActionCreator.createPost(data);
    }

    render() {
        return (
            <Tabs defaultActiveKey={1}>
                <Tab eventKey={1} title="write">
                    <div className="editor-pane">
                        <MarkdownControls
                            onChange={this.onControlsChange.bind(this)}
                            mode={this.state.htmlMode}
                        />
                        <Editor
                            value={this.state.markdownSrc}
                            onChange={this.onMarkdownChange.bind(this)}
                        />
                    </div>

                </Tab>
                <Tab eventKey={2} title="Preview changes">
                    <div className="result-pane">
                        <ReactMarkdown
                            className="result"
                            source={this.state.markdownSrc}
                            skipHtml={this.state.htmlMode === 'skip'}
                            escapeHtml={this.state.htmlMode === 'escape'}
                        />
                    </div>
                </Tab>
                <Button bsStyle="primary" onClick={this.writeClick.bind(this)}>
                    Write
                </Button>
            </Tabs>

        );
    }
}
//'# Live demo\n\nChanges are automatically rendered as you type.\n\n* Follows the ',
//    '[CommonMark](http://commonmark.org/) spec\n* Renders actual, "native" React DOM ',
//    'elements\n* Allows you to escape or skip HTML (try toggling the checkboxes above)',
//    '\n* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!\n',
//    '\n## HTML block below\n\n<blockquote>\n    This blockquote will change based ',
//    'on the HTML settings above.\n</blockquote>\n\n## How about some code?\n',
//    '```js\nvar React = require(\'react\');\nvar Markdown = require(\'react-markdown\');',
//    '\n\nReact.render(\n    <ReactMarkdown source="# Your markdown here" />,\n    document.',
//    'getElementById(\'content\')\n);\n```\n\nPretty neat, eh?\n\n', '## More info?\n\n',
//    'Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)\n\n',
//    '---------------\n\n',
//    'A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal'

