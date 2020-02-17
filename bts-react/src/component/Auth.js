import React from 'react';
import decoder from 'jwt-decode';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            authenticated: false
        }
        this.check();
    }

    check = () => {
        let token = localStorage.getItem('token');
        if (token != null) {
            let decode = decoder(token);
            
            if (!this.isExpired(decode.exp)){
                this.setState({
                    user: decode.data,
                    authenticated: true
                });
            } else {
                this.setState({
                    user: null,
                    authenticated: false
                })
                localStorage.removeItem('token');
            }
        }
    }
    
    isAuthenticated = () => {
        return this.authenticated;
    }

    isExpired = (time) => {
        return (time > (new Date().getTime/1000));
    }

    logout = () => {
        localStorage.removeItem('token');
        this.authenticated = false;
    }
}

export default Auth;