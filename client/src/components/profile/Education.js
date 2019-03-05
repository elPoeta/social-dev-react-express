import React, { Component } from "react";
import ReactModal from "react-modal";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profile";
import PrivateRoute from "../../HOC/PrivateRoute";
import "./Credentials.css";

class Education extends Component {
  state = {
    showModal: false,
    id: ""
  };
  handleOpenModal = id => {
    this.setState({ showModal: true, id });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleConfirmDelete = async () => {
    this.setState({ showModal: false });
    await this.props.deleteEducation(this.state.id);
  };

  render() {
    if (this.props.education.length === 0) {
      return null;
    }
    const education = this.props.education.map(edu => (
      <li className="grid-credentials" key={edu._id}>
        <span>{edu.school}</span>
        <span>{edu.degree}</span>
        <span>
          <Moment format="DD/MM/YYYY">{edu.from}</Moment> -{" "}
          {edu.current ? " Now" : <Moment format="DD/MM/YYYY">{edu.to}</Moment>}{" "}
        </span>
        <span>
          <i
            className="fas fa-trash-alt"
            onClick={() => this.handleOpenModal(edu._id)}
          />
        </span>
      </li>
    ));

    return (
      <div className="credentials">
        <h2>Education Credentials</h2>
        <ul>
          <li className="grid-credentials title-credentials" key={-1}>
            <span>School</span>
            <span>Degree</span>
            <span> From - To</span>
            <span>Delete</span>
          </li>
          <hr />
          {education}
          <hr />
        </ul>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={false}
          style={customStyles}
        >
          <h3>Are you sure delete this credential ?</h3>
          <div className="btn-modal-container">
            <ul>
              <li>
                <button
                  className="btn-modal-close"
                  onClick={this.handleCloseModal}
                >
                  Cancel
                </button>
              </li>
              <li>
                {" "}
                <button
                  className="btn-modal-confirm"
                  onClick={this.handleConfirmDelete}
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
        </ReactModal>
      </div>
    );
  }
}

ReactModal.setAppElement("#root");
const customStyles = {
  content: {
    color: "darkred",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  },
  overlay: {
    backgroundColor: "#444",
    opacity: "0.9"
  }
};

export default connect(
  null,
  { deleteEducation }
)(PrivateRoute(Education));
