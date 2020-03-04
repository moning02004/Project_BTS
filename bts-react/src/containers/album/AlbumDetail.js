import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {Button, Divider, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Avatar } from '@material-ui/core';
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
    
    render() {
    return (
        <React.Fragment>
        <Header />
        <div className="container my-3">
            <div className="my-3" style={{display: "flex", flexWrap: "wrap", alignItems: "center"}}>
                <div className="detail-img"><img src={this.state.thumbnail} width="100%" alt="" /></div>
                <div style={{marginLeft: "2rem"}}>
                    <Typography style={{margin: "1rem"}}>앨범명</Typography>
                    <Typography style={{margin: "1rem"}}>발매일</Typography>
                    <Typography style={{margin: "1rem"}}>카테고리</Typography>
                    <Typography style={{margin: "1rem"}}>장르</Typography>
                </div>
                <div style={{}}>
                    <Typography style={{margin: "1rem"}}>{this.state.title}</Typography>
                    <Typography style={{margin: "1rem"}}>{this.state.created}</Typography>
                    <Typography style={{margin: "1rem"}}>{this.state.category}</Typography>
                    <Typography style={{margin: "1rem"}}>{this.state.genre}</Typography>
                </div>
            </div>

            <Divider />
            <TableContainer>
                <Table className={{minWidth: 500}} size="small">
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
            <div className="my-3">
                <Typography className="pre-box">{this.state.content}</Typography>
            </div>
        </div>

    {/* 댓글란 */}
      
    <div style={{margin: "auto", textAlign: "center", marginBottom: "5rem", marginTop: "5rem"}}>
      <div align="right" style={{margin: "auto", width: '80%', backgroundColor: "#EEEEFF"}}>
      <h3 align="left">Comment</h3>

      <textarea style={{width: "600px"}} align="center" id="comment" margin="normal" name="comment" width ="70%" value={this.state.comment} onChange={this.handleChange} />
        <Button variant="outlined" onClick={this.handleClickCommentAdd}>작성</Button>
      </div>
      <Table className="table_comment" style={{margin: "auto", width: '80%'}}>
        
        {this.state.albumcomment_set.map((comment, index) => {
          let level = <div></div>;
          let btn2 = <div></div>;

          switch(comment.author.grade){
            case "Bronze":
              level = <Avatar style={{backgroundColor: "#cd7f32"}}>B</Avatar> ; break;
            case "Silver":
              level = <Avatar style={{backgroundColor: "#C0C0C0"}}>S</Avatar>;  break;
            case "Gold":
              level = <Avatar style={{backgroundColor: "#FFD700"}}>G</Avatar>; break;
            default:
              level = <Avatar style={{backgroundColor: "#B9F2FF", color: "#205055"}}>D</Avatar>; break;
          }
          if(comment.author.username == this.props.currentUser.username){              
            btn2 = (
            <div>
              <Button id={index} color="primary" size="small" onClick={this.handleClickCommentEdit}>수정</Button>
              <Button id={index} color="primary" size="small" coClick={this.handClickCommentDel}>삭제</Button>
            </div>
            );
          }
          return(
            <TableRow  colSpan={2} key ={index}>
              <TableCell align='left' style={{ width: '100px'}}> 
                {comment.author.nickname}<br></br>
                {level}
              </TableCell>
            <TableRow>
              <TableCell align='left' style={{width: '700px'}}>
                {comment.content} 
               </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='left'style={{width: '700px'}}>
                {comment.created} <br/>
                 
               {/*좋아요/ 싫어요/ 신고 버튼 아이콘 */}
                <ThumbUpTwoToneIcon fontSize="small" color="action" style={{marginTop: "auto"}}/>
                <ThumbDownTwoToneIcon fontSize="small" color="action" style={{paddingLeft: "10px"}}/>
                <NotificationsActiveTwoToneIcon fontSize="small" color="action" style={{paddingLeft: "10px"}}/>

                 {btn2}  
              </TableCell>
            </TableRow>
            </TableRow>
          ) // end of return
        } // end of(comment, index) =>
      )} 
      </Table>
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