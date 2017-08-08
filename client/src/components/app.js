import React from 'react';
import * as Cookies from 'js-cookie';

import {connect} from 'react-redux';
import LoginPage from './login-page';

export class App extends React.Component {

    componentDidMount() {
        // Job 4: Redux-ify all of the state and fetch calls to async actions.
        const accessToken = Cookies.get('accessToken');
        if (accessToken) {
            fetch('/api/me', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }).then(res => {
                if (!res.ok) {
                    if (res.status === 401) {
                        // Unauthorized, clear the cookie and go to
                        // the login page
                        Cookies.remove('accessToken');
                        return;
                    }
                    throw new Error(res.statusText);
                }
                return res.json();
            }).then(currentUser =>{
                console.log(currentUser);
                this.setState({
                    currentUser
                })
            }
            );
        }
    }

    render() {

        return <LoginPage />;
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
});

export default connect(mapStateToProps)(App);
