import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import AddExperienceForm from './AddExperienceForm';
import { clearErrorMessage } from "../../actions/errors";
import PrivateRoute from '../../HOC/PrivateRoute';
import isEmpty from '../../utils/isEmpty';

class AddExperience extends Component {
    componentDidMount() {
        this.props.clearErrorMessage();
    }
    onSubmit = async formData => {
        console.log('add education', formData);
        this.props.clearErrorMessage();
        //  await this.props.createProfile(formData);
        if (isEmpty(this.props.errors)) {
            this.props.history.push("/dashboard");
        }
    };
    render() {

        const { handleSubmit, errors, pristine, submitting } = this.props;
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
                    />
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});
export default compose(connect(mapStateToProps, { clearErrorMessage }),
    reduxForm({ form: 'addexperience' }))(PrivateRoute(AddExperience));