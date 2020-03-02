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

        comment_List: [],
        username: '',
    }
    this.id = this.props.match.params.id;
 //   this.state.username = this.props.currentUser.username; // 현재 로그인한 유저의 아이디
    this.username = this.props.currentUser.username;
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

  }).catch( error => {
      console.log(error);
  });

  axios.get('http://127.0.0.1:8000/post/'+ this.props.match.params.id+ '/comment/').then(response => {
    response.forEach(element => {
      const {comment_List} = this.state;      
      this.setState({
        comment_List: comment_List.concat(element)
      }, ()=> {
        console.log(this.state.comment_List);
      })
    });
  }).catch( error => {
    console.log(error);
  });

}

  render(){
    return(
     <React.Fragment>
       <Header />
       <div className="root" style={{marginLeft: "3rem", marginTop: "3rem", marginRight: "3rem"}}>
          {/* 게시글 */}
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
            <Button color="primary" size="1rem" onClick ={this.handleClickPostEdit}>수정</Button> 
            <Button color="primary" size="1rem">삭제</Button>
            
        </div>
      
      {/* 댓글란 */}
      
      <div style={{margin: "auto", textAlign: "center", marginBottom: "1rem", marginTop: "5rem"}}>
      <div align="right" style={{margin: "auto", width: '80%'}}>
        <input type="text" align="left"></input>
        <Button>작성</Button>
      </div>
        <Table className="table_comment" style={{margin: "auto", width: '80%'}}>
          {this.state.comment_List.map(comment => 
          
          <TableRow  colSpan={2} >
            <TableCell align='left' style={{width: '30%'}}> 
           {/*    {comment.author}<br></br> */} 
           작성자
            </TableCell>
            <TableRow >
              <TableCell align='left' style={{width: '70%'}}>
           {/*    {comment.content} */} 
           내용
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='left'style={{width: '70%'}}>
             {/*  {comment.created} */} 
             시간 /신고아이콘
              </TableCell>
            </TableRow>
          </TableRow>
          )}
        </Table>
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
    currentUser: state.auth.status.currentUser
  }
};

PostDetail = connect(mapStateToProps)(PostDetail);
export default PostDetail;