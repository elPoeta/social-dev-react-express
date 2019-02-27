import React, { Component } from "react";
import "./Auth.css";
class CustomInput extends Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          name={this.props.name}
          id={this.props.id}
          className={this.props.classname}
          placeholder={this.props.placeholder}
          type={this.props.type}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default CustomInput;
