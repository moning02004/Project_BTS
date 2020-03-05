import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {Button, Divider, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Avatar, IconButton } from '@material-ui/core';
import NotificationsActiveTwoToneIcon from '@material-ui/icons/NotificationsActiveTwoTone';
import ThumbDownTwoToneIcon from '@material-ui/icons/ThumbDownTwoTone';
import ThumbUpTwoToneIcon from '@material-ui/icons/ThumbUpTwoTone';
import { connect } from 'react-redux';

const axios = require('axios');

class AlbumDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            thumbnail: '',
            title: '',
            created: '',
            category: '',
            content: '',
            genre: '',
            musicSet: [],

            comment: '',
            albumcomment_set: [],
        }
    
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/album/'+ this.props.match.params.id +'/').then( response => {
            let { id, thumbnail, title, created, category, content, genre, music_set,  albumcomment_set} = response.data;
         
            this.setState({ 
                id: id, 
                thumbnail: thumbnail, 
                title: title, 
                created: created, 
                category: category, 
                content:content, 
                genre: genre, 

                albumcomment_set: albumcomment_set
            });
            music_set.forEach(music => {
                let { musicSet } = this.state;
                this.setState({
                    ...this.state,
                    musicSet: musicSet.concat(music)
                }, () => console.log(this.state.musicSet));
            });
        }).catch( error => {
            console.log(error);
        });
    }

    handleChange = (e) => { // target 현재 선택되어 있는 태크
        let nextState = {};
          nextState[e.target.name] = e.target.value;
          this.setState(nextState);
    }
    
// 앨범 댓글
    // 1-1. 댓글 작성
    handleClickCommentAdd = (e) => {
        e.preventDefault();
      
        if(this.props.currentUser.username == ""){
            alert("로그인하세요.");
        }
        if(this.state.comment== ""){
            alert("내용을 입력하세요.");
        }
    
        axios.post('http://127.0.0.1:8000/album/comment/register/' , {
        album : this.state.id,
        author: this.props.currentUser.user_id,
        content: this.state.comment,
      
        }).then(response => {
            this.commentRender(); // 댓글 리랜더링
        }).catch(error => {
            console.log(error);
        });
    }
    
    // 1-2. 댓글 작성 후 댓글리스트 다시 불러오기
    commentRender(){
        axios.get('http://127.0.0.1:8000/album/'+ this.props.match.params.id+ '/').then(response => {
        let {albumcomment_set } = response.data;      
        this.setState({ 
            albumcomment_set: albumcomment_set,
        });
        }).catch( error => {
            console.log(error);
        });
    }
    
    // 1-3. 댓글 삭제
    handClickCommentDelete = (e) => {
        let comment_id = e.currentTarget.id; 
        axios.delete('http://127.0.0.1:8000/album/comment/delete/'+ comment_id+ '/').then(response => {
            alert("댓글이 삭제되었습니다.");
            this.commentRender();
        }).catch(error =>{
            console.log(error);
        });
    }
    render() {
        return (
            <React.Fragment>
            <Header />
            <div className="container-70 my-3">
                <div className="my-3" style={{display: "flex", flexWrap: "wrap", alignItems: "center"}}>
                    <div className="detail-img"><img src={this.state.thumbnail} width="100%" alt="" /></div>
                    <div style={{marginLeft: "2rem"}}>
                        <Typography style={{margin: "1rem"}}>앨범명</Typography>
                        <Typography style={{margin: "1rem"}}>발매일</Typography>
                        <Typography style={{margin: "1rem"}}>카테고리</Typography>
                        <Typography style={{margin: "1rem"}}>장르</Typography>
                    </div>
                    <div>
                        <Typography style={{margin: "1rem"}}>{this.state.title}</Typography>
                        <Typography style={{margin: "1rem"}}>{this.state.created}</Typography>
                        <Typography style={{margin: "1rem"}}>{this.state.category}</Typography>
                        <Typography style={{margin: "1rem"}}>{this.state.genre}</Typography>
                    </div>
                </div>

                <Divider />
                <TableContainer>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" width="20%">트랙 번호</TableCell>
                                <TableCell align="center">곡</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.musicSet.map(music => (
                                <TableRow key={music.name} style={{backgroundColor: (music.is_title) ? "#EEEEFF" : ""}}>
                                    <TableCell align="center">{music.track}</TableCell>
                                    <TableCell align="center">{music.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div id="content" className="my-3 content-box">
                    <div style={{textAlign: "right"}}>
                        <Button onClick={() => {document.getElementById('content').classList.toggle("content-box")}}>더보기</Button>
                    </div>
                    <div className="pre-box">{this.state.content}</div>
                </div>

        
            {/* 댓글란 */}
                <h3>Comment</h3>
                <div className="input-group">
                    <textarea className="form-control comment-textarea" name="comment"
                        value={this.state.comment} onChange={this.handleChange}
                    />
                    <div className="input-group-append">
                        <button type="submit" className="input-group-text"
                            onClick={this.handleClickCommentAdd}>작성</button>
                    </div>
                </div>

                {this.state.albumcomment_set.map((comment, index) => {
                    let grade = <div></div>;
                    let btn2 = '';
                    
                    switch(this.props.currentUser.grade) {
                        case "Bronze":
                            grade = (<Avatar style={{backgroundColor: "#cd7f32"}}>B</Avatar>); break;
                        case "Silver":
                            grade = (<Avatar style={{backgroundColor: "#C0C0C0"}}>S</Avatar>); break;
                        case "Gold":
                            grade = (<Avatar style={{backgroundColor: "#FFD700"}}>G</Avatar>); break;
                        default:
                            grade = (<Avatar style={{backgroundColor: "#B9F2FF", color: "#205055"}}>D</Avatar>); break;
                    }
                    if(comment.author.username == this.props.currentUser.username){              
                        btn2 = (
                            <div>
                                <Button id={index} color="primary" size="small" onClick={this.handleClickCommentEdit}>수정</Button>
                                <Button id={comment.id} color="primary" size="small" onClick={this.handClickCommentDelete}>삭제</Button>
                            </div>
                        );
                    }
                    return (
                        <React.Fragment>
                            <div className="my-3" style={{display: "flex", flexWrap: "nowrap", alignItems: "center"}}>
                                <div >{grade}</div>
                                <div className="inline-block ml-3 w-100">
                                    <Typography><b>관리자</b></Typography>
                                    <div className="w-100">
                                        <div className="inline">
                                            <span>이번 앨범 진짜 좋은 거 같아유</span>
                                            <div className="date">
                                                <span className="small mr-2">2020-03-01</span>
                                                <IconButton>
                                                    <ThumbUpTwoToneIcon fontSize="small" color="action" />
                                                </IconButton>
                                                <IconButton>
                                                    <ThumbDownTwoToneIcon fontSize="small" color="action" />
                                                </IconButton>
                                                <IconButton>
                                                    <NotificationsActiveTwoToneIcon fontSize="small" color="action" />
                                                </IconButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )})} 
            </div>
            <Footer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => { // 리덕스가 관리하는 상태를 지켜봄, 
    console.log(state);
    return {
        currentUser: state.auth.status.currentUser
    }
};
AlbumDetail = connect(mapStateToProps)(AlbumDetail);
export default AlbumDetail;