import React from 'react';
import { TextField, Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { BASE_URL } from '../utils/environment';

const axios = require('axios')
const PoliceView = ({comment_id, user_id, open, handleClose}) => {
    const handleSubmit = () => {
        console.log( document.getElementById('reason').value);
        axios.post(BASE_URL + 'album/comment/police/register/', {
            comment: comment_id,
            author: user_id,
            reason: document.getElementById('reason').value
        }).then( response => {
            alert("신고가 접수되었습니다.");
            handleClose();
        }).catch( error => {
            alert("이미 신고된 접수입니다.");
            handleClose();
        })
    }
    return (
        <React.Fragment>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">신고</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    이유를 적어주세요.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="reason"
                    label="내용"
                    fullWidth
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Subscribe
                </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default PoliceView;