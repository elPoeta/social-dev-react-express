import React, { Component } from 'react'
import CommentEditor from './CommentEditor';
import './Comment.css';

class Comment extends Component {
    render() {
        const { id } = this.props;
        return (
            <div className='comment-post'>
                <CommentEditor
                    theme="bubble"
                    placeholder="Reply to post..."
                    btnTitle="Submit"
                    id={id}
                />
            </div>
        )
    }
}

export default Comment;