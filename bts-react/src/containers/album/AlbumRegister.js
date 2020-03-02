import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import { Table, TableRow, TableCell, TableBody, TableHead, Input} from '@material-ui/core';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const axios = require('axios')

class AlbumRegister extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        category_list: [],
        genre_list: [],
        
        thumbnail:  null,
        title: '',
        category: "",
        genre: '',
        created: '',
        content : '',

        track: 1,
        name: '',
        is_title: false,
        
        music_list: [],
    }
  }
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/album/category/').then(response => {
      let responses = response.data;
      responses.forEach(element => {
          const {category_list} = this.state;
          this.setState({
            category_list: category_list.concat(element),
          })
      });
    });
    axios.get('http://127.0.0.1:8000/album/genre/').then(response => {
      let responses = response.data;
      responses.forEach(element => {
         const { genre_list} = this.state;
          this.setState({
            genre_list: genre_list.concat(element)
          })
      });
    });
  }
  
  handleChecked = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.checked
    this.setState(nextState)
  }
  handleChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = (e.target.name === "thumbnail") ? e.target.files[0] : e.target.value;
    this.setState(nextState);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    let { thumbnail, title, category, genre, created, content, music_list } = this.state;
    music_list = JSON.stringify(music_list);

    formData.append('thumbnail', thumbnail);
    formData.append('title', title);
    formData.append('category', category);
    formData.append('genre', genre);
    formData.append('created', created);
    formData.append('content', content);
    formData.append('music_list', music_list);
    
    console.log(formData);
    axios.post('http://127.0.0.1:8000/album/register/', formData).then( response => {
      console.log(response);
    }).catch( error => {
      console.log(error);
    });
  }

  handleAdd = (e) => {
    e.preventDefault();
    console.log(this.state)
    let {track, name, is_title, music_list } = this.state;
    this.setState({
      ...this.state,
      music_list: music_list.concat({track: track, name: name, is_title: is_title})
    }, () => {
      this.setState({
        ...this.state,
        track: '',
        name: '',
        is_title: false
      });
    })
  }
  handleRemove = (e) => {
    e.preventDefault();
  }
 
  render(){
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth()+1 < 10 ? "0" + (date.getMonth()+1) : (date.getMonth()+1);
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let today = year+"-"+month+"-"+day;

  return(
    <React.Fragment>
      <Header />
      <div style={{margin: "auto", width: '60%'}} >
        <form onSubmit={this.onSubmit}>
          <h4>앨범 정보</h4>
          <Table>
            <TableRow>
              <TableCell style={{width: '20%' }}>썸네일</TableCell>
              <TableCell style={{width: '80%'}}>
                <input name="thumbnail" type="file" onChange={this.handleChange} />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{width: '20%'}}>앨범명</TableCell>
              <TableCell style={{width: '80%'}}>
                <TextField fullWidth name="title" value={this.state.title} onChange={this.handleChange} />
              </TableCell>
            </TableRow>
          
            <TableRow>
              <TableCell style={{width: '20%'}}>카테고리</TableCell>
              <TableCell style={{width: '80%'}}>
                <Select name="category" value={this.state.category} onChange={this.handleChange}>
                  {this.state.category_list.map((category, index) =>
                    <option value={category.keyword} key={index}>{category.keyword}</option>
                  )}
                </Select>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{width: '20%'}}>장르</TableCell>
              <TableCell style={{width: '80%'}}>
                <Select name="genre" value={this.state.genre} onChange={this.handleChange}>
                  {this.state.genre_list.map((genre,index) => 
                    <option value={genre.keyword} key={index}>{genre.keyword}</option>
                  )}
                </Select>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{width: '20%'}}>발매일</TableCell>
              <TableCell style={{width: '80%'}}>
                <TextField name="created" type="date" value={this.state.created} onChange={this.handleChange} />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{width: '20%'}}>앨범소개</TableCell>
              <TableCell style={{width: '80%'}}>
                <TextField
                  multiline
                  rows="5"
                  variant="outlined"
                  fullWidth
                  name="content" 
                  value={this.state.content} onChange={this.handleChange} />
              </TableCell>
            </TableRow>
          </Table>

          <h4>수록곡</h4>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{width: '20%'}}>트랙</TableCell>
                <TableCell style={{width: '50%'}}>곡명</TableCell>
                <TableCell style={{width: '20%'}}>대표</TableCell>
                <TableCell style={{width: '10%'}}>선택</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.music_list.map(music => {
                console.log(music);
                return (
                <TableRow>
                  <TableCell>{music.track}</TableCell>
                  <TableCell>{music.name}</TableCell>
                  <TableCell><input type="checkbox" name="is_title" checked={music.is_title ? "checked" : ""} /></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )})}
              <TableRow>
                <TableCell>
                  <TextField type="number" inputProps={{ min: "1" }} name="track" value={this.state.track} onChange={this.handleChange}/>
                </TableCell>
                <TableCell>
                  <TextField fullWidth name="name" value={this.state.name} onChange={this.handleChange} />
                </TableCell>
                <TableCell>
                  <input type="checkbox" name="is_title" checked={this.state.is_title} onChange={this.handleChecked} />
                </TableCell>
                <TableCell>
                  <Button onClick={this.handleAdd}>추가</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="my-3">
            <Button type="submit" fullWidth onClick={this.onSubmit}>등록</Button>
          </div>
        </form>
      </div>
      <Footer />
      </React.Fragment>
    );
  }
}


export default AlbumRegister;