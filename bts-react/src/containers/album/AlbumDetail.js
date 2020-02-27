import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Divider, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

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
            musicSet: []
        }
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/album/'+ this.props.match.params.id +'/').then( response => {
            let { id, thumbnail, title, created, category, content, genre, music_set } = response.data;
            console.log(id, thumbnail, title, created, category, content, genre, music_set);
            this.setState({ 
                id: id, thumbnail: thumbnail, title: title, created: created, category: category, content:content, genre: genre
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
                <Footer />
            </React.Fragment>
        );
    }
}
export default AlbumDetail;