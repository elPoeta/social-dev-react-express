import React, { Component } from "react";

class CustomTextArea extends Component {
    render() {
        const {
            input: { value, onChange }
        } = this.props;
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <textarea
                    name={this.props.name}
                    id={this.props.id}
                    className={this.props.classname}
                    placeholder={this.props.placeholder}
                    cols={this.props.cols}
                    rows={this.props.rows}
                    value={value}
                    onChange={onChange}
                ></textarea>
            </div>
        );
    }
}

export default CustomTextArea;