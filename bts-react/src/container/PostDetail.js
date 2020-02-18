import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow'; 
import Button from '@material-ui/core/Button';

class PostDetail extends React.Component {

    render(){
        return(
          <React.Fragment>
              <div lassName="container" style={{marginLeft: "3rem", marginTop: "3rem", marginRight: "3rem"}}>
                  <div style={{margin: "auto", textAlign: "center", marginBottom: "1rem"}}>
                                 
                      <Paper style={{margin: "auto", width: '100%'}}>
                      <TableContainer style={{margin: "auto", maxHeight: 440}}>
                          <Table stickyHeader aria-label="sticky table">
                              <TableHead>
                                  <TableRow>
                                    <TableCell minWidth = "30" align="center" >번호</TableCell>
                                    <TableCell minWidth = "200" align ="center">제목</TableCell>
                                    <TableCell minWidth = "100" align ="center">작성자</TableCell>
                                    <TableCell minWidth = "170" align ="center">작성일자</TableCell>
                                  </TableRow>
                              </TableHead>
                              <TableBody>
                           content
                              </TableBody>
                          </Table>
                      </TableContainer>
                      
                      </Paper>

                      <Button color="primary" size="1rem">글쓰기</Button> 
                  </div>
              </div>
          </React.Fragment>
        );
    }
}

export default PostDetail;


