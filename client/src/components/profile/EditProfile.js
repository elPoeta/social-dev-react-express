import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { clearErrorMessage } from "../../actions/errors";
import { createProfile, getProfile } from "../../actions/profile";
import CreateProfileForm from "./CreateProfileForm";
import PrivateRoute from "../../HOC/PrivateRoute";
import isEmpty from "../../utils/isEmpty";
class EditProfile extends Component {
    async componentDidMount() {
        this.props.clearErrorMessage();
        await this.props.getProfile();
    }
    onSubmit = async formData => {
        this.props.clearErrorMessage();
        await this.props.createProfile(formData);
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
                    <h2>Edit Profile</h2>
                    <p>Change your profile</p>
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
    errors: state.errors,
    initialValues: state.profile.profile
});
export default compose(
    connect(
        mapStateToProps,
        { createProfile, clearErrorMessage, getProfile }
    ),
    reduxForm({ form: "editprofile" }, mapStateToProps)
)(PrivateRoute(EditProfile));

