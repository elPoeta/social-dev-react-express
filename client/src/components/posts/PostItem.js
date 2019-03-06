import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "./PostFeed.css";

const PostItem = props => {

  const { post } = props;
  return (
    <div className="post-item">
      <div>
        <img src={post.avatar} alt={post.name} />
        <h4>{post.name}</h4>
      </div>
      <div className="post-item-description">
        <div>
          <h2>{post.title}</h2>
          <hr className="divisor-credentials" />
        </div>

        <ul>
          <li>
            <i className="far fa-calendar-alt i-post-item" />{" "}
            <Moment format="DD-MM-YYYY">{post.date}</Moment>
          </li>
          <li>
            <i className="far fa-thumbs-up i-post-item" /> {post.likes.length}
          </li>
          <li>
            <i className="far fa-comments i-post-item" />{" "}
            {post.comments.length}
          </li>
          <li>
            {" "}
            <Link to={`/post/${post._id}`}>View</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default PostItem;
