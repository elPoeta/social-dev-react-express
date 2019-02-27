import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { clearErrorMessage } from "../../actions/errors";
import { createProfile } from "../../actions/profile";
import CreateProfileForm from "./CreateProfileForm";
import PrivateRoute from "../../HOC/PrivateRoute";

class CreateProfile extends Component {
  componentDidMount() {
    this.props.clearErrorMessage();
  }
  onSubmit = async formData => {
    // await this.props.signUp(formData);
    console.log("CREATE PROFILE SUBMITED", formData);
  };
  render() {
    const { handleSubmit, errors } = this.props;
    return (
      <div>
        <Link to="/dashboard">Back to Dashboard</Link>
        <div className="create-profile">
          <h2>Create Profile</h2>
          <p>Make your profile</p>
          <CreateProfileForm
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
    { createProfile, clearErrorMessage }
  ),
  reduxForm({ form: "createprofile" })
)(PrivateRoute(CreateProfile));
