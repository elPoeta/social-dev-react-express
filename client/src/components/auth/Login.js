import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import CustomInput from "./CustomInput";
import { login } from "../../actions/auth";

class Login extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    document.querySelector("body").style.backgroundColor = "#F1F1F1";
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
      <div>
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
    { login }
  ),
  reduxForm({ form: "login" })
)(Login);
