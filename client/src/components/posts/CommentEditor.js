import React, { Component } from "react";
import ReactQuill from "react-quill";
import { connect } from "react-redux";
import { clearErrorMessage } from "../../actions/errors";
import { createComment } from "../../actions/post";
import Spinner from '../common/Spinner';
class CommentEditor extends Component {
  state = {
    id: "",
    body: null,
    name: "",
    avatar: "",
    errors: {},
    loading: false
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
  }

  handleBodyChange = body => {
    this.setState({ body });
  };

  handleOnClick = async () => {
    const commentData = {
      id: this.props.id,
      body: this.state.body,
      name: this.props.auth.user.name,
      avatar: this.props.auth.user.avatar
    };
    this.props.clearErrorMessage();
    this.setState({ loading: true });
    await this.props.createComment(commentData);
    this.setState({ loading: false });
    if (Object.keys(this.state.errors).length === 0) {
      this.setState({
        id: "",
        body: null,
        name: "",
        avatar: "",
        errors: {}
      });
    }
  };

  render() {
    const { body, errors } = this.state;
    const { placeholder, theme, btnTitle } = this.props;

    return (
      <div className="comment-editor-container">
        <h3 className="comment-title">
          Comment{" "}
          {this.state.loading ? (
            <span><Spinner classNames='loader-comment' /></span>
          ) : null}
        </h3>
        <ReactQuill
          theme={theme}
          onChange={this.handleBodyChange}
          value={body || ""}
          modules={CommentEditor.modules}
          formats={CommentEditor.formats}
          bounds={".app"}
          placeholder={placeholder}
        />
        {errors.body && <div className="invalid">{errors.body}</div>}
        <div>
          <button className="btn-create" onClick={this.handleOnClick}>
            {btnTitle}
          </button>
        </div>
      </div>
    );
  }
}

CommentEditor.modules = {
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
    ["link"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }]
  ],
  clipboard: {
    matchVisual: false
  }
};

CommentEditor.formats = [
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
  { createComment, clearErrorMessage }
)(CommentEditor);
