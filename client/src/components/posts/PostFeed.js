import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import Spinner from "../common/Spinner";
import PostItem from "./PostItem";
class PostFeed extends Component {
  async componentDidMount() {
    await this.props.getPosts();
  }
  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner classNames='spinner2' />;
    } else if (posts.length === 0) {
      postContent = <p>Posts not found...</p>
    }
    else {
      postContent = posts.map(post => <PostItem key={post._id} post={post} />);
    }

    return (
      <div>
        <h2>Posts</h2>
        {postContent}
      </div>);
  }
}
const mapStateToProps = state => ({
  post: state.post
});
export default connect(
  mapStateToProps,
  { getPosts }
)(PostFeed);
