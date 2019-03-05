import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import RenderPost from "./RenderPost";
import { getPost } from "../../actions/post";
import Spinner from "../common/Spinner";
import "./Post.css";
class Post extends Component {
  async componentDidMount() {
    if (this.props.match.params.id) {
      await this.props.getPost(this.props.match.params.id);
    }
  }
  render() {
    const { post, loading } = this.props.post;
    let postContent;

    if (post === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div className="post-container">
          <h2>{post.title}</h2>
          <RenderPost body={post.body} />
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
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
