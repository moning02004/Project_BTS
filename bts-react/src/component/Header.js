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
          <Button variant="outlined" size="small"><a href="/register" style={{textDecoration: 'none', color: "black"}}>Register</a></Button>

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



/* 앱바_open
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}>Open Left</Button>
      <Button onClick={toggleDrawer('right', true)}>Open Right</Button>
      <Button onClick={toggleDrawer('top', true)}>Open Top</Button>
      <Button onClick={toggleDrawer('bottom', true)}>Open Bottom</Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
      <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
        {fullList('top')}
      </Drawer>
      <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
        {fullList('bottom')}
      </Drawer>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}


*/
