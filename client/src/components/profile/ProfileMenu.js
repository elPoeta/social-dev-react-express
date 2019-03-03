import React from 'react'
import { Link } from 'react-router-dom';
import './ProfileMenu.css';
const ProfileMenu = () => (
    <div className='profile-menu'>
        <ul>
            <li><Link to='/editprofile'><i className='fas fa-user-edit' />Edit Profile</Link></li>
            <li><Link to='/addexperience'><i className='fab fa-black-tie' />Add Experience</Link></li>
            <li><Link to='/addeducation'><i className='fas fa-graduation-cap' />Add Education</Link></li>
            <li><Link to='/post/createpost'><i className='fas fa-pen-nib' />Create Post</Link></li>
        </ul>
    </div>
);
export default ProfileMenu;
