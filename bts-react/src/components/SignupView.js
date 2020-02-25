import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { IconButton } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';


class SignupView extends React.Component {
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
  render(){
    const BtnCheck = () => (
      <IconButton onClick={this.checkUsername} style={{color: (this.state.checkUsername) ? "blue" : "red"}}>
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
            <Link href="/signin" variant="body2">
              Already have an account? Sign in
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { username, password, nickname } = this.state;
    this.props.onSubmit(username, password, nickname).then( () => {
      window.location.replace('/signin')
    });
  }
  
  handleChange = (e) => {
    let nextState = {}
    nextState[e.target.name] = e.target.value;
    if (e.target.name === "username") {
      nextState["checkUsername"] = false;
    }
    this.setState(nextState, data => {
      if (this.enableSubmit()) {
        this.setState({
          disabled: false
        })
      }
    });
  }

  enableSubmit = (e) => {
    let { username, password, password2, nickname, checkUsername } = this.state;
    return (username !== "" && password !== "" && password === password2 && nickname !== "" && checkUsername);
  }

  checkUsername = (e) => {
    e.preventDefault();
    this.props.onCheck(this.state.username).then( () => {
      this.setState({
        ...this.state,
        checkUsername: (this.props.status === "CHECK_SUCCESS")
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