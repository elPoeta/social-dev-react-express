import React, { Component } from 'react';
import isEmpty from '../../utils/isEmpty';
import './Profile.css';
class ProfileHeader extends Component {
    render() {
        const { profile } = this.props;

        return (
            <div className='profile-header'>
                <img src={profile.user.avatar} alt={profile.user.name} />
                <h2>{profile.user.name}</h2>
                <p className="">
                    {profile.status}{' '}
                    {isEmpty(profile.company) ? null : (
                        <span>at {profile.company}</span>
                    )}
                </p>
                {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
                <div>
                    <p>
                        {isEmpty(profile.website) ? null : (
                            <a
                                className=""
                                href={profile.website}
                                target="_blank"
                            >
                                <i className="fas fa-globe fa-2x" />
                            </a>
                        )}

                        {isEmpty(profile.social && profile.social.twitter) ? null : (
                            <a
                                className=""
                                href={profile.social.twitter}
                                target="_blank"
                            >
                                <i className="fab fa-twitter fa-2x" />
                            </a>
                        )}

                        {isEmpty(profile.social && profile.social.facebook) ? null : (
                            <a
                                className=""
                                href={profile.social.facebook}
                                target="_blank"
                            >
                                <i className="fab fa-facebook fa-2x" />
                            </a>
                        )}

                        {isEmpty(profile.social && profile.social.linkedin) ? null : (
                            <a
                                className=""
                                href={profile.social.linkedin}
                                target="_blank"
                            >
                                <i className="fab fa-linkedin fa-2x" />
                            </a>
                        )}

                        {isEmpty(profile.social && profile.social.youtube) ? null : (
                            <a
                                className=""
                                href={profile.social.youtube}
                                target="_blank"
                            >
                                <i className="fab fa-youtube fa-2x" />
                            </a>
                        )}

                    </p>
                </div>
            </div>
        )
    }
}

export default ProfileHeader; 