import React, { Component } from "react";
import Editor from "./Editor";
import { connect } from "react-redux";
import { getPostByPostIdByUserId } from "../../actions/post";
import PrivateRoute from "../../HOC/PrivateRoute";
import "./CreatePost.css";

class EditPost extends Component {
  async componentDidMount() {
    await this.props.getPostByPostIdByUserId(
      this.props.match.params.id,
      this.props.auth.user.id
    );
  }
  render() {
    const { post } = this.props;
    console.log("pro ", this.props);
    console.log(post.title);
    return (
      <div className="create-post">
        <Editor
          theme="snow"
          placeholder="Write something..."
          isCreate={true}
          btnTitle="Update"
          body={post.body}
          title={post.title}
        />
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
  { getPostByPostIdByUserId }
)(PrivateRoute(EditPost));
