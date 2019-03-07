import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import { connect } from "react-redux";
import { createPost, updatePost } from "../../actions/post";
import { clearErrorMessage } from "../../actions/errors";
import PrivateRoute from "../../HOC/PrivateRoute";

class Editor extends Component {
  state = {
    id: '',
    body: null,
    title: "",
    name: "",
    avatar: "",
    errors: {}
  };
  componentDidMount() {
    this.props.clearErrorMessage();
  }
  componentWillReceiveProps(nextProp) {

    if (nextProp.errors) {
      this.setState({
        errors: nextProp.errors
      });
    }
    if (nextProp.id) {
      this.setState({
        id: nextProp.id
      });
    }
    if (nextProp.body) {
      this.setState({
        body: nextProp.body
      });
    }
    if (nextProp.title) {
      this.setState({
        title: nextProp.title
      });
    }
  }

  handleBodyChange = body => {
    this.setState({ body });
  };

  handleOnChange = e => {
    this.setState({ title: e.target.value });
  };

  handleOnClick = async isCreate => {
    const postData = {
      id: this.state.id,
      title: this.state.title,
      body: this.state.body,
      name: this.props.auth.user.name,
      avatar: this.props.auth.user.avatar
    }
    if (isCreate) {
      await this.props.createPost(postData, this.props.history);
    } else {

      await this.props.updatePost(postData, this.props.history);
    }
  };
  render() {
    const { body, title, errors } = this.state;
    const { theme, placeholder, isCreate, btnTitle } = this.props;

    return (
      <div className="editor-container">

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

        {errors.title && <div className="invalid">{errors.title}</div>}
        <ReactQuill
          theme={theme}
          onChange={this.handleBodyChange}
          value={body || ''}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={".create-post"}
          placeholder={placeholder}
        />
        {errors.body && <div className="invalid">{errors.body}</div>}
        <div>
          <Link to="/dashboard" className="btn-back black">
            Back To Dashboard
          </Link>
          <button
            className="btn-create"
            onClick={() => {
              this.handleOnClick(isCreate);
            }}
          >
            {btnTitle}
          </button>
        </div>
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
  { createPost, updatePost, clearErrorMessage }
)(PrivateRoute(withRouter(Editor)));
