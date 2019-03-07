import React, { Component } from "react";
import Editor from "./Editor";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { getPostByPostIdByUserId } from "../../actions/post";
import PrivateRoute from "../../HOC/PrivateRoute";
import Spinner from '../common/Spinner';
import "./CreatePost.css";

class EditPost extends Component {
  _isMounted = false;
  state = {
    id: '',
    body: '',
    title: ''
  }
  async componentDidMount() {
    this._isMounted = true;
    await this.props.getPostByPostIdByUserId(
      this.props.match.params.id,
      this.props.auth.user.id,
      this.props.history
    );
    if (this._isMounted) {
      this.setState({
        id: this.props.post.post._id,
        body: this.props.post.post.body,
        title: this.props.post.post.title
      });
    }
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { post, loading } = this.props.post;
    const { id, title, body } = this.state;
    let editContent;
    if (post === null || loading || Object.keys(post).length === 0) {
      return (<Spinner classNames='spinner2' />)
    } else {
      editContent = (<Editor
        theme="snow"
        placeholder="Write something..."
        isCreate={false}
        btnTitle="Update"
        id={id}
        body={body}
        title={title}
      />)
    }
    return (
      <div className="create-post">
        {editContent}
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
)(PrivateRoute(withRouter(EditPost)));
