import React from "react";
import { connect } from "react-redux";
import "./navbar.css";

export class Navbar extends React.Component {
  render() {
    console.log('current user', this.props.currentUser);
    return (
      <nav>
        <ul className="navbar">
          <li className="greeting">
            Hello {this.props.currentUser}!
          </li>
          <li className="logout">
            <a href="/api/auth/logout">Logout</a>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state, props) => ({
  currentUser: state.currentUser,
  questions: state.questions
});

export default connect(mapStateToProps)(Navbar);
