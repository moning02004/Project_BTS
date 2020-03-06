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
        album_id: '',
        album_title: ''
      }
    }
  }
  componentDidMount() {
    axios.get(BASE_URL + "album/comment/police/"+ this.props.police_id +"/").then( response => {  
      let { comment_content, author, reason, created, album_content } = response.data
      console.log(response.data)
      this.setState({
        police: {
          reason: reason,
          created: created,
          author: author.nickname,
          comment: comment_content.content,
          comment_author: comment_content.author,
          album_id: album_content.album_id,
          album_title: album_content.album_title
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
            <p><b>{this.state.police.album_title}</b> 에 작성된 댓글입니다. </p>
            <DialogContentText className="border p-2">
              <p className="m-0">{this.state.police.comment_author} </p>
              <Divider className="m-1" />
              {this.state.police.comment}
            </DialogContentText>
            <Divider className="my-3" />

            <p><b>{this.state.police.author}</b> 님이 신고하셨습니다.</p>
            <p className="border p-2">{this.state.police.reason}</p>
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