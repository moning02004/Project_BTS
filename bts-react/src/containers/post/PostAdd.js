import React from 'react';
import { Table, TableContainer,TableRow, TableCell, TableBody, TableHead} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { connect } from 'react-redux';

const axios = require('axios');

class PostAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        content: '',
    }
}

postAdd = () => { // 렌더 다음에 실행, axios 상태를 업데이트?
   // console.log(this.state.title, this.state.content, this.props.currentUser.username);
    axios.post('http://127.0.0.1:8000/post/register/', {
        title: this.state.title,
        author: this.props.currentUser.username,
        content: this.state.content
  
    }).then(response => {
        window.location.href = "/post"
    }).catch( error => {
        console.log(error);
    });
  }


handleChange = (e) => { // target 현재 선택되어 있는 태크
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
}

  render(){
    return(
     <React.Fragment>
       <Header />
       <div className="root" style={{marginLeft: "3rem", marginTop: "3rem", marginRight: "3rem"}}>
         <div style={{margin: "auto", textAlign: "center", marginBottom: "1rem"}}>
         <TableContainer>
            <Table className="table" style={{margin: "auto", width: '60%'}} >
              <TableHead>
                <TableRow>
                  <TableCell colSpan="3" align='left' style={{width: '100%'}}>
                      제목 : <TextField style={{width: "600px"}} id="title" margin="normal" name="title" width ="70%" value={this.state.title} onChange={this.handleChange}/>
                  </TableCell>
                </TableRow>
               </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell colSpan="3" align='left'>
                    내용 : 
                    <TextField
                    name="content" 
                    id="content"
                    multiline
                    rows="10"
                    variant="outlined"
                    style={{width: "600px"}}
                    value={this.state.content} onChange={this.handleChange}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
              </Table>
            </TableContainer>
            <Button color="primary" size="1rem" onClick={this.postAdd}>저장</Button> 
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

PostAdd = connect(mapStateToProps)(PostAdd);
export default PostAdd;



