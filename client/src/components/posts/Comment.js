import React, { Component } from 'react'
import CommentEditor from './CommentEditor';
import './Comment.css';

class Comment extends Component {
    render() {
        return (
            <div className='comment-post'>
                <CommentEditor
                    theme="bubble"
                    placeholder="Reply to post..."
                    btnTitle="Submit"
                />
            </div>
        )
    }
}

export default Comment;