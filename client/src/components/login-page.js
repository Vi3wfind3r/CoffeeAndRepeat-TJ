import React from 'react';
import './login-page.css';

export default class LoginPage extends React.Component {
    
    render(){
        return (
            <div className='login-container'>
                <div className='title-box'>
                    <p className='company'>FrenchX</p>
                    <p className='app-name'>Coffee & Repeat</p>
                    <p className='app-description'>Learning about coffee and its nuances through repetition!</p>
                </div>
                <div className='login-button'>
                    <a href={'/api/auth/google'}>Login with Google</a>
                </div>
            </div>
        );
    }
}
