import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Auth from './Auth';


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
  logout = () => {
    this.auth.logout();
    window.location.reload();
  }
  render() {
    let login;

    if (!this.auth.auth) {
      login = (
        <div>
          <Button variant="outlined" size="small"><a href="/login" style={{textDecoration: 'none', color: "black"}}>Login</a></Button>
          <Button variant="outlined" size="small"><a href="/signup" style={{textDecoration: 'none', color: "black"}}>Signup</a></Button>
        </div>)
    } else {
      login = (<Button variant="outlined" size="small" onClick={this.logout}>LOGOUT</Button>)
    }

    return (

      <React.Fragment>
        <div style={{borderBottom: `1px solid #ffdddd`}}>
          <Toolbar>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick} style={{width: "5%"}}>
              Menu
            </Button>
            <Menu id="simple-menu" anchorEl={this.state.anchorEl} keepMounted open={Boolean(this.state.anchorEl)} onClose={this.handleClose}>   
                <MenuItem><a href="/profile" style={{textDecoration: 'none', color: "black"}}>BTS Propile</a></MenuItem>
                <MenuItem><a href="/post" style={{textDecoration: 'none', color: "black"}}>Post</a></MenuItem>
            </Menu>

            <Typography component="h2" variant="h5" color="inherit" align="center" noWrap style={{flexGrow: 1}}>
                <a href="/"><img src={require('../img/armypurple.jpg')} align="center" alt="x" /></a>
            </Typography>
            
            <div>{login}</div>
    
          </Toolbar>
        </div>
  
        <div style={{width: "50%", margin: 'auto'}}>
          <img src="https://www.officialcharts.com/media/657256/bts-make-it-right.jpg?width=796&mode=stretch" width="100%" alt="x" />
       </div>
      </React.Fragment>
    );
  }
}

export default Header;