import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
 
const axios = require('axios');

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    }
  }

  handleClick = (e) => {
    this.setState({
      anchorEl: e.currentTarget
    });
  }
  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  }

  login = (e) => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    axios.post('http://localhost:8000/user/login/', {
      email: email,
      password: password
    })
    .then( response => { console.log(response) } )
    .catch( response => { console.log(response) } );
  }
  render() {

    return (

      <React.Fragment>
        <div style={{borderBottom: `1px solid #ffdddd`}}>
          <Toolbar>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
              Menu
            </Button>
            <Menu id="simple-menu" anchorEl={this.state.anchorEl} keepMounted open={Boolean(this.state.anchorEl)} onClose={this.handleClose}>   
                <MenuItem><a href="/profile" style={{textDecoration: 'none'}}>BTS Propile</a></MenuItem>
                <MenuItem><a href="/postList" style={{textDecoration: 'none'}}>Post</a></MenuItem>
            </Menu>

            <Typography component="h2" variant="h5" color="inherit" align="center" noWrap style={{flexGrow: 1}}>
                <a href="/"><img src={require('./img/armypurple.jpg')}/></a>
            </Typography>
    
            <TextField id="email" label="Email" margin="10px" type="email" />
            <TextField id="password" label="Password" type="password" />
            <Button variant="outlined" size="small" onClick={this.login}>Login</Button>
            <Button variant="outlined" size="small"><a href="/signup" style={{textDecoration: 'none'}}>Signup</a></Button>
    
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