import React, { Component } from 'react'
import RenderPost from './RenderPost';
export default class PostItem extends Component {
    render() {
        const { post } = this.props;
        console.log('post item :: ', post)
        return (
            <div>
                title: {post.title}
                <RenderPost body={post.body} />
            </div>
        )
    }
}
//readOnly: true,
//modules: {syntax:true},
