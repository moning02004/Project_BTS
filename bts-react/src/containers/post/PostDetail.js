import React from 'react';
import { Table, TableContainer,TableRow, TableCell, TableBody, TableHead} from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const axios = require('axios');

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: 0,
        title: '',
        content: '',
        created: '',
        author: '',

        username: '',
    }
    this.id = this.props.match.params.id;
    this.username = this.props.currentUser.username; // 현재 로그인한 유저의 아이디
    
}

handleClickPostEdit = (e) => {
  window.location.href = "/postEdit/"+this.state.id;
}


componentDidMount() {
  axios.get('http://127.0.0.1:8000/post/'+ this.props.match.params.id+ '/').then(response => {
    let { id, title,content, created, author} = response.data;      
    this.setState({ 
      id: id, // 작성자 유저의 정보
      title: title,
      content: content,
      created: created,
      author: author,

    });
    console.log(response.data);
  //  console.log(this.props.currentUser.username);  //undefined
     console.log(this.username); //undefined

  }).catch( error => {
      console.log(error);
  });
}


  render(){
    return(
     <React.Fragment>
       <Header />
       <div className="root" style={{marginLeft: "3rem", marginTop: "3rem", marginRight: "3rem"}}>
         <div style={{margin: "auto", textAlign: "center", marginBottom: "1rem"}}>
         <TableContainer>
            <Table className="table" style={{margin: "auto", width: '80%'}} >
              <TableHead>
                <TableRow>
                  <TableCell colSpan="3" align='left' style={{width: '100%'}}><h3>{this.state.title}</h3></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='left' style={{width: '10%'}}>{this.state.id}</TableCell>
                  <TableCell align='left' style={{width: '20%'}}>{this.state.author.nickname}</TableCell>
                  <TableCell align='left' style={{width: '70%'}}>{this.state.created}</TableCell>
                </TableRow>
               </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell colSpan="3" align='left' style={{lineHeight: '400px'}}>{this.state.content}</TableCell>
                </TableRow>
              </TableBody>
              </Table>
            </TableContainer>
            
           author.username= {this.state.author.username} ,

          currentUser.username = 
          {this.props.currentUser.username}
          {this.state.username}
          
          <Button color="primary" size="1rem" onClick ={this.handleClickPostEdit}>수정</Button> 
            <Button color="primary" size="1rem">삭제</Button>  
            

        </div>
    </div>
    <Footer />
    </React.Fragment>
    );
 
    }
}

const mapStateToProps = (state) => { // 리덕스가 관리하는 상태를 지켜봄, 
  console.log(state);
  return {
  //  auth: state.auth.status.isAuth,
    currentUser: state.auth.status.currentUser
  }
};

PostDetail = connect(mapStateToProps)(PostDetail);
export default PostDetail;