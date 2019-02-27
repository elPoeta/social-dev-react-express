import React from 'react';
import { Field } from 'redux-form';
import classnames from 'classnames';
import CustomInput from '../common/CustomInput';
import CustomTextArea from '../common/CustomTextArea';
import CustomSelect from '../common/CustomSelect';

import './CreateProfile.css';

const CreateProfileForm = props => {
    const { handleSubmit, errors } = props;
    const options = [
        { label: '* Select Professional Status', value: 0 },
        { label: 'Developer', value: 'Developer' },
        { label: 'Junior Developer', value: 'Junior Developer' },
        { label: 'Senior Developer', value: 'Senior Developer' },
        { label: 'Full Stack Developer', value: 'Full Stack Developer' },
        { label: 'DevOps', value: 'DevOps' },
        { label: 'Student or Learning', value: 'Student or Learning' },
        { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
        { label: 'Other', value: 'Other' }
    ];
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>

                <Field
                    id="handle"
                    name="handle"
                    type="text"
                    autoComplete="none"
                    placeholder="My handle profile"
                    classname={errors.handle && "invalid-input"}
                    component={CustomInput}
                />
                {errors.handle && <div className="invalid">{errors.handle}</div>}
                <Field
                    id='status'
                    name="status"
                    classname={errors.password && "invalid-input"}
                    options={options}
                    component={CustomSelect}
                />
                <Field
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="none"
                    placeholder="My company"
                    classname={errors.company && "invalid-input"}
                    component={CustomInput}
                />
                {errors.company && <div className="invalid">{errors.company}</div>}

                <Field
                    id="website"
                    name="website"
                    type="text"
                    autoComplete="none"
                    placeholder="My Web Site"
                    classname={errors.website && "invalid-input"}
                    component={CustomInput}
                />
                {errors.website && <div className="invalid">{errors.website}</div>}
                <Field
                    id="location"
                    name="location"
                    type="text"
                    autoComplete="none"
                    placeholder="My location"
                    classname={errors.location && "invalid-input"}
                    component={CustomInput}
                />
                {errors.location && <div className="invalid">{errors.location}</div>}
                <Field
                    id="skills"
                    name="skills"
                    type="text"
                    autoComplete="none"
                    placeholder="Your skills separate by comma eg: css3,html5,java"
                    classname={errors.skills && "invalid-input"}
                    component={CustomInput}
                />
                {errors.skills && <div className="invalid">{errors.skills}</div>}
                <Field
                    id="githubuser"
                    name="githubuser"
                    type="text"
                    autoComplete="none"
                    placeholder="My github User"
                    classname={errors.githubuser && "invalid-input"}
                    component={CustomInput}
                />
                {errors.githubuser && <div className="invalid">{errors.githubuser}</div>}

                <Field
                    id="bio"
                    name="bio"
                    placeholder="Biography tell about you..."
                    classname=""
                    cols={40}
                    rows={10}
                    component={CustomTextArea}
                />
                {errors.confirmPassword && (
                    <div className="invalid">{errors.confirmPassword}</div>
                )}
                <button className="btn btn-signup">Submit</button>
            </form>
        </div>
    );
}

export default CreateProfileForm;

