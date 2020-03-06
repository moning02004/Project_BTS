import React from 'react';
import { TextField, Button, Divider } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { BASE_URL } from '../utils/environment';


const axios = require('axios')
class PoliceDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      police: {
        reason: '',
        created: '',
        author: '',
        comment: '',
      }
    }
    console.log(this.props.police_id)
  }
  componentDidMount() {
    axios.get(BASE_URL + "album/comment/police/"+ this.props.police_id +"/").then( response => {  
      console.log(response);
      let { comment_content, author, reason, created } = response.data
      this.setState({
        police: {
          reason: reason,
          created: created,
          author: author.nickname,
          comment: comment_content
        }
      })
    }).catch( error => {
      console.log(this.props.police_id)
    })
    return false;
  }
  handleConfirm = (e) => {
    e.preventDefault();
    axios.patch(BASE_URL + "album/comment/police/confirm/" + this.props.police_id + "/", {}).then (response => {
      console.log(response);
      this.props.handleClose();
    }).catch( error => {

    });
  }
  
  handleDelete = (e) => {
    e.preventDefault();
    axios.delete(BASE_URL + "album/comment/police/delete/" + this.props.police_id + "/").then (response => {
      this.props.handleClose();
    }).catch( error => {

    });
  }
  handleHandle = (e) => {
    e.preventDefault();
    axios.patch(BASE_URL + "album/comment/police/handle/" + this.props.police_id + "/", {}).then (response => {
      this.props.handleClose();
    }).catch( error => {

    });
  }
  render() {
    return (
      <React.Fragment>
        <Dialog open={this.props.open} onClose={this.props.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">신고된 내용</DialogTitle>
          <DialogContent>
            <DialogContentText className="p-4">
              {this.state.police.comment}
              <Divider className="my-3" />
              {this.state.police.reason}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleHandle}>조치</Button>
            <Button onClick={this.handleConfirm}>확인</Button>
            <Button onClick={this.handleDelete}>신고 삭제</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }
}

export default PoliceDetail;