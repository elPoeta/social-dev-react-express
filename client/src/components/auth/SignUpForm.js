import React from 'react';
import { Field } from 'redux-form';
import CustomInput from '../common/CustomInput';
import '../common/CustomInput.css';
const SignUpForm = props => {
    const { handleSubmit, errors } = props;
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <Field
                    name="name"
                    type="text"
                    autoComplete="none"
                    placeholder="My name is"
                    classname={errors.name && "invalid-input"}
                    component={CustomInput}
                />
                {errors.name && <div className="invalid">{errors.name}</div>}
                <label>Email</label>
                <Field
                    name="email"
                    type="email"
                    autoComplete="none"
                    placeholder="example@email.com"
                    classname={errors.email && "invalid-input"}
                    component={CustomInput}
                />
                {errors.email && <div className="invalid">{errors.email}</div>}
                <label>Password</label>
                <Field
                    name="password"
                    type="password"
                    autoComplete="none"
                    placeholder="Password"
                    classname={errors.password && "invalid-input"}
                    component={CustomInput}
                />
                {errors.password && (
                    <div className="invalid">{errors.password}</div>
                )}
                <label>Confirm Password</label>
                <Field
                    name="confirmPassword"
                    type="password"
                    autoComplete="none"
                    placeholder="Confirm password"
                    classname={errors.confirmPassword && "invalid-input"}
                    component={CustomInput}
                />
                {errors.confirmPassword && (
                    <div className="invalid">{errors.confirmPassword}</div>
                )}
                <button className="btn btn-signup">SignUp</button>
            </form>
        </div>
    );
}

export default SignUpForm;





