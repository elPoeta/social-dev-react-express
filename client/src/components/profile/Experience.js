import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profile";
import PrivateRoute from "../../HOC/PrivateRoute";
import "./Credentials.css";

class Experience extends Component {
  handleOnclick = async exp_id => {
    await this.props.deleteExperience(exp_id);
  };
  render() {
    if (this.props.experience.length === 0) {
      return null;
    }
    const experience = this.props.experience.map(exp => (
      <li className="grid-credentials" key={exp._id}>
        <span>{exp.title}</span>
        <span>{exp.company}</span>
        <span>
          <Moment format="DD/MM/YYYY">{exp.from}</Moment> -{" "}
          {exp.current ? ' Now' : <Moment format="DD/MM/YYYY">{exp.to}</Moment>}
        </span>
        <span>
          <i
            className="fas fa-trash-alt"
            onClick={() => this.handleOnclick(exp._id)}
          />
        </span>
      </li>
    ));

    return (
      <div className="credentials">
        <h2>Experience Credentials</h2>
        <ul>
          <li className="grid-credentials title-credentials" key={-1}>
            <span>Job</span>
            <span>Company</span>
            <span> From - To</span>
            <span>Delete</span>
          </li>
          <hr />
          {experience}
          <hr />
        </ul>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteExperience }
)(PrivateRoute(Experience));
