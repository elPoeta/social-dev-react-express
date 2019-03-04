import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import { clearProfile } from "../../actions/profile";
import "./Header.css";

class Header extends Component {
  handleOnclick = () => {
    this.props.clearProfile();
    this.props.logout();
    // this.props.history.push('/login');
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const guestLinks = (
      <ul>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    );
    const authLinks = (
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="" onClick={this.handleOnclick}>
            <img src={user.avatar} alt={user.name} /> Logout{" "}
          </Link>
        </li>
      </ul>
    );
    return (
      <div className="sticky">
        <header>
          <h1>
            <Link to="/">Social-Dev's</Link>
          </h1>
          <ul>
            <li>
              <Link to="/profiles">Developers</Link>
            </li>
            <li>
              <Link to="/feed">Posts Feed</Link>
            </li>
          </ul>
          <nav>{isAuthenticated ? authLinks : guestLinks}</nav>
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logout, clearProfile }
)(Header);
