import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import { connect } from 'react-redux';
import { createPost } from '../../actions/post';
import PrivateRoute from '../../HOC/PrivateRoute';
class Editor extends Component {

    state = {
        body: null,
        title: ''
    }
    handleBodyChange = body => {
        this.setState({ body });
    }

    handleOnChange = e => {
        this.setState({ title: e.target.value });
    }

    handleOnClick = async isCreate => {
        if (isCreate) {
            console.log(this.state.title);
            console.log(this.state.body);

        } else {
            console.log('coment');

        }
    }
    render() {
        const { body, title } = this.state;
        const { theme, placeholder, isCreate, btnTitle, errors } = this.props;
        return (
            <div className="editor-container">
                {isCreate ? <div><span className='create-post-title'>Title: </span>
                    <input type="text"
                        onChange={this.handleOnChange}
                        placeholder='Post Title'
                        value={title}
                        className='create-post-input' />
                </div> : null
                }
                {errors.title && <div className="invalid">{errors.title}</div>}
                <ReactQuill
                    theme={theme}
                    onChange={this.handleBodyChange}
                    value={body}
                    modules={Editor.modules}
                    formats={Editor.formats}
                    bounds={'.create-post'}
                    placeholder={placeholder}
                />
                {errors.body && <div className="invalid">{errors.body}</div>}
                <button className='btn-create' onClick={() => this.handleOnClick(isCreate)}>{btnTitle}</button>
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

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, { createPost })(PrivateRoute(Editor));