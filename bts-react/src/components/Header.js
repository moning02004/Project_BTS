import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ListItemText, ListItem, Divider, List, Drawer, Menu, MenuItem } from '@material-ui/core';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false,
      anchorEl: null,
    }
  }
  
  handleClose = () => {
    this.setState({
      anchorEl: null,
      authenticated: false
    });
  }

  handleClick = (e) => {
    this.setState({
      anchorEl: e.currentTarget
    });
  }

  sideList = side => (
    <div
      style={{width: 250}}
      role="presentation"
      onClick={this.toggleDrawer(side, false)}
      onKeyDown={this.toggleDrawer(side, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ ...this.state, [side]: open });
  };
  
  logout = () => {
    window.location.reload();
  }
  render() {
    let login;

    if (!true) {
      login = (
        <div>
          <MenuItem><a href="/login" style={{textDecoration: 'none', color: "black"}}>Login</a></MenuItem>
          <MenuItem><a href="/signup" style={{textDecoration: 'none', color: "black"}}>Signup</a></MenuItem>
        </div>)
    } else {
      login = (
        <div>
          <MenuItem><span className="cursorDefault" >A 님</span></MenuItem>
          <Divider />
          <MenuItem><a href="/profile" style={{textDecoration: 'none', color: "black"}}>Propile</a></MenuItem>
          <MenuItem onClick={this.logout}><span onClick={this.logout}>Logout</span></MenuItem>
        </div>);
    }

    return (

      <React.Fragment>
        <div style={{borderBottom: `1px solid #ffdddd`}}>
          <Toolbar style={{backgroundColor: ""}}>
          <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
          <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
            {this.sideList('left')}
          </Drawer>

            <Typography component="h2" variant="h5" color="inherit" align="center" noWrap style={{flexGrow: 1}}>
                <a href="/" style={{textDecoration: "none", color: "black"}}>ARMYHOME</a>
            </Typography>
            
            <div>
              <Button variant="outlined" size="small" onClick={this.handleClick} style={{width: "5%"}}>
                {(false) ? "Me" : "User"}
              </Button>
              <Menu id="simple-menu" anchorEl={this.state.anchorEl} keepMounted open={Boolean(this.state.anchorEl)} onClose={this.handleClose}>
                {login}
              </Menu>
            </div>
    
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