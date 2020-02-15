import React, { Fragment } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Auth from './Auth';

const axios = require('axios');
let decoder = require('jwt-decode');

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    }
    this.auth = new Auth();
  }

  handleClick = (e) => {
    this.setState({
      anchorEl: e.currentTarget
    });
  }
  handleClose = () => {
    this.setState({
      anchorEl: null,
      authenticated: false
    });
  }

  login = (e) => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    axios.post('http://127.0.0.1:8000/user/login/', {
      username: email,
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
  logout = () => {
    this.auth.logout();    
    this.auth.authenticated = false;
    window.location.reload();
  }
  render() {
    let login;

    if (!this.auth.authenticated) {
      login = (<Fragment>
        <TextField id="email" label="Email" margin="10px" type="email" />
        <TextField id="password" label="Password" type="password" />
        <Button variant="outlined" size="small" onClick={this.login}>Login</Button>
        <Button variant="outlined" size="small"><a href="/signup" style={{textDecoration: 'none'}}>Signup</a></Button>
      </Fragment>)
    } else {
      login = (<Fragment><Button variant="outlined" size="small" onClick={this.logout}>LOGOUT</Button></Fragment>)
    }

    return (
      <React.Fragment>
        <div style={{borderBottom: `1px solid #ffdddd`}}>
          <Toolbar>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
              Menu
            </Button>
            <Menu id="simple-menu" anchorEl={this.state.anchorEl} keepMounted open={Boolean(this.state.anchorEl)} onClose={this.handleClose}>   
                <MenuItem onClick={this.handleClose}>BTS Propile</MenuItem>
                <MenuItem onClick={this.handleClose}>Board</MenuItem>
            </Menu>

            <Typography component="h2" variant="h5" color="inherit" align="center" noWrap style={{flexGrow: 1}}>
                <Button size="small">BTS_Amry</Button>
            </Typography>
    
            {login}
    
          </Toolbar>
        </div>
  
        <div style={{width: "50%", margin: 'auto'}}>
          <img src="https://www.officialcharts.com/media/657256/bts-make-it-right.jpg?width=796&mode=stretch" width="100%" />
       </div>
      </React.Fragment>
    );
  }
}

export default Header;