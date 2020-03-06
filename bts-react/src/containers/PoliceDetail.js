import React from 'react';
import { Table, TableContainer,TableRow, TableCell, TableBody, TableHead, Avatar, Modal} from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { BASE_URL } from '../utils/environment';


const axios = require('axios');

class PoliceDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        policeList: [], // post 리스트

        isDialogOpen: false,
    }
  }

  gotoPoliceHandle = (e) => {
    console.log(e.currentTarget.id)
  }
  
  render(){     
    return(
      <React.Fragment>
        <Header />
        <div className="contain" style={{marginLeft: "3rem", marginTop: "3rem", marginRight: "3rem"}}>
          <div style={{margin: "auto", textAlign: "center", marginBottom: "1rem"}}>

            <Button variant="outlined" color="primary" align="left" size="1rem">선택삭제</Button>
            <Table className="table" style={{margin: "auto", width: '80%'}} >
              <TableHead style={{backgroundColor: "#EEEEFF"}}>
                <TableRow>
                  <TableCell>
                    <Checkbox>전체선택</Checkbox>
                  </TableCell>
                  <TableCell style={{width: '10%'}}>번호</TableCell>
                  <TableCell style={{width: '55%'}}>내용</TableCell>
                  <TableCell style={{width: '25%'}}>신고일자</TableCell>
                  <TableCell align='center' style={{width: '10%'}}>삭제</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  this.state.policeList.map( (police, index) => {
                    return (
                      <TableRow id={police.id} onClick={this.gotoPoliceHandle} className="cursor-pointer">
                        <TableCell>
                          <Checkbox>전체선택</Checkbox>
                        </TableCell>
                        <TableCell>{police.id}</TableCell>
                        <TableCell>{police.reason}</TableCell>
                        <TableCell>{police.created}</TableCell>
                        <TableCell align='center'><Button>삭제</Button></TableCell>
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

export default PoliceDetail;  