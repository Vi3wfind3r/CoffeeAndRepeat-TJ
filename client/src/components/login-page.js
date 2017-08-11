import React from 'react';
import './login-page.css';

export default class LoginPage extends React.Component {
    
    render(){
        return (
            <div className='login-container'>
                <div className='title-box'>
                    <p className='company'>Coffee & Repeat</p>
                    <p className='app-description'><strong>Spaced repetition is an extremely effective way to learn and retain new information. This method of learning involves answering a series of questions where incorrectly answered questions will be seen again shortly after missing them. It is this repetition that really solidifies the information into your noodle. 
                    <br></br>
                    <p></p>
                    Let's try it out by learning all about the basic types of coffee, flavor profiles, and brewing nuances through spaced repetition!</strong></p>
                </div>
                <div className='login-button'>
                    <a href={'/api/auth/google'}>Login with Google</a>
                </div>
            </div>
        );
    }
}
