import React from 'react';
import { Table,Typography,TableContainer,TableRow, TableCell, TableBody, TableHead, Avatar} from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { connect } from 'react-redux';


const axios = require('axios');

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: this.props.match.params.id,
        title: '',
        content: '',
        created: '',
        author: '',

        comment: '',
        postcomment_set: [],
    }
  }

  render(){
    // 게시판 수정/삭제 버튼
    let btn1 = null;

    if(this.state.author.username == this.props.currentUser.username){
      btn1 = (
        <div>
            <Button color="primary" size="1rem" onClick ={this.handleClickPostEdit}>수정</Button> 
            <Button color="primary" size="1rem" onClick = {this.handleClickPostDelete}>삭제</Button>
        </div>
      );
    }

    return(
     <React.Fragment>
       <Header />
       <div className="root" style={{marginLeft: "3rem", marginTop: "3rem", marginRight: "3rem"}}>
          {/* 게시글 */}
         <div style={{margin: "auto", textAlign: "center", marginBottom: "1rem"}}>
         <h3 style={{color: "grey"}}>자유게시판</h3>
         <TableContainer>
            <Table className="table" style={{margin: "auto", width: '80%', border:'1px solid grey'}} >
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
            {btn1}      
        </div>
      
      {/* 댓글란 */}
      <div className="container-80 my-3">
      <h3>Comment</h3>
        <div className="input-group">
        
          <textarea className="form-control comment-textarea" name="comment"
              value={this.state.comment} onChange={this.handleChange}
              style={{width:"700px"}}/>
          <div className="input-group-append">
            <button type="submit" className="input-group-text"
               onClick={this.handleClickCommentAdd}>작성</button>
          </div>
        </div>
        {this.state.postcomment_set.map((comment, index) => {
       
          let grade = <div></div>;
          let btn2 = '';
          switch(this.props.currentUser.grade) {
            case "Bronze":
             grade = (<Avatar style={{backgroundColor: "#cd7f32"}}>B</Avatar>); break;
            case "Silver":
             grade = (<Avatar style={{backgroundColor: "#C0C0C0"}}>S</Avatar>); break;
            case "Gold":
             grade = (<Avatar style={{backgroundColor: "#FFD700"}}>G</Avatar>); break;
            default:
             grade = (<Avatar style={{backgroundColor: "#B9F2FF", color: "#205055"}}>D</Avatar>); break;
          }
          if(comment.author.username == this.props.currentUser.username){              
            btn2 = (
            <div>
               <Button id={comment.id} color="primary" size="small" onClick={this.handClickCommentDelete}>삭제</Button>
             </div>
            );
          }
          return (
           <React.Fragment>
            <div id={comment.id} style={{display: "flex", flexWrap: "nowrap", alignItems: "center"}}>
              <div>{grade}</div>
              <div className="inline-block ml-3 w-100">
                <Typography><b>{comment.author.nickname}</b></Typography>
                  <div className="w-100">
                    <div className="inline">
                      <span>{comment.content}</span>
                        <div className="date">
                          <span className="small mr-2">{comment.created}</span>
                          {btn2}
                        </div>
                    </div>
                  </div>
                 </div>
                </div>
            </React.Fragment>
          );
        })} 
     </div>
     </div>
    <Footer />
    </React.Fragment>
    );

    }


// 1-1. 게시글, 댓글 불러오기    
componentDidMount() {
  axios.get('http://127.0.0.1:8000/post/'+ this.props.match.params.id+ '/').then(response => {
    let { id, title,content, created, author,postcomment_set } = response.data;      
    this.setState({ 
      id: id, // 작성자 유저의 정보
      title: title,
      content: content,
      created: created,
      author: author,
    
      postcomment_set: postcomment_set,
  });  
  }).catch( error => {
      console.log(error);
    });
}

// 1-2. 게시글 수정
handleClickPostEdit = (e) => {
  window.location.href = "/post/edit/"+this.state.id;
}

// 1-3. 게시글 삭제
handleClickPostDelete = (e) => {
  axios.delete('http://127.0.0.1:8000/post/delete/'+ this.state.id+ '/').then(response =>{
    alert("게시글이 삭제되었습니다.");
    window.location.href = "/post/";
  }
  ).catch(error =>{
    console.log(error);
  });
}

// 2-1. 댓글 작성
handleClickCommentAdd = (e) => {
  e.preventDefault();
    
  if(this.props.currentUser.username == ""){
    alert("로그인하세요.");
  }
  if(this.state.comment== ""){
    alert("내용을 입력하세요.");
  }
  
  axios.post('http://127.0.0.1:8000/post/comment/register/' , {
    post : this.state.id,
    author: this.props.currentUser.user_id,
    content: this.state.comment,
    
  }).then(response => {
    this.commentRender(); // 댓글 리랜더링
  }).catch(error => {
    console.log(error);
  });
}
  
// 2-2. 댓글 작성 후 댓글리스트 다시 불러오기
commentRender(){
  axios.get('http://127.0.0.1:8000/post/'+ this.state.id+ '/').then(response => {
    let {postcomment_set } = response.data;      
    this.setState({ 
      postcomment_set: postcomment_set,
    });
  }).catch( error => {
    console.log(error);
  });
}

// 2-3. 댓글 수정
handleClickCommentEdit = () => {
}

// 2-4. 댓글 삭제
handClickCommentDelete = (e) => {
  let comment_id = e.currentTarget.id;
  console.log(e.currentTarget.id);
  axios.delete('http://127.0.0.1:8000/post/comment/delete/'+ comment_id+ '/').then(response =>{
    alert("댓글이 삭제되었습니다.");
    this.commentRender(); // 댓글 리랜더링
  }).catch(error => {
    console.log(error);
  });

}

handleChange = (e) => { // target 현재 선택되어 있는 태크
  let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
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