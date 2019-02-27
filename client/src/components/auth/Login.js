import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { clearErrorMessage } from "../../actions/errors";
import LoginForm from './LoginForm';

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
        <p>Connect to Social-Dev's</p>
        <LoginForm
          handleSubmit={handleSubmit(this.onSubmit)}
          errors={errors} />
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
