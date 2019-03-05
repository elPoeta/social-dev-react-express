import React, { Component } from "react";
import { Link } from 'react-router-dom';
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
    console.log(this.props.post.post._id);
    // await this.props.likePost(this.state.id);
  }
  handleRemoveLikeOnClick = async () => {
    console.log(this.props.post.post._id);
    // await this.props.removeLikePost(this.state.id);
  }
  findUserLike = likes => {
    const { auth } = this.props.auth;
    console.log('user >', auth)
    return likes.filter(like => like.user === auth.user.id);
  }
  render() {
    const { post, loading } = this.props.post;
    let postContent;
    console.log(post)
    if (post === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div className="post-container">
          <h2>{post.title}</h2>
          <RenderPost body={post.body} id={post._id} />
          <div>
            <hr className='divisor' />
            <div className="renderpost-listmenu">
              <ul>

                <li><i className="far fa-thumbs-up fa-2x" onClick={this.handleLikeOnClick} /></li>

                <li><i className="far fa-thumbs-down fa-2x" onClick={this.handleRemoveLikeOnClick} /></li>
                <li><i className="far fa-comments fa-2x" />Add</li>
              </ul>
            </div>

          </div>
        </div>
      );
    }
    return (
      <div className='renderpost-container'>
        <div>
          <Link to='/feed' className="btn-back black">Back to feed</Link>
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
