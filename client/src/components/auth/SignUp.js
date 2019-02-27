import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import SignUpForm from './SignUpForm';
import { signUp } from "../../actions/auth";
import { clearErrorMessage } from "../../actions/errors";

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
        <SignUpForm
          handleSubmit={handleSubmit(this.onSubmit)}
          errors={errors}
        />
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
