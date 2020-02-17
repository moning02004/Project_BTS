// 로그인 화면
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';

const axios = require('axios');


class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  login = (e) => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    axios.post('http://127.0.0.1:8000/user/login/', {
      username: username,
      password: password
    }).then( response => {
      let decode = response.data.token;
      
      localStorage.setItem('token', decode);
      this.auth.authenticated = true;
      window.location.reload();
    }).catch( response => {
      alert('해당하는 계정이 없습니다.');
    });
  }

  render() {

    return (
      <React.Fragment>
        <div className="container">
          <div style={{margin: "auto", textAlign: "center", marginBottom: "1rem"}}>
            <a href="/"><img src={(require('../img/armypurple.jpg'))} className="img" /></a>
          </div>

          <form onSubmit={this.login}>
            <div className="formGroup">
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email Address"
                id="username"
                autoFocus
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
            <div style={{textAlign: "right"}}>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </div>
          </form>
      </div>
    </React.Fragment>
  )};
}

export default Login;