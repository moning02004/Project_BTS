import React from 'react';
import { Table, TableContainer,TableRow, TableCell, TableBody, TableHead} from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const axios = require('axios');

class PostEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: 0,
        title: '',
        content: '',
        updated: '',
        username: '',
    }
    this.id = this.props.match.params.id;
}

componentDidMount() {
  axios.get('http://127.0.0.1:8000/post/'+ this.props.match.params.id+ '/').then(response => {
    let { id, title,content, updated, username} = response.data[0];      
   
    this.setState({ 
      id: id,
      title: title,
      content: content,
      updated: updated,
      username: username,

    });
    console.log(response.data);

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
                  <TableCell align='left' style={{width: '10%'}}><input type="text">{this.state.id}</input></TableCell>
                  <TableCell align='left' style={{width: '20%'}}>{this.state.username}</TableCell>
                  <TableCell align='left' style={{width: '70%'}}>{this.state.updated}</TableCell>
                </TableRow>
               </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell colSpan="3" align='left' style={{lineHeight: '500px'}}>{this.state.content}</TableCell>
                </TableRow>
              </TableBody>
              </Table>
            </TableContainer>
                      <Button color="primary" size="1rem">수정</Button> 
                      <Button color="primary" size="1rem">삭제</Button> 

                  </div>
              </div>
              <Footer />
          </React.Fragment>
        );
 
    }
}

export default PostEdit;



