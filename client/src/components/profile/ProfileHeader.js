import React from "react";
import isEmpty from "../../utils/isEmpty";
import "./Profile.css";
const ProfileHeader = props => {
  const { profile } = props;

  return (
    <div className="profile-header">
      <figure>
        <img src={profile.user.avatar} alt={profile.user.name} />
      </figure>
      <h2>{profile.user.name}</h2>
      <p className="header-status">
        {profile.status}{" "}
        {isEmpty(profile.company) ? null : <span>at {profile.company}</span>}
      </p>
      {isEmpty(profile.location) ? null : (
        <p className="header-location">{profile.location}</p>
      )}
      <div>
        <p>
          {isEmpty(profile.website) ? null : (
            <a
              className=""
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe fa-2x i-color-wh" />
            </a>
          )}
          {isEmpty(profile.social && profile.social.linkedin) ? null : (
            <a
              className=""
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x i-color-wh" />
            </a>
          )}
          {isEmpty(profile.social && profile.social.git) ? null : (
            <a
              className=""
              href={profile.social.git}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-git fa-2x i-color-wh" />
            </a>
          )}
          {isEmpty(profile.social && profile.social.twitter) ? null : (
            <a
              className=""
              href={profile.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-2x i-color-wh" />
            </a>
          )}

          {isEmpty(profile.social && profile.social.facebook) ? null : (
            <a
              className=""
              href={profile.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook fa-2x i-color-wh" />
            </a>
          )}

          {isEmpty(profile.social && profile.social.youtube) ? null : (
            <a
              className=""
              href={profile.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube fa-2x i-color-wh" />
            </a>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;
