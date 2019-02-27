import React from "react";
import { Field } from "redux-form";
import CustomInput from "../common/CustomInput";
import classnames from "classnames";
import "./Auth.css";
import "../common/Errors.css";
const LoginForm = props => {
  const { handleSubmit, errors } = props;
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <Field
          id="email"
          name="email"
          type="email"
          autoComplete="none"
          placeholder="example@email.com"
          classname={classnames("input", errors.email && "invalid-input")}
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
          classname={classnames("input", errors.password && "invalid-input")}
          component={CustomInput}
        />
        {errors.password && <div className="invalid">{errors.password}</div>}
        <button className="btn btn-login">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
