import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import CustomInput from "../common/CustomInput";
import { login } from "../../actions/auth";
import { clearErrorMessage } from "../../actions/errors";
import '../common/CustomInput.css';
import './Auth.css';
class Login extends Component {
  componentDidMount() {
    this.props.clearErrorMessage();
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

  }
  onSubmit = async formData => {
    await this.props.login(formData);
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  };
  render() {
    const { handleSubmit, errors } = this.props;
    return (
      <div className="auth">
        <h2>Login</h2>
        <p>Connect to Social-dev's</p>
        <div className="form">
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <label>Email</label>
            <Field
              id="email"
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
              id="password"
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
            <button className="btn btn-login">Login</button>
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
    { login, clearErrorMessage }
  ),
  reduxForm({ form: "login" })
)(Login);
