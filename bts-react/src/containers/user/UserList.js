import React from 'react';
import { Table, TableContainer,TableRow, TableCell, TableBody, TableHead} from '@material-ui/core';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const axios = require('axios');

class UserList extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        userList: [], // post 리스트
        currentPage : 1, // 현재 페이지 위치
        pageSize : 10, // 한 페이지에 보여줄 컨텐츠 갯수
    }
  }

 
componentDidMount() {
  axios.get('http://127.0.0.1:8000/user/').then(response => {
      let responses = response.data;
      console.log(responses);

      responses.forEach(element => {
          const {userList} = this.state;
          this.setState({
            userList: userList.concat(element)
          })
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
  
    render(){
        return(
          <React.Fragment>
            <Header />
              <div lassName="container" style={{marginLeft: "3rem", marginTop: "3rem", marginRight: "3rem"}}>
                  <div style={{margin: "auto", textAlign: "center", marginBottom: "1rem"}}>

                    <Table className="table" style={{margin: "auto", width: '80%'}} >
                      <TableHead>
                        <TableRow>
                          <TableCell align='left' style={{width: '10%'}}>번호</TableCell>
                          <TableCell align='left' style={{width: '40%'}}>이메일</TableCell>
                          <TableCell align='left' style={{width: '20%'}}>닉네임</TableCell>
                          <TableCell align='left' style={{width: '30%'}}>등급</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                      {this.state.userList.map(user =>
                        <TableRow key={user.id}>
                          <TableCell align='left'>{user.id}</TableCell>
                          <TableCell align='left'><a href='/user/:{user.id}' style={{textDecoration: 'none', color: "black"}}>{user.username}</a></TableCell>
                          <TableCell align='left'>{user.nickname}</TableCell>
                          <TableCell align='left'>{user.grade}</TableCell>
                        </TableRow>
                      )}
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
