import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProfile } from '../../actions/profile';
import requireAuth from '../../HOC/RequireAuth'
import { Spinner } from '../common/Spinner';

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
                        <p className="">Welcome {user.name}</p>
                        <p>You have not yet setup a profile, please add some info ;)</p>
                        <Link to="/createprofile" className="">Create Profile</Link>
                    </div>
                );
            }
        }
        return (
            <div>
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
export default connect(mapStateToProps, { getProfile })(requireAuth(Dashboard));
