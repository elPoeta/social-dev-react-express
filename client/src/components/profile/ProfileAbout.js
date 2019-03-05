import React, { Component } from "react";
import isEmpty from "../../utils/isEmpty";
class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    const skills = profile.skills.map((skill, index) => (
      <li key={index}>
        <i className="fa fa-check skill-about-icon" /> {skill}
      </li>
    ));
    return (
      <div className="profile-about">
        <div className="">
          <h2>{profile.user.name} Biography</h2>
          <p className="lead">
            {isEmpty(profile.bio) ? (
              <span>{profile.user.name} does not have a bio</span>
            ) : (
              <span>{profile.bio}</span>
            )}
          </p>
        </div>
        <div>
          <hr className="divisor" />
        </div>
        <div className="">
          <h2>My Skills</h2>
          <ul>{skills}</ul>
        </div>
      </div>
    );
  }
}

export default ProfileAbout;
