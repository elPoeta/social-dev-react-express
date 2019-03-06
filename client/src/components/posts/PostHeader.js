import React from 'react'
import Moment from 'react-moment'
const PostHeader = props => {
    const { post } = props;
    return (
        <div className="post-header">
            <div className='post-header-name-img-container'>
                <figure>
                    <img src={post.avatar} alt={post.name} className='post-header-avatar' />
                </figure>

                <h4 className="post-header-username">{post.name}</h4>
            </div>
            <div>
                <div>
                    <h2 className="post-header-title">{post.title}</h2>
                    <hr className="divisor-postheader" />
                </div>
                <ul className='post-header-icons-list'>
                    <li>
                        <i className="far fa-calendar-alt fa-2x i-color-wh" />{" "}
                        <Moment format="DD-MM-YYYY">{post.date}</Moment>
                    </li>
                    <li>
                        <i className="far fa-thumbs-up fa-2x i-color-wh" /> {post.likes.length}
                    </li>
                    <li>
                        <i className="far fa-comments fa-2x i-color-wh" />{" "}
                        {post.comments.length}
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default PostHeader;
