import React, { Component } from 'react';
import ReactQuill from 'react-quill';

class Editor extends Component {

    state = {
        body: '',
        title: ''
    }
    handleChange = html => {

        this.setState({ body: html });
    }

    render() {
        return (
            <div>
                <input type="text" placeholder='Post Title' value={this.state.title} />
                <ReactQuill
                    theme='snow'
                    onChange={this.handleChange}
                    value={this.state.body}
                    modules={Editor.modules}
                    formats={Editor.formats}
                    bounds={'.app'}
                    placeholder={this.props.placeholder}
                />
                <button className='btn-create'>create</button>
            </div>
        )
    }
}

Editor.modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        matchVisual: false,
    }
}

Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
]



export default Editor;

/*
 * Render component on page

ReactDOM.render(
    <Editor placeholder={'Write something...'} />,
    document.querySelector('.app')
)
*/