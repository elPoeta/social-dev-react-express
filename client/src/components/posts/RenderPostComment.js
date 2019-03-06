import React, { Component } from "react";
import ReactQuill from "react-quill";

class RenderPostComment extends Component {
    state = {
        id: '',
        body: ""
    };
    componentDidMount() {
        this.setState({
            // id: this.props.id,
            body: this.props.body,

        });

    }

    render() {
        const { body } = this.state;

        return (
            <div className="post">
                <ReactQuill value={body || ''} bounds={".app"} readOnly={true} />
            </div>
        );
    }
}

export default RenderPostComment;