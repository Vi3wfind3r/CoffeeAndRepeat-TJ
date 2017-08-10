import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import * as Cookies from 'js-cookie';
import './navbar.css';

export class Navbar extends React.Component {

  componentDidMount() {
        const accessToken = Cookies.get('accessToken');
        if (accessToken) {
            this.props.dispatch(actions.getUsers(accessToken));
            this.props.dispatch(actions.fetchQuestions())
        }
    }

  
  render() {
    return (
      <nav>
        <ul className='navbar'>
          <li className="greeting">Hello {this.props.currentUser}!</li>
          <li className="logout"><a href="/api/auth/logout">Logout</a></li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state, props) => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(Navbar);