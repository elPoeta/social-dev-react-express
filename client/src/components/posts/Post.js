import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import RenderPost from "./RenderPost";
import { getPost, likePost, removeLikePost } from "../../actions/post";
import Spinner from "../common/Spinner";

import "./Post.css";
class Post extends Component {
  async componentDidMount() {
    if (this.props.match.params.id) {
      await this.props.getPost(this.props.match.params.id);
    }
  }
  handleLikeOnClick = async () => {
    await this.props.likePost(this.props.post.post._id);
  };
  handleRemoveLikeOnClick = async () => {
    await this.props.removeLikePost(this.props.post.post._id);
  };
  findUserLike = likes => {
    const { user } = this.props.auth;
    return likes.filter(like => like.user === user.id).length > 0;
  };
  render() {
    const { post, loading } = this.props.post;

    let postContent;
    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner />;
    } else if (Object.keys(post).length > 0) {
      postContent = (
        <div className="post-container">
          <RenderPost body={post.body} id={post._id} post={post} />
          <div>
            <hr className="divisor" />
            <div className="renderpost-listmenu">
              <ul>
                {!this.findUserLike(post.likes) ? (
                  <li>
                    <i
                      className="far fa-thumbs-up fa-2x i-renderlist-like"
                      onClick={this.handleLikeOnClick}
                    />
                  </li>
                ) : null}
                {this.findUserLike(post.likes) ? (
                  <li>
                    <i
                      className="far fa-thumbs-down fa-2x i-renderlist-unlike"
                      onClick={this.handleRemoveLikeOnClick}
                    />
                  </li>
                ) : null}
                <li>
                  <i className="far fa-comments fa-2x i-renderlist-comment" />
                  Add
                </li>
              </ul>
            </div>
          </div>
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
