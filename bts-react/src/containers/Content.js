import React from 'react';
import { Grid, Card, CardMedia, CardContent, Box } from '@material-ui/core';
import CategoryContainer from './CategoryContainer';
import AlbumList from './album/AlbumList';
import { connect } from 'react-redux';


const axios = require('axios')

class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            album_list: [],
            filtered: []
        }
    }
    
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/album/').then(response => {
            let responses = response.data;
            responses.forEach(element => {
                const { album_list } = this.state;
                this.setState({
                    ...this.state,
                    album_list: album_list.concat(element)
                })
            });
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container my-3">
                    <CategoryContainer />
                </div>
                <div style={{width: "70%", margin: "auto"}}>
                    <AlbumList album_list={this.state.album_list} keyword={this.props.keyword} />
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    keyword: state.category.keyword
})

Content = connect(mapStateToProps)(Content);
export default Content;