import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProfile } from '../../actions/profile';
import PrivateRoute from '../../HOC/PrivateRoute'
import { Spinner } from '../common/Spinner';
import './Dashboard.css';

class Dashboard extends Component {
    componentDidMount() {
        this.props.getProfile();
    }
    render() {
        const { loading, profile } = this.props.profile;
        const { user } = this.props.auth;
        let dashboardContent;

        if (profile === null || loading) {
            dashboardContent = <Spinner />;
        } else {

            if (Object.keys(profile).length > 0) {
                dashboardContent = <h4>DISPLAY PROFILE</h4>;
            } else {

                dashboardContent = (
                    <div>
                        <h3>Welcome <span>{user.name}</span></h3>
                        <p>You have not yet setup a profile, please add some info ;)</p>
                        <div>
                            <Link to="/createprofile" className="btn-create-profile">Create Profile</Link>
                        </div>

                    </div>
                );
            }
        }
        return (
            <div className='dashboard-container'>
                <h2>Dashboard</h2>
                {dashboardContent}
            </div>
        )
    }
}
const mapStateToProps = state => (
    {
        auth: state.auth,
        profile: state.profile
    }
);
export default connect(mapStateToProps, { getProfile })(PrivateRoute(Dashboard));
