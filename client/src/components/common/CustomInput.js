import React, { Component } from "react";

class CustomInput extends Component {

  render() {
    const {
      input: { value, onChange }
    } = this.props;

    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <i className={this.props.icon} />
        <input
          name={this.props.name}
          id={this.props.id}
          className={this.props.classname}
          placeholder={this.props.placeholder}
          type={this.props.type}
          value={value}
          onChange={onChange}
          disabled={this.props.disabled}

        />
      </div>
    );
  }
}

export default CustomInput;
