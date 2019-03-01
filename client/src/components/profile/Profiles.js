import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAllProfiles } from '../../actions/profile';
import Spinner from '../common/Spinner';
import ProfileItem from "./ProfilesItem";
import './Profile.css';
class Profiles extends Component {
    async componentDidMount() {
        await this.props.getAllProfiles();
    }
    render() {
        const { loading, profiles } = this.props.profiles;
        const { user } = this.props.auth;
        let profilesItems;

        if (profiles === null || loading) {
            profilesItems = <Spinner />;
        } else {
            if (profiles.length > 0) {
                profilesItems = profiles.map(profile => (
                    <ProfileItem key={profile._id} profile={profile} />
                ));
            } else {
                profilesItems = (<p>No profiles found...</p>)
            }
        }

        return (
            <div className='profiles'>
                <h2>Developer Profiles</h2>
                <p>Start to connect with developers</p>
                {profilesItems}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    profiles: state.profile,
    errors: state.errors
})
export default connect(mapStateToProps, { getAllProfiles })(Profiles);
