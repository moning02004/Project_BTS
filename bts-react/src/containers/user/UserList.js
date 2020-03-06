import React from 'react';
import { Table, TableContainer,TableRow, TableCell, TableBody, TableHead, Avatar} from '@material-ui/core';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '@material-ui/core/Button';
import {Dialog, DialogActions,DialogContent,DialogTitle } from '@material-ui/core'

const axios = require('axios');

class UserList extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        userList: [], // post 리스트
        currentPage : 1, // 현재 페이지 위치
        pageSize : 10, // 한 페이지에 보여줄 컨텐츠 갯수

        id: '',
        info:[],
        isDialogOpen: false,
    }
    console.log(document.cookie);

  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/user/').then(response => {
        let responses = response.data;
        responses.forEach(element => {
            const {userList} = this.state;
            this.setState({
              ...this.state,
              userList: userList.concat(element)
            }, () => { // callback 함수: 끝나면 이 함수를 실행
              console.log(this.state.userList); 
            }) 
           // setState는 비동기적
        });
    });
  }
  
  handleChange = (e) => { // target 현재 선택되어 있는 태크
    let nextState = {};
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
    
  }
  
userDelete = (e) => {
  let user_id = e.currentTarget.id;
  console.log(user_id);

  axios.delete('http://127.0.0.1:8000/user/delete/'+user_id+'/').then(response => {
    alert("탈퇴 처리가 완료되었습니다.");
    window.location.href = "/userList"
  }).catch(error => {
    console.log(error);
  });
}

handClickDialog = (e) => {
  let user_id = e.currentTarget.id;

  axios.get('http://127.0.0.1:8000/user/profile/'+user_id+'/').then(response => {
    let {id, username, nickname, grade, point} = response.data;
    this.setState({
      info: {id : id, username: username, nickname: nickname, grade: grade, point: point},
      isDialogOpen: true,
    });
  }).catch(error => {
    console.log(error);
  });
}

handleClose = () => {
  this.setState({ isDialogOpen: false });
}


  render(){     
    return(
      <React.Fragment>
        <Header />
        <div className="contain" style={{marginLeft: "3rem", marginTop: "3rem", marginRight: "3rem"}}>
          <div style={{margin: "auto", textAlign: "center", marginBottom: "1rem"}}>

            <Table className="table" style={{margin: "auto", width: '80%'}} >
              <TableHead style={{backgroundColor: "#EEEEFF"}}>
                <TableRow>
                  <TableCell style={{width: '10%'}}>번호</TableCell>
                  <TableCell style={{width: '40%'}}>이메일</TableCell>
                  <TableCell style={{width: '20%'}}>닉네임</TableCell>
                  <TableCell style={{width: '10%'}}>등급</TableCell>
                  <TableCell align='center' style={{width: '10%'}}>확인</TableCell>
                  <TableCell align='center' style={{width: '10%'}}>탈퇴</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {
                this.state.userList.map(user => {
                  let level = <div></div>;
                  switch(user.grade){
                    case "Bronze":
                      level = <Avatar style={{backgroundColor: "#cd7f32"}}>B</Avatar> ; break;
                    case "Silver":
                      level = <Avatar style={{backgroundColor: "#C0C0C0"}}>S</Avatar>;  break;
                    case "Gold":
                      level = <Avatar style={{backgroundColor: "#FFD700"}}>G</Avatar>; break;
                    default:
                      level = <Avatar style={{backgroundColor: "#B9F2FF", color: "#205055"}}>D</Avatar>; break;
                  }

                  return (
                    <TableRow key={user.id}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>{user.nickname}</TableCell>
                      <TableCell>
                        {level}
                      </TableCell>  
                      <TableCell>
                       <Button id={user.id} variant="outlined" color="primary" onClick={this.handClickDialog}>확인</Button> 
                        
                          <Dialog 
                            open={this.state.isDialogOpen}
                            fullWidth="md">

                            <DialogTitle id="alert-dialog-title" onClose={this.handleClose}>고객정보</DialogTitle>
                            <DialogContent dividers>
                              
                              고객번호 : {this.state.info.id}<br/>
                              이메일 : {this.state.info.username}<br/>
                              닉네임 : {this.state.info.nickname}<br/>
                              포인트 : {this.state.info.point}<br/>
                             
                            </DialogContent>
                            <DialogActions>
                              <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                            </DialogActions>
                          </Dialog>
                          
                      </TableCell>
                      <TableCell>
                        <Button id={user.id} variant="outlined" color="primary" size="1rem" onClick={this.userDelete}>탈퇴
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
              }
              </TableBody>
              </Table>                 
          </div>
       </div>
       <Footer/>
      </React.Fragment>
    );
  }
}

export default UserList;  