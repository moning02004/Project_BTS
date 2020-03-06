import React from 'react';
import { Table, TableContainer,TableRow, TableCell, TableBody, TableHead, Avatar, Modal} from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { BASE_URL } from '../utils/environment';
import PoliceDetail from './PoliceDetail'


const axios = require('axios');

class PoliceList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        policeList: [], // post 
        isOpen: false,
        selected: ''
    }

  }
  componentDidMount() {
    this.commentRerendering();
  }
  commentRerendering() {
    axios.get(BASE_URL + "album/comment/police/").then( response => {
      response.data.forEach( police => {
        let { policeList } = this.state;
        this.setState({
          policeList: policeList.concat(police)
        })
      })
    }).catch( error => {

    });
  }

  gotoPoliceHandle = (e) => {
    this.setState({
      ...this.state,
      isOpen: true,
      selected: e.currentTarget.id
    })
  }
  
  handleClose =(e) => {
    this.setState({
      policeList: [],
      isOpen: false,
      selected: ''
    }, () => {
      this.commentRerendering();
    });
  }
  
  render(){     
    return(
      <React.Fragment>
        <Header />
        <div className="contain" style={{marginLeft: "3rem", marginTop: "3rem", marginRight: "3rem"}}>
          <div style={{margin: "auto", textAlign: "center", marginBottom: "1rem"}}>

            <Table className="table" style={{margin: "auto", width: '80%'}} >
              <TableHead style={{backgroundColor: "#EEEEFF"}}>
                <TableRow>
                  <TableCell style={{width: '10%'}}>번호</TableCell>
                  <TableCell style={{width: '45%'}}>내용</TableCell>
                  <TableCell style={{width: '20%'}}>작성자</TableCell>
                  <TableCell style={{width: '25%'}}>신고일자</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  this.state.policeList.map( (police, index) => {
                    console.log(police)
                    return (
                      <TableRow id={police.id} onClick={this.gotoPoliceHandle} className="cursor-pointer">
                        <TableCell>{police.id}</TableCell>
                        <TableCell>{police.reason}</TableCell>
                        <TableCell>{police.author.nickname}</TableCell>
                        <TableCell>{police.created}</TableCell>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </Table>                 
          </div>
        </div>
        {
          (this.state.selected !== '') && 
          <PoliceDetail 
            police_id={this.state.selected}
            open={this.state.isOpen} 
            handleClose={this.handleClose}
          />
        }
        <Footer/>
      </React.Fragment>
    );
  }
}

export default PoliceList;  