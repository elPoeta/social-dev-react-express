import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import isEmpty from '../../utils/isEmpty';
import './Profiles.css';

class ProfilesItem extends Component {
    render() {
        const { profile } = this.props;
        return (
            <div className='profile-item'>

                <img src={profile.user.avatar} alt={profile.username} />
                <div>
                    <h3>{profile.user.name}</h3>
                    <p>
                        {profile.status}{' '}
                        {isEmpty(profile.company) ? null : (
                            <span>at {profile.company}</span>
                        )}
                    </p>
                    <p>
                        {isEmpty(profile.location) ? null : (
                            <span>{profile.location}</span>
                        )}
                    </p>
                    <Link to={`/profile/${profile.username}`} className="btn-view-profile">
                        View Profile
            </Link>
                </div>
                <div className="skills-profile-item">
                    <h4>Skills</h4>
                    <ul className="list-skills">
                        {profile.skills.slice(0, 4).map((skill, index) => (
                            <li key={index} className="">
                                <i className="fa fa-check icon-skill" />
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        )
    }
}

export default ProfilesItem;