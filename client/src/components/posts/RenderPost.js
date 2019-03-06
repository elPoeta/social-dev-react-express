import React, { Component } from "react";
import ReactQuill from "react-quill";
import PostHeader from './PostHeader';

class RenderPost extends Component {
  state = {
    id: '',
    body: ""
  };
  componentDidMount() {
    this.setState({
      id: this.props.id,
      body: this.props.body,
    });

  }

  render() {
    const { body } = this.state;
    const { post } = this.props;
    return (
      <div className="post">
        <PostHeader
          post={post}
        />
        <ReactQuill value={body || ''} bounds={".app"} readOnly={true} />

      </div>
    );
  }
}

export default RenderPost;
