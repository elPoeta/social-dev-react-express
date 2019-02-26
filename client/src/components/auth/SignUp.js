import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import CustomInput from "./CustomInput";
import { signUp } from "../../actions/auth";

class SignUp extends Component {
  componentDidMount() {
    document.querySelector("body").style.backgroundColor = "#F1F1F1";
  }
  onSubmit = async formData => {
    await this.props.signUp(formData);
    if (!this.props.errorMessage) {
      this.props.history.push("/profiles");
    }
  }
  render() {
    const { handleSubmit, errorMessage } = this.props;

    return (
      <div>
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
              component={CustomInput}
            />

            <label>Email</label>
            <Field
              name="email"
              type="email"
              autoComplete="none"
              placeholder="example@email.com"
              component={CustomInput}
            />

            <label>Password</label>
            <Field
              name="password"
              type="password"
              autoComplete="none"
              placeholder="Password"
              component={CustomInput}
            />
            <label>Confirm Password</label>
            <Field
              name="confirmPassword"
              type="password"
              autoComplete="none"
              placeholder="Confirm password"
              component={CustomInput}
            />
            <div>{errorMessage}</div>
            <button className="btn btn-signup">SignUp</button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  };
};
export default compose(
  connect(
    mapStateToProps,
    { signUp }
  ),
  reduxForm({ form: "signup" })
)(SignUp);
