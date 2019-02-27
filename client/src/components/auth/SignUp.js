import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import CustomInput from "../common/CustomInput";
import { signUp } from "../../actions/auth";
import { clearErrorMessage } from "../../actions/errors";
import '../common/CustomInput.css';
import './Auth.css';

class SignUp extends Component {
  componentDidMount() {
    this.props.clearErrorMessage();
  }
  onSubmit = async formData => {
    await this.props.signUp(formData);
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  };
  render() {
    const { handleSubmit, errors } = this.props;

    return (
      <div className='auth'>
        <h2>Sign Up</h2>
        <p>Create your Social-Dev account</p>
        <div className="form">
          <form onSubmit={handleSubmit(this.onSubmit)}>
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
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default compose(
  connect(
    mapStateToProps,
    { signUp, clearErrorMessage }
  ),
  reduxForm({ form: "signup" })
)(SignUp);
