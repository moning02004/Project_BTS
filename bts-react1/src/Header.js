import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-50px',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  main_image: {
      padding: theme.spacing(3),
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Menu
        </Button>
        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>   
            <MenuItem onClick={handleClose}>BTS Propile</MenuItem>
            <MenuItem onClick={handleClose}>Board</MenuItem>
        </Menu>
        <Typography component="h2" variant="h5" color="inherit" align="center" noWrap className={classes.toolbarTitle}>
            <Button size="small">BTS_Amry</Button>
        </Typography>

        {/* 로그인, 로그아웃*/}
        <TextField id="email" label="Email" margin="10px"/>
        <TextField id="password" label="Password" />
        <Button variant="outlined" size="small">Login</Button>
        <Button variant="outlined" size="small">Logout</Button>

      </Toolbar>

    {/* 메인 이미지 사진*/}
      <div className="main_image">
        <img src="https://www.officialcharts.com/media/657256/bts-make-it-right.jpg?width=796&mode=stretch" />
     </div>
      
      {/*앨범 카테고리 선택 메뉴 onClick 하면 밑에 카테고리별로 앨범 리스트가 변경*/}
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary} >
          <Button>전체</Button>
          <Button>정규</Button>
          <Button>미니</Button>
          <Button>싱글</Button>
          <Button>OST</Button>
      </Toolbar>

      {/* 메뉴 싱글, OST,  정규, 미니 등등 앨범 카테고리 map을 불러와야함 */}
{/*      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
       */}
    </React.Fragment>
  );
}

// 회원정보(아이디, 닉네임 등),페이지마다 가지고와야함
Header.propTypes = {
  sections: PropTypes.string,
  title: PropTypes.string,
};