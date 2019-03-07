import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";
import RenderPost from "./RenderPost";
import Comment from "./Comment";
import RenderPostComment from "./RenderPostComment";
import { getPost, likePost, removeLikePost } from "../../actions/post";
import Spinner from "../common/Spinner";

import "./Post.css";
class Post extends Component {
  state = {
    showComments: false
  };
  async componentDidMount() {
    if (this.props.match.params.id) {
      await this.props.getPost(this.props.match.params.id);
    }
  }

  handleLikeOnClick = async () => {
    const { user } = this.props.auth;
    if (user.id !== this.props.post.post.user) {
      await this.props.likePost(this.props.post.post._id);
    }
  };
  handleRemoveLikeOnClick = async () => {
    await this.props.removeLikePost(this.props.post.post._id);
  };
  isUserLike = likes => {
    const { user } = this.props.auth;
    return likes.filter(like => like.user === user.id).length > 0;
  };
  handleShowComments = () => {
    this.setState((prevSate, props) => ({
      showComments: !prevSate.showComments
    }));
  };
  render() {
    const { post, loading } = this.props.post;
    const { isAuthenticated } = this.props.auth;

    let postContent;
    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner />;
    } else if (Object.keys(post).length > 0) {
      postContent = (
        <div className="post-container">
          <RenderPost body={post.body} id={post._id} post={post} />
          <div>
            <div className="renderpost-listmenu">
              <ul>
                {isAuthenticated ? (
                  !this.isUserLike(post.likes) ? (
                    <li>
                      <i
                        className="far fa-thumbs-up fa-2x i-renderlist-like"
                        onClick={this.handleLikeOnClick}
                      />
                    </li>
                  ) : this.isUserLike(post.likes) ? (
                    <li>
                      <i
                        className="far fa-thumbs-down fa-2x i-renderlist-unlike"
                        onClick={this.handleRemoveLikeOnClick}
                      />
                    </li>
                  ) : null
                ) : null}
                <li>
                  <i
                    className="far fa-comments fa-2x i-renderlist-comment"
                    onClick={this.handleShowComments}
                  />
                  {!this.state.showComments ? "View" : "Hide"}
                </li>
              </ul>
            </div>
          </div>
          <div>
            <hr className="divisor" />
          </div>

          <div className="comments-container">
            {this.state.showComments ? (
              post.comments.length === 0 ? (
                <h3>No comments for this post</h3>
              ) : (
                post.comments.map(comment => (
                  <section key={comment._id}>
                    <div className="comment-desc">
                      <div className="comment-desc-container">
                        <figure>
                          <img src={comment.avatar} alt={comment.name} />
                        </figure>
                        <h3>{comment.name}</h3>
                        <Moment format="DD-MM-YYYY">{comment.date}</Moment>
                      </div>
                      <RenderPostComment body={comment.body} />
                    </div>
                  </section>
                ))
              )
            ) : null}
          </div>
          {isAuthenticated ? (
            <div>
              <Comment id={post._id} />
            </div>
          ) : null}
        </div>
      );
    }
    return (
      <div className="renderpost-container">
        <div>
          <Link to="/feed" className="btn-back black">
            Back to feed
          </Link>
        </div>
        {postContent}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost, likePost, removeLikePost }
)(Post);
