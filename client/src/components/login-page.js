import React from 'react';

export default class LoginPage extends React.Component {
    
    render(){
        return (
            <div>
                <div>
                    <p>FrenchX</p>
                    <p>Coffee & Repeat</p>
                    <p>Learning Coffee and its nuances through repetition!</p>
                </div>
                <div>
                    <a href={'/api/auth/google'}>Login with Google</a>
                </div>
            </div>
        );
    }
}
