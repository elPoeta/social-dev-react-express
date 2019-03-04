import React, { Component } from "react";
import ReactQuill from "react-quill";

class RenderPost extends Component {
  state = {
    body: ""
  };
  componentDidMount() {
    this.setState({ body: this.props.body });
  }

  render() {
    const { body } = this.state;
    return (
      <div className="post">
        <ReactQuill value={body} bounds={".app"} readOnly={true} />
      </div>
    );
  }
}

export default RenderPost;
