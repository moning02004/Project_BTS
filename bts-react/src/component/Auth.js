import React from 'react';
import decoder from 'jwt-decode';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
        this.authenticated = false;
        this.check();
    }

    check = () => {
        let token = localStorage.getItem('token');
        console.log(token);
        if (token != null) {
            let decode = decoder(token);
            this.authenticated = true;

            if (!this.isExpired(decode.exp)){
                console.log('good');
            } else {
                localStorage.removeItem('token');
            }
        }
    }
    
    isAuthenticated = () => {
        if (this.state.user) return true;
        return false;
    }

    isExpired = (time) => {
        return (time > (new Date().getTime/1000));
    }

    logout = () => {
        localStorage.removeItem('token');
    }
}

export default Auth;