import { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
    this.props.history.push("/login");
  }
  render() {
    return null;
  }
}

export default connect(
  null,
  { logout }
)(Logout);
