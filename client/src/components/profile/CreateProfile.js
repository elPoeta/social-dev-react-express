import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from "redux";
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { clearErrorMessage } from "../../actions/errors";
import { createProfile } from '../../actions/profile';
import PrivateRoute from '../../HOC/PrivateRoute';

class CreateProfile extends Component {
    render() {
        return (
            <div>
                <Link to='/dashboard'>Back to Dashboard</Link>
                <h2>Create Profile</h2>
            </div>
        )
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
