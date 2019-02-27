import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getProfile } from '../../actions/profile';
import requireAuth from '../../HOC/RequireAuth'
class Dashboard extends Component {
    componentDidMount() {
        this.props.getProfile();
    }
    render() {

        return (
            <div>
                <h2>Dashboard</h2>
            </div>
        )
    }
}

export default connect(null, { getProfile })(requireAuth(Dashboard));
