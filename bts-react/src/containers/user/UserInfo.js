import React from 'react'
import {Dialog, DialogActions,DialogContent,DialogTitle, Button    } from '@material-ui/core'

class UserInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            info:[],
        }
    }
    render(){
        return(
            <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>고객정보</DialogTitle>
                <DialogContent>
                    정보출력
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                </DialogActions>
            </Dialog>   
        )
    }
}

export default UserInfo;