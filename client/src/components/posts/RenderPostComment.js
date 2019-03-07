import React, { Component } from "react";
import ReactQuill from "react-quill";

class RenderPostComment extends Component {
  state = {
    id: "",
    body: ""
  };
  componentDidMount() {
    this.setState({
      // id: this.props.id,
      body: this.props.body
    });
  }

  render() {
    const { body } = this.state;

    return (
      <article className="comments">
        <ReactQuill value={body || ""} bounds={".app"} readOnly={true} />
      </article>
    );
  }
}

export default RenderPostComment;
