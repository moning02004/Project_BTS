import React from 'react';
import { Table, TableRow, TableCell, TableBody, TableHead} from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';


const axios = require('axios');

class PostList extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        post_list: [], // post 리스트
        currentPage : 1, // 현재 페이지 위치
        pageSize : 10, // 한 페이지에 보여줄 컨텐츠 갯수
    }
    console.log(document.cookie);
  }

  
handleClickPostAdd = (e) => {
  console.log(e.currentTarget.id);
  window.location.href = "/postAdd";
}  

componentDidMount() {
  axios.get('http://127.0.0.1:8000/post/').then(response => {
      let responses = response.data;
      responses.forEach(element => {
        const { post_list } = this.state;
          this.setState({
            ...this.state,
            post_list: post_list.concat(element)
          }, () => {
            console.log(this.state.post_list); 
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
        <div className="root" style={{marginLeft: "3rem", marginTop: "3rem", marginRight: "3rem"}}>
                <div style={{margin: "auto", textAlign: "center", marginBottom: "1rem"}}>
                <h3 style={{color: "grey"}}>자유게시판</h3>

                  <Table className="table" style={{margin: "auto", width: '80%'}} >
                    <TableHead style={{backgroundColor: "#EEEEFF"}}>
                      <TableRow>
                        <TableCell align='left' style={{width: '10%'}}>번호</TableCell>
                        <TableCell align='left' style={{width: '50%'}}>제목</TableCell>
                        <TableCell align='left' style={{width: '10%'}}>작성자</TableCell>
                        <TableCell align='left' style={{width: '30%'}}>작성일자</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.post_list.map(post =>
                      <TableRow key={post.id}>
                        <TableCell align='left'>{post.id}</TableCell>
                        <TableCell align='left'><Link to ={`/post/${post.id}`} style={{textDecoration: 'none', color: "black"}}>{post.title}</Link></TableCell>
                        <TableCell align='left'>{post.author.nickname}</TableCell>
                        <TableCell align='left'>{post.created}</TableCell>
                      </TableRow>
                    )}
                    </TableBody>
                    </Table>             
                    <Link href="/signin" variant="body2"></Link>

                    <Button color="primary" size="1rem" onClick={this.handleClickPostAdd}>글쓰기</Button> 
                </div>
            </div>
            <Footer/>
        </React.Fragment>
      );
  }
}

export default PostList;