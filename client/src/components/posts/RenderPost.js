import React, { Component } from 'react';
import ReactQuill from 'react-quill';

class RenderPost extends Component {

    state = {
        body: ''
    }
    componentDidMount() {
        this.setState({ body: this.props.body });
    }




    render() {
        const { body } = this.state;
        //const { them} = this.props;


        return (
            <div className="post-item">

                <ReactQuill
                    RenderPost={RenderPost.modules}
                    value={body}
                    bounds={'.app'}
                    readOnly={true}
                />
            </div>
        )
    }
}

RenderPost.modules = { toolbar: [] }


export default RenderPost;