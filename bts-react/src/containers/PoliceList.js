import React from 'react';
import { Table, TableContainer,TableRow, TableCell, TableBody, TableHead, Avatar, Modal} from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';


const axios = require('axios');

class PoliceList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        policeList: [], // post 리스트

        isDialogOpen: false,
    }

  }

  componentDidMount() {
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
                  <TableCell style={{width: '65%'}}>내용</TableCell>
                  <TableCell style={{width: '15%'}}>신고일자</TableCell>
                  <TableCell align='center' style={{width: '10%'}}>삭제</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  // 각 row별로 comment_id를 가지고 있어서 삭제버튼을 누르면 
                  // policeList에서 글이 삭제되면서 동시에 게시글에 작성한 댓글도 같이 삭제된다.
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

export default PoliceList;  