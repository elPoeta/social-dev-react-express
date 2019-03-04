import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProfileUsername } from "../../actions/profile";
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCredentials from "./ProfileCredentials";
import ProfileGithub from "./ProfileGithub";
import Spinner from "../common/Spinner";

class Profile extends Component {
  async componentDidMount() {
    if (this.props.match.params.username) {
      await this.props.getProfileUsername(this.props.match.params.username);
    }
  }
  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;
    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <ProfileHeader profile={profile} />
          <ProfileAbout profile={profile} />
          <ProfileCredentials profile={profile} />
          {profile.githubuser ? (
            <ProfileGithub githubuser={profile.githubuser} />
          ) : null}
        </div>
      );
    }
    return (
      <div className="profile-container">
        <Link to="/profiles" className="btn-back black">
          Back To Profiles
        </Link>
        <div className="profile">{profileContent}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getProfileUsername }
)(Profile);
