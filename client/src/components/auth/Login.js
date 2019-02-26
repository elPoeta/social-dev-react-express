import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import CustomInput from "./CustomInput";
import { login } from "../../actions/auth";

class Login extends Component {

  componentDidMount() {
    document.querySelector("body").style.backgroundColor = "#F1F1F1";
  }
  onSubmit = async formData => {
    await this.props.login(formData);
    if (!this.props.errorMessage) {
      this.props.history.push("/profiles");
    }
  }
  render() {
    const { handleSubmit, errorMessage } = this.props;
    return (
      <div>
        <h2>Login</h2>
        <p>Connect to Social-dev's</p>
        <div className="form">
          <form onSubmit={handleSubmit(this.onSubmit)}>
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
            <div>{errorMessage}</div>
            <button className="btn btn-login">Login</button>
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
    { login }
  ),
  reduxForm({ form: "login" })
)(Login);
