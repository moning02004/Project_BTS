import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ListItem, Divider, List, Drawer, Menu, MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../actions/Authentication';


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
        <ListItem button>
          <a href="/profile" style={{textDecoration: 'none', color: "black"}}>프로필</a>
        </ListItem>
        <ListItem button>
          <a href="/post" style={{textDecoration: 'none', color: "black"}}>자유게시판</a>
        </ListItem>
      </List>
      <Divider />
      <List>
      <ListItem button>
          <a href="/member" style={{textDecoration: 'none', color: "black"}}>회원</a>
        </ListItem>
        <ListItem button>
          <a href="/register" style={{textDecoration: 'none', color: "black"}}>앨범등록</a>
        </ListItem>
        <ListItem button>
          <a href="/police" style={{textDecoration: 'none', color: "black"}}>신고</a>
        </ListItem>
      </List>
    </div>
  );

  toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ ...this.state, [side]: open });
  };
  
  logout = (e) => {
    e.preventDefault();    
    let loginData = {
      isAuth: false,
      user_id: ''
    };
    document.cookie = "key=" + btoa(JSON.stringify(loginData));
    this.props.onLogout();
    window.location.reload();
  }
  render() {
    let login;

    if (!this.props.auth) {
      login = (
        <div>
          <MenuItem><a href="/login" style={{textDecoration: 'none', color: "black"}}>Login</a></MenuItem>
          <MenuItem><a href="/signup" style={{textDecoration: 'none', color: "black"}}>Signup</a></MenuItem>
        </div>)
    } else {
      login = (
        <div>
          <MenuItem><span className="cursorDefault" >{this.props.currentUser.nickname} 님</span></MenuItem>
          <Divider />
          <MenuItem><a href="/profile" style={{textDecoration: 'none', color: "black"}}>Propile</a></MenuItem>
          <MenuItem onClick={this.logout}><span onClick={this.logout}>Logout</span></MenuItem>
        </div>);
    }

    return (

      <React.Fragment>
        <div style={{borderBottom: `1px solid #ffdddd`}}>
          <Toolbar style={{backgroundColor: ""}}>
          <Button onClick={this.toggleDrawer('left', true)}>Menu</Button>
          <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
            {this.sideList('left')}
          </Drawer>

            <Typography component="h2" variant="h5" color="inherit" align="center" noWrap style={{flexGrow: 1}}>
                <a href="/" style={{textDecoration: "none", color: "black"}}>ARMYHOME</a>
            </Typography>
            
            <div>
              <Button variant="outlined" size="small" onClick={this.handleClick} style={{width: "5%"}}>
                {(this.props.auth) ? "Me" : "User"}
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

const mapStateToProps = (state) => ({
  auth: state.auth.status.isAuth,
  currentUser: state.auth.status.currentUser
})
const mapDispatchToProps = (dispatch) => ({
  onLogout: () => {return dispatch(actions.getStatusClear());}
})
Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;