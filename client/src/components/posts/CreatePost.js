import React, { Component } from "react";
import Editor from "./Editor";
import PrivateRoute from "../../HOC/PrivateRoute";
import "./CreatePost.css";

class CreatePost extends Component {
  render() {
    return (
      <div className="create-post">
        <Editor
          theme="snow"
          placeholder="Write something..."
          isCreate={true}
          btnTitle="Create"
        />
      </div>
    );
  }
}

export default PrivateRoute(CreatePost);
