import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profile";
import PrivateRoute from "../../HOC/PrivateRoute";
import "./Credentials.css";

class Education extends Component {
  handleOnclick = async edu_id => {
    await this.props.deleteEducation(edu_id);
  };
  render() {
    if (this.props.education.length === 0) {
      return null;
    }
    const education = this.props.education.map(edu => (
      <li className="grid-credentials" key={edu._id}>
        <span>{edu.school}</span>
        <span>{edu.degree}</span>
        <span>
          <Moment format="DD/MM/YYYY">{edu.from}</Moment> -{" "}
          {edu.current ? ' Now' : <Moment format="DD/MM/YYYY">{edu.to}</Moment>}{" "}
        </span>
        <span>
          <i
            className="fas fa-trash-alt"
            onClick={() => this.handleOnclick(edu._id)}
          />
        </span>
      </li>
    ));

    return (
      <div className="credentials">
        <h2>Education Credentials</h2>
        <ul>
          <li className="grid-credentials title-credentials" key={-1}>
            <span>School</span>
            <span>Degree</span>
            <span> From - To</span>
            <span>Delete</span>
          </li>
          <hr />
          {education}
          <hr />
        </ul>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteEducation }
)(PrivateRoute(Education));
