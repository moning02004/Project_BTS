import React from 'react';
import { Grid, Card, CardMedia, CardContent, Box } from '@material-ui/core';

class AlbumList extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    console.log(document.cookie);

    }
    handleClickAlbum = (e) => {
        console.log(e.currentTarget.id);
        window.location.href = "/album/"+e.currentTarget.id;
    }
    render() {
        return (
            <div>
                <Grid container spacing={4}>
                    {
                        this.props.album_list.map(album => {
                            if (album.category === this.props.keyword || this.props.keyword === "전체")
                                return (
                                    <Grid item id={album.id} xs={12} sm={4} md={2} onClick={this.handleClickAlbum}>
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
                                )
                            }
                        )
                    }
                </Grid>
            </div>
        );
    }
}

AlbumList.defaultProps = {

}
export default AlbumList;