import React from 'react';
import decoder from 'jwt-decode';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.user = null;
        this.auth = false;
        this.check();
    }

    check = () => {
        let token = localStorage.getItem('TOKEN');
        if (token) {
            let decode = decoder(token);
            if (!this.isExpired(decode.exp)) {
                this.user = decode.username;
                this.auth = true;
            } else {
                this.auth = true;
                localStorage.removeItem('TOKEN');
            }
        }
        
    }

    isExpired = (time) => {
        return (time > (new Date().getTime/1000));
    }

    logout = () => {
        localStorage.removeItem('TOKEN');
        this.auth = false;
        this.user = null;
    }
}

export default Auth;