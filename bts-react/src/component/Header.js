import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Auth from './Auth';
import { ListItemText, ListItem, Divider, List, Drawer } from '@material-ui/core';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false
    }
    this.auth = new Auth();
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
      login = (<Button variant="outlined" size="small" onClick={this.logout}>ME</Button>)
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
                {/* <a href="/"><img src={require('../img/armypurple.jpg')} align="center" alt="x" /></a> */}
                <a href="/" style={{textDecoration: "none", color: "black"}}>ARMYHOME</a>
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