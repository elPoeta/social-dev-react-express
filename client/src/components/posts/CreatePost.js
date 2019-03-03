import React, { Component } from 'react'
import Editor from './Editor';
import './CreatePost.css';
class AddPost extends Component {
    render() {
        return (
            <div className='create-post'>
                <Editor placeholder='Write something...' />
            </div>
        )
    }
}

export default AddPost;