import React, { Component } from 'react';
import { connect } from 'react-redux';

export default PrivateRoute => {
    class ComposedComponent extends Component {

        componentDidMount() {
            this.navigatePermission();
        }

        componentDidUpdate() {
            this.navigatePermission();
        }

        navigatePermission() {
            if (!this.props.isAuthenticated) {
                this.props.history.push('/login');
            }
        }

        render() {
            return <PrivateRoute {...this.props} />;
        }
    }

    const mapStateToProps = state => {
        return { isAuthenticated: state.auth.isAuthenticated };
    }

    return connect(mapStateToProps)(ComposedComponent);
};
