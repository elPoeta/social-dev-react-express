import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import AddExperienceForm from "./AddExperienceForm";
import { clearErrorMessage } from "../../actions/errors";
import { addExperience } from "../../actions/profile";
import PrivateRoute from "../../HOC/PrivateRoute";
import isEmpty from "../../utils/isEmpty";

class AddExperience extends Component {

  componentDidMount() {
    this.props.clearErrorMessage();
  }

  onSubmit = async formData => {
    this.props.clearErrorMessage();
    await this.props.addExperience(formData);
    if (isEmpty(this.props.errors)) {
      this.props.history.push("/dashboard");
    }
  };
  render() {
    const { handleSubmit, errors, pristine, submitting, current } = this.props;

    return (
      <div className="profile-container">
        <Link className="btn-back" to="/dashboard">
          Back to Dashboard
        </Link>
        <div className="create-profile">
          <h2>Add Experience</h2>
          <p>Add any job or position</p>
          <AddExperienceForm
            handleSubmit={handleSubmit(this.onSubmit)}
            errors={errors}
            pristine={pristine}
            submitting={submitting}
            current={current}
          />
        </div>
      </div>
    );
  }
}
const selector = formValueSelector('addexperience');
const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
  current: selector(state, "current") || false
});

export default compose(
  connect(
    mapStateToProps,
    { addExperience, clearErrorMessage }
  ),
  reduxForm({ form: "addexperience" }, mapStateToProps)
)(PrivateRoute(AddExperience));
