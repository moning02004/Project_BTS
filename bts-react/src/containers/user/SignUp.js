import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { IconButton } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

const axios = require('axios');

class SignUp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password2: '',
      nickname: '',
      checkUsername: false,
      disabled: true
    }
  }

  handleChange = (e) => {
    let nextState = {}
    nextState[e.target.name] = e.target.value;
    if (e.target.name === "username") {
      nextState["checkUsername"] = false;
    }
    this.setState(nextState, data => {
      console.log(this.enableSubmit())
      if (this.enableSubmit()) {
        this.setState({
          disabled: false
        })
      }
    });
  }
  enableSubmit = (e) => {
    let { username, password, password2, nickname, checkUsername } = this.state;
    return (username != "" && password != "" && password === password2 && nickname != "" && checkUsername);
  }

  checkEmail = (e) => {
    let check = e.target;

    axios.post('http://127.0.0.1:8000/user/check/', {
      username: this.state.username
    }).then( response => {
      this.setState({
        checkUsername: true
      });
    }).catch( response => {
      console.log(response);
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    let { username, password, nickname } = this.state;
    axios.post('http://127.0.0.1:8000/user/register/', {
      username: username,
      password: password,
      nickname: nickname
    }).then( response => {
      console.log(response)
      window.location.href = '/login';
    }).catch( response => {
      console.log(response)
    })
  }
  render(){
    const BtnCheck = () => (
      <IconButton onClick={this.checkEmail} style={{color: (this.state.checkUsername) ? "blue" : "red"}}>
        <DoneIcon />
      </IconButton>
    )
    return(
      <React.Fragment>
        <div className="container">
          <div style={{margin: "auto", textAlign: "center", marginBottom: "1rem"}}>
            <a href="/"><img src='../../img/armypurple.jpg' className="img" alt="" /></a>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className="formGroup">

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="username" 
                value={this.state.username}
                onChange={this.handleChange} 
                InputProps={{ endAdornment: <BtnCheck /> }}
                autoFocus />
              
              <TextField
                margin="normal"
                variant="outlined"
                required
                fullWidth
                label="Nickname"
                name="nickname"
                value={this.state.nickname}
                onChange={this.handleChange}  />

              <TextField
                type="password"
                margin="normal"
                variant="outlined"
                required
                fullWidth
                label="Password"
                name="password" 
                value={this.state.password}
                onChange={this.handleChange} />

              <TextField
                type="password"
                margin="normal"
                variant="outlined"
                required
                fullWidth
                label="Password Confirm"
                name="password2" 
                error= {this.state.password !== this.state.password2 ? true: false}
                value={this.state.password2}
                onChange={this.handleChange} />
            </div>

            <Button
              type="submit"
              margin="normal"
              fullWidth
              variant="contained"
              disabled={this.state.disabled}
              color="primary"> Sign Up</Button>
          </form>

          <div style={{textAlign: "right"}}>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SignUp;