import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import isEmpty from '../../utils/isEmpty';

class ProfilesItem extends Component {
    render() {
        const { profile } = this.props;
        return (
            <div>
                <p>{profile.user.name}</p>
                <img src={profile.user.avatar} alt={profile.username} />
            </div>
        )
    }
}

export default ProfilesItem;