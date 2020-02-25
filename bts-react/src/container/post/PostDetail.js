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
import Header from '../../component/Header';
import Footer from '../../component/Footer';

const axios = require('axios');

class PostDetail extends React.Component{
   
    render(){
        return(
          <React.Fragment>
            <Header />

            <div lassName="container" style={{marginLeft: "3rem", marginTop: "3rem", marginRight: "3rem"}}>
                  <div style={{margin: "auto", textAlign: "center", marginBottom: "1rem"}}>

                    
                      <Button color="primary" size="1rem">수정</Button> 
                      <Button color="primary" size="1rem">삭제</Button> 

                  </div>
              </div>
              <Footer />
          </React.Fragment>
        );
    }
}

export default PostDetail;


