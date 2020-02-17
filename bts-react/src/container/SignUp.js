import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';


class SignUp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password2: '',
      nickname: '',
      check_username: false
    }
  }
  handleSubmit = (e) => {
    console.log(e);
  }
  render(){
    return(
      <React.Fragment>
        <div className="container">
          <div style={{margin: "auto", textAlign: "center", marginBottom: "1rem"}}>
            <a href="/"><img src={(require('../img/armypurple.jpg'))} className="img" /></a>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className="formGroup">

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="username" autoFocus />
              <Button color="primary">Email Check</Button>
              
              <TextField
                margin="normal"
                variant="outlined"
                required
                fullWidth
                label="Nickname"
                name="nickname" />

              <TextField
                margin="normal"
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password" />

              <TextField
                margin="normal"
                variant="outlined"
                required
                fullWidth
                name="passwordConfirm"
                label="Password Confirm"
                type="password" />
            </div>

            <Button
              margin="normal"
              type="submit"
              fullWidth
              variant="contained"
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