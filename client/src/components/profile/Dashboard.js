import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProfile } from "../../actions/profile";
import PrivateRoute from "../../HOC/PrivateRoute";
import { Spinner } from "../common/Spinner";
import ProfileMenu from "./ProfileMenu";
import Experience from "./Experience";
import Education from "./Education";
import "./Dashboard.css";

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
        dashboardContent = (
          <div>
            <h3>
              Welcome{" "}
              <Link to={`/profile/${profile.username}`}>
                <span className="dashboard-username">{user.name}</span>
              </Link>
            </h3>
            <ProfileMenu />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
          </div>
        );
      } else {
        dashboardContent = (
          <div>
            <h3>
              Welcome <span className="dashboard-username">{user.name}</span>
            </h3>
            <p>You have not yet setup a profile, please add some info ;)</p>
            <div>
              <Link to="/createprofile" className="btn-create-profile">
                Create Profile
              </Link>
            </div>
          </div>
        );
      }
    }
    return (
      <div className="dashboard-container">
        <h2>Dashboard</h2>
        {dashboardContent}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { getProfile }
)(PrivateRoute(Dashboard));
