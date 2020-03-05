import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ListItem, Divider, List, Drawer, Menu, MenuItem, Avatar } from '@material-ui/core';
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
          <a href="/btsProfile" style={{textDecoration: 'none', color: "black"}}>프로필</a>
        </ListItem>
        <ListItem button>
          <a href="/post" style={{textDecoration: 'none', color: "black"}}>자유게시판</a>
        </ListItem>
      </List>
      {
        this.props.currentUser.grade === "Dia" &&
        (<React.Fragment>
          <Divider />
          <List>
            <ListItem button>
              <a href="/userList" style={{textDecoration: 'none', color: "black"}}>회원</a>
            </ListItem>
            <ListItem button>
              <a href="/album/register" style={{textDecoration: 'none', color: "black"}}>앨범등록</a>
            </ListItem>
            <ListItem button>
              <a href="/policeList" style={{textDecoration: 'none', color: "black"}}>신고</a>
            </ListItem>
          </List>
        </React.Fragment>)
      }
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
    let singinData = {
      isAuth: false,
      user_id: ''
    };
    document.cookie = "key=" + btoa(JSON.stringify(singinData));
    this.props.onLogout();
    this.handleClose();
    window.location.reload();
  }
  render() {
    let signin;

    if (!this.props.auth) {
      signin = (
        <div>
          <MenuItem 
            onClick={() => { window.location.href = "/signin" }}><span style={{textDecoration: 'none', color: "black"}}>Signin</span>
          </MenuItem>
          <MenuItem onClick={() => { window.location.href = "/signup" }}><span style={{textDecoration: 'none', color: "black"}}>Signup</span></MenuItem>
        </div>)
    } else {
      signin = (
        <div>
          <MenuItem onClick={this.handleClose}><span className="cursorDefault">{this.props.currentUser.nickname} 님</span></MenuItem>
          <Divider />
          <MenuItem><span className="cursorDefault">{this.props.currentUser.point} p</span></MenuItem>          
          <Divider />
          <MenuItem onClick={this.logout}><span className="cursorDefault">로그아웃</span></MenuItem>
        </div>);
    }

    let auth = <div></div>;
    switch(this.props.currentUser.grade) {
      case "Bronze":
        auth = (<Avatar style={{backgroundColor: "#cd7f32"}}>B</Avatar>); break;
      case "Silver":
        auth = (<Avatar style={{backgroundColor: "#C0C0C0"}}>S</Avatar>); break;
      case "Gold":
        auth = (<Avatar style={{backgroundColor: "#FFD700"}}>G</Avatar>); break;
      default:
        auth = (<Avatar style={{backgroundColor: "#B9F2FF", color: "#205055"}}>D</Avatar>); break;
      
    }
    
    return (
      <React.Fragment>
        <div style={{borderBottom: `1px solid #ffdddd`}}>
          <Toolbar>
            <Button onClick={this.toggleDrawer('left', true)}>Menu</Button>
            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
              {this.sideList('left')}
            </Drawer>

            <Typography component="h2" variant="h5" color="inherit" align="center" noWrap style={{flexGrow: 1}}>
                <a href="/" style={{textDecoration: "none", color: "black"}}>ARMYHOME</a>
            </Typography>
            
            <div>
              <Button size="small" onClick={this.handleClick} style={{width: "5%"}}>
                {(this.props.auth) ? auth : "User"}
              </Button>
              <Menu id="simple-menu" anchorEl={this.state.anchorEl} keepMounted open={Boolean(this.state.anchorEl)} onClose={this.handleClose}>
                {signin}
              </Menu>
            </div>
          </Toolbar>
        </div>
  
        <div className="container" style={{borderBottom: `1px solid #ffdddd`}}>
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