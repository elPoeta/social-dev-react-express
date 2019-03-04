import React, { Component } from "react";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import { connect } from "react-redux";
import { createPost } from "../../actions/post";
import { clearErrorMessage } from "../../actions/errors";
import PrivateRoute from "../../HOC/PrivateRoute";

class Editor extends Component {
  state = {
    body: null,
    title: "",
    name: "",
    avatar: ""
  };
  componentDidMount() {
    this.props.clearErrorMessage();
  }
  handleBodyChange = body => {
    this.setState({ body });
  };

  handleOnChange = e => {
    this.setState({ title: e.target.value });
  };

  handleOnClick = async isCreate => {
    console.log("submit");

    if (isCreate) {
      const postData = {
        title: this.state.title,
        body: this.state.body,
        name: this.props.auth.user.name,
        avatar: this.props.auth.user.avatar
      };
      this.props.clearErrorMessage();
      await this.props.createPost(postData);
    } else {
      console.log("coment");
    }
  };
  render() {
    const { body, title } = this.state;
    const { theme, placeholder, isCreate, btnTitle, errors } = this.props;

    return (
      <div className="editor-container">
        {isCreate ? (
          <div>
            <span className="create-post-title">Title: </span>
            <input
              type="text"
              onChange={this.handleOnChange}
              placeholder="Post Title"
              value={title}
              className="create-post-input"
            />
          </div>
        ) : null}
        {errors.title && <div className="invalid">{errors.title}</div>}
        <ReactQuill
          theme={theme}
          onChange={this.handleBodyChange}
          value={body}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={".create-post"}
          placeholder={placeholder}
        />
        {errors.body && <div className="invalid">{errors.body}</div>}
        <button
          className="btn-create"
          onClick={() => {
            this.handleOnClick(isCreate);
          }}
        >
          {btnTitle}
        </button>
      </div>
    );
  }
}

Quill.register("modules/imageResize", ImageResize);

Editor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ size: [] }],
    [
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "link",
      "code-block"
    ],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    [{ align: [] }],
    ["link", "image", "video"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }]
  ],
  clipboard: {
    matchVisual: false
  },
  imageResize: {
    displayStyles: {
      backgroundColor: "black",
      border: "none",
      color: "white"
    },
    modules: ["Resize", "DisplaySize"]
  }
};

Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "align",
  "background",
  "script",
  "code-block"
];

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createPost, clearErrorMessage }
)(PrivateRoute(Editor));

/**
 *   toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link", "image", "video"],
    [{ color: [] }, { background: [] }],
    ["clean"]
  ],
 */

/*
  toolbar: [
    ["bold", "italic", "underline"],
    ["blockquote", "code-block", "link", "image", "video"],

    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],

    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }]
  ]*/
