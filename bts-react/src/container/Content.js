import React from 'react';
import { Grid, Card, CardMedia, CardContent, Box } from '@material-ui/core';

const axios = require('axios');

class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            album_list: []
        }
    }
    
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/album/').then(response => {
            let responses = response.data;
            responses.forEach(element => {
                const {album_list} = this.state;
                this.setState({
                    album_list: album_list.concat(element)
                })
            });
        });
    }
    handleClickAlbum = (e) => {
        console.log(e.currentTarget);
    }
    render() {
        return (
            <div style={{width: "70%", margin: "auto", marginTop: "1rem"}}>
                <Grid container spacing={4}>
                    {
                        this.state.album_list.map(album => (
                        <Grid item key={album.id} xs={12} sm={3} md={2} onClick={this.handleClickAlbum}>
                            <Card style={{height: '100%', display: 'flex', flexDirection: 'column'}} className="cursorPointer">
                                <CardMedia image={album.thumbnail} style={{paddingTop: '100%', }} />
                                <CardContent style={{flexGrow: 1,}}>
                                    <div>
                                        <Box
                                            fontWeight="bold" 
                                            style={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}}>{album.title}</Box>
                                        <div>
                                            <span style={{borderRight: `1px solid #ffddff`, marginRight: '1rem', paddingRight: '1rem'}}>{album.created}</span>
                                            <span>{album.category}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                        ))
                   }
                </Grid>
            </div>
        );
    }
}

export default Content;