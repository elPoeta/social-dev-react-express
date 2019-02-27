import React, { Component } from "react";

class CustomSelect extends Component {
    render() {
        const {
            input: { value, onChange }
        } = this.props;
        const selectOptions = this.props.options.map(option => (
            <option key={option.label} value={option.value}>
                {option.label}
            </option>
        ));
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <select
                    name={this.props.name}
                    id={this.props.id}
                    className={this.props.classname}
                    value={value}

                    onChange={onChange}
                >{selectOptions}</select>
            </div>
        );
    }
}

export default CustomSelect;