import React from 'react';
// import * as Cookies from 'js-cookie';

// import {connect} from 'react-redux';
import LoginPage from './login-page';
// import * as actions from '../actions';

export default class App extends React.Component {

    // componentDidMount() {
    //     const accessToken = Cookies.get('accessToken');
    //     console.log(accessToken);
    //     if (accessToken) {
    //         this.props.dispatch(actions.getUsers(accessToken));
    //         console.log(this.props.state);
    //     }
    // }

    render() {
        return <LoginPage />;
    }
}

// const mapStateToProps = (state, props) => ({
//     currentUser: state.currentUser,
//     state: state
// });

// export default connect(mapStateToProps)(App);
