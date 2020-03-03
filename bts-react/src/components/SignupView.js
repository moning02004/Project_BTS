import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { IconButton } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import * as validation from '../utils/Validation';


class SignupView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      validUsername: false,
      password: '',
      password2: '',
      validPassword: false,
      nickname: '',
      checkUsername: false,
      disabled: true
    }
  }
  render(){
    const BtnCheck = () => (
      <IconButton disabled={this.state.validUsername ? false : true} onClick={this.checkUsername} style={{color: (this.state.checkUsername) ? "blue" : "red"}}>
        <DoneIcon />
      </IconButton>
    )

    return(
      <React.Fragment>
        <div className="container my-3">
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
                error={!this.state.validPassword}
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
                error= {this.state.password !== this.state.password2 || !this.state.validPassword ? true: false}
                value={this.state.password2}
                onChange={this.handleChange} />
            </div>

            <Button
              type="submit"
              margin="normal"
              fullWidth
              variant="contained"
              disabled={this.state.disabled}
              color="primary">Sign Up</Button>
          </form>

          <div style={{textAlign: "right"}}>
            <Link href="/signin" variant="body2">
              Already have an account? Sign in
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }

  handleChange = (e) => {
    let nextState = {
      disabled: true,
      [e.target.name]: e.target.value
    }
    if (e.target.name === "username") {
      nextState = {
        ...nextState,
        validUsername: validation.validUsername(e.target.value),
        checkUsername: false 
      }
    } else if (e.target.name === "password" || e.target.name === "password2") {
      nextState['validPassword'] = validation.validPassword(e.target.value);
    }
    this.setState(nextState, () => {
      this.setState({
        ...this.state,
        disabled: !validation.validSignup(this.state)
      });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { username, password, nickname } = this.state;
    this.props.onSubmit(username, password, nickname).then( () => {
      window.location.replace('/signin')
    });
  }

  checkUsername = (e) => {
    e.preventDefault();
    if (!validation.validUsername(this.state.username)) {
      alert('Email 형식이 아닙니다.');
      return ;
    }
    this.props.onCheck(this.state.username).then( () => {
      this.setState({
        ...this.state,
        checkUsername: (this.props.status === "CHECK_SUCCESS")
      }, () => {
        this.setState({
          ...this.state,
          disabled: !validation.validSignup(this.state)
        })
      });
      if (this.props.status === "CHECK_FAILURE") {
        alert('이미 있는 계정입니다.')
      }
    });
  }  
}

SignupView.defaultProps = {
  onSubmit: () => {console.log('signupView onSubmit not defined')},
  onCheck: () => {console.log('signupView onCheck not defined')}
}
export default SignupView;