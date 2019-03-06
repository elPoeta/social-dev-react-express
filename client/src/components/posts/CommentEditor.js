import React, { Component } from 'react'
import ReactQuill from 'react-quill';

class CommentEditor extends Component {
    render() {
        const { body, placeholder, theme, btnTitle } = this.props;
        return (
            <div className="comment-editor-container">
                <h3 className='comment-title'>Comment</h3>
                <ReactQuill
                    theme={theme}
                    onChange={this.handleBodyChange}
                    value={body || ''}
                    modules={CommentEditor.modules}
                    formats={CommentEditor.formats}
                    bounds={".app"}
                    placeholder={placeholder}
                />
                <div>
                    <button
                        className="btn-create"

                    >
                        {btnTitle}
                    </button>
                </div>
            </div>
        )
    }
}

CommentEditor.modules = {
    toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ size: [] }],
        [
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "link",
            "code-block"
        ],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" }
        ],
        [{ align: [] }],
        ["link"],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }]
    ],
    clipboard: {
        matchVisual: false
    }
};

CommentEditor.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "color",
    "align",
    "background",
    "script",
    "code-block"
];


export default CommentEditor;
