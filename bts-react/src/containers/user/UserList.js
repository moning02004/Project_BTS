import React from 'react';
import { Table, TableContainer,TableRow, TableCell, TableBody, TableHead, Avatar} from '@material-ui/core';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '@material-ui/core/Button';

// modal
import Modal from '@trendmicro/react-modal';
import '@trendmicro/react-modal/dist/react-modal.css';

const axios = require('axios');

class UserList extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        userList: [], // post 리스트
        currentPage : 1, // 현재 페이지 위치
        pageSize : 10, // 한 페이지에 보여줄 컨텐츠 갯수

        modal: false,
    }
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
  

handleClickAlbum = (e) => {
  console.log(e.currentTarget);
}
  
handleChangePage = (event, newPage) => {
  this.setPage(newPage);
};
  
handleChangeRowsPerPage = event => {
  this.setRowsPerPage(+event.target.value);
  this.setPage(0);
};

userDelete = (e) => {
  axios.post('http://127.0.0.1:8000/user/delete/'+this.state.id+'/', {
    id: this.state.id,

  }).then(response => {
    // modal. 탈퇴처리가 완료되었습니다.

    window.location.href = "/userList"
  }).catch(error => {
    console.log(error);
  })
}
/*
handleOpenModal = (e) => {
  <Modal>
  <Modal.Header>
      <Modal.Title>
          Modal Title
      </Modal.Title>
  </Modal.Header>
  <Modal.Body>
      Modal Body
  </Modal.Body>
  <Modal.Footer>
      <Button
          btnStyle="primary"
   //       onClick={closeModal}
      >
          Save
      </Button>
      <Button
          btnStyle="default"
     //     onClick={closeModal}
      >
          Close
      </Button>
  </Modal.Footer>
</Modal>
};
*/

  render(){     
    return(
      <React.Fragment>
        <Header />
        <div lassName="container" style={{marginLeft: "3rem", marginTop: "3rem", marginRight: "3rem"}}>
          <div style={{margin: "auto", textAlign: "center", marginBottom: "1rem"}}>

            <Table className="table" style={{margin: "auto", width: '80%'}} >
              <TableHead>
                <TableRow>
                  <TableCell style={{width: '10%'}}>번호</TableCell>
                  <TableCell style={{width: '40%'}}>이메일</TableCell>
                  <TableCell style={{width: '30%'}}>닉네임</TableCell>
                  <TableCell style={{width: '10%'}}>등급</TableCell>
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
                      <TableCell><a>{user.username}</a></TableCell>
                      <TableCell>{user.nickname}</TableCell>
                      <TableCell>
                        {level}
                      </TableCell>  
                      <TableCell><Button color="primary" size="1rem" >탈퇴</Button></TableCell>
                    </TableRow>
                  )
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

// modal

export default UserList;  