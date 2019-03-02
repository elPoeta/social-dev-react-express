import React, { Component } from 'react'
import Moment from 'react-moment';
import './Profile.css';
class ProfileCredentials extends Component {
    render() {
        const { profile } = this.props;
        const firstName = profile.user.name.trim().split(" ")[0];


        const experience = profile.experience.length === 0 ?
            (<div >{firstName} does not add experience yet</div>) :
            (profile.experience.map(exp => (
                <div key={exp._id} className='credentials'>
                    <h2>{exp.company}</h2>
                    <span>
                        <Moment format="DD/MM/YYYY">{exp.from}</Moment> -{" "}
                        {exp.current ? ' Now' : <Moment format="DD/MM/YYYY">{exp.to}</Moment>}
                    </span>
                    <p><span className='credentials-bold'>Position: </span>{exp.title}</p>
                    <p><span className='credentials-bold'>Location: </span>{exp.location}</p>
                    <p><span className='credentials-bold'>Description: </span>{exp.description}</p>
                    <hr className='divisor-credentials' />
                </div>

            )));

        const education = profile.education.length === 0 ?
            (<div>{firstName} does not add education yet</div>) :
            (profile.education.map(edu => (
                <div key={edu._id} className='credentials'>
                    <h2>{edu.school}</h2>
                    <span>
                        <Moment format="DD/MM/YYYY">{edu.from}</Moment> -{" "}
                        {edu.current ? ' Now' : <Moment format="DD/MM/YYYY">{edu.to}</Moment>}
                    </span>
                    <p><span className='credentials-bold'>Degree: </span>{edu.degree}</p>
                    <p><span className='credentials-bold'>Field of study: </span>{edu.fieldofstudy}</p>
                    <p><span className='credentials-bold'>Description: </span>{edu.description}</p>
                    <hr className='divisor-credentials' />
                </div>

            )));




        return (
            <div className="profile-credentials">
                <div>
                    <h3>Experience</h3>
                    <section className='container-credentials'>
                        {experience}
                    </section>
                </div>

                <div>
                    <h3>Education</h3>
                    <section className='container-credentials'>

                        {education}
                    </section>
                </div>
            </div>
        )
    }
}

export default ProfileCredentials; 