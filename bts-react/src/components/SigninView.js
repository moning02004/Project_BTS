// 로그인 화면
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import JwtDecode from 'jwt-decode';


class SigninView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  handleChange = (e) => {
    let nextState = {}
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  signin = (e) => {
    e.preventDefault();
    let {username, password} = this.state;
    this.props.onSubmit(username, password).then(
      () => {
        if (this.props.status === "SUCCESS") {
          let token = JwtDecode(this.props.token);
          let signinData = {
            isAuth: true,
            user_id: token.user_id
          };
          document.cookie = "key=" + btoa(JSON.stringify(signinData));
        }
        window.location.replace('/')
      }
    );
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div style={{margin: "auto", textAlign: "center", marginBottom: "1rem"}}>
            <a href="/"><img src='../../img/armypurple.jpg' className="img" alt="" /></a>
          </div>
          <form onSubmit={this.signin}>
            <div className="formGroup">
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
                autoFocus
              />

              <TextField
                type="password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </div>
            <Button type="submit" fullWidth variant="contained" color="primary" onClick={this.signin}>Sign In</Button>
          </form>
          <div style={{textAlign: "right"}}>
            <Link href="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </div>
      </div>
    </React.Fragment>
  )};
}
export default SigninView;