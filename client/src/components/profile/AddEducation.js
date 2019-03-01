import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import AddEducationForm from "./AddEducationForm";
import { clearErrorMessage } from "../../actions/errors";
import { addEducation } from "../../actions/profile";
import PrivateRoute from "../../HOC/PrivateRoute";
import isEmpty from "../../utils/isEmpty";

class AddEducation extends Component {
  componentDidMount() {
    this.props.clearErrorMessage();
  }
  onSubmit = async formData => {
    this.props.clearErrorMessage();
    await this.props.addEducation(formData);
    if (isEmpty(this.props.errors)) {
      this.props.history.push("/dashboard");
    }
  };
  render() {
    const { handleSubmit, errors } = this.props;
    return (
      <div className="profile-container">
        <Link className="btn-back" to="/dashboard">
          Back to Dashboard
        </Link>
        <div className="create-profile">
          <h2>Add Education</h2>
          <p>Add your education</p>
          <AddEducationForm
            handleSubmit={handleSubmit(this.onSubmit)}
            errors={errors}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});
export default compose(
  connect(
    mapStateToProps,
    { addEducation, clearErrorMessage }
  ),
  reduxForm({ form: "addeducation" })
)(PrivateRoute(AddEducation));
