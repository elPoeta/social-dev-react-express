import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import PrivateRoute from '../../HOC/PrivateRoute';
import { getPostsByUserId, deletePost } from '../../actions/post';
import Spinner from '../common/Spinner';


class MyPosts extends Component {
    async componentDidMount() {
        await this.props.getPostsByUserId(this.props.auth.user.id);
    }

    handleOnclick = async id => {
        await this.props.deletePost(id);
    }


    render() {
        const { posts, loading } = this.props.post;
        let postContent;
        if (posts === null || loading) {
            postContent = <Spinner />;
        } else {
            postContent = posts.map(post => (
                <li className="grid-myposts" key={post._id}>
                    <span>{post.title}</span>
                    <span>
                        <Moment format="DD/MM/YYYY">{post.date}</Moment>
                    </span>
                    <span>  <Link to={`/post/${post._id}`}><i
                        className="fas fa-eye i-view"
                    /></Link>  </span>
                    <span><Link to={`/post/${post._id}`}> <i
                        className="fas fa-pencil-alt i-edit"

                    /></Link></span>
                    <span>
                        <i
                            className="fas fa-trash-alt i-delete"
                            onClick={() => this.handleOnclick(post._id)}
                        />
                    </span>
                </li>
            ));
        }
        return (
            <div className="profile-container">
                <Link to="/dashboard" className="btn-back">
                    Back To Dashboard
        </Link>
                <div className='myposts'>
                    <div className=''>

                        <h2>My Posts</h2>
                        {posts.length === 0 ?
                            (<div>
                                <p>Do you not have a post {" "}<Link to='/post/createpost' className="btn-back black">Create Post</Link></p>
                            </div>) :
                            (<ul>
                                <li className="grid-myposts title-credentials" key={-1}>
                                    <span>Title</span>
                                    <span> Create on</span>
                                    <span>View</span>
                                    <span>Edit</span>
                                    <span>Delete</span>
                                </li>
                                <hr />
                                {postContent}
                                <hr />
                            </ul>)}

                    </div>
                </div>

            </div>

        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    post: state.post
})
export default connect(mapStateToProps, { getPostsByUserId, deletePost })(PrivateRoute(MyPosts));