import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { Table } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const axios = require('axios')
class AlbumRegister extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        category: [],
        genre: [],
        thumbnail: '',
        title: '',
        category: '',
        genre: '',
        created: '',
        content : '',

        track:'',
        name:'',
        is_title: '',
    }
  }
  handleSubmit = (e) => {
    console.log(e);
  }
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/album/genre/').then(response => {
        let responses = response.data;
        responses.forEach(element => {
            const { genre } = this.state;
            this.setState({
                genre: genre.concat(element)
            })
        });
    });
}


  render(){
    return(
      <React.Fragment>
        <Header />
        <div lassName="container" style={{marginLeft: "3rem", marginTop: "3rem", marginRight: "3rem"}}>
          <div style={{margin: "auto", textAlign: "center", marginBottom: "1rem"}}>
            <form onSubmit={this.handleSubmit}>
              <Table className="table" style={{margin: "auto", width: '60%'}} >
              <tr>
                <th align='left' style={{width: '20%'}}>썸네일</th>
                  <td align='left' style={{width: '80%'}}><input name="thumbnail" id="thumbnail" type="file" name="file" label = "사진" onChange={null}/></td>
                </tr>
                <tr>
                <th align='left' style={{width: '20%'}}>앨범명</th>
                  <td align='left' style={{width: '80%'}}>
                    <TextField
                        id="title"
                        margin="normal"
                        name="title" 
                        width ="70%"/>
                    </td>
                </tr>
                <tr>
                <th align='left' style={{width: '20%'}}>카테고리</th>
                <td align='left' style={{width: '80%'}}>
                <Select
                    native
         //         value={state.category}
         //         onChange={handleChange('category')}
                  inputProps={{
                  name: 'category',
                  id: 'category',
                  margin:"normal",
                  width:"200"
                  }}
                >
                <option value="" />
                <option value="정규">정규</option>
                <option value="미니">미니</option>
                <option value="싱글">싱글</option>
                <option value="OST">OST</option>

                </Select>
                </td>
                </tr>
                <tr>
                <th align='left' style={{width: '20%'}}>장르</th>
                <td align='left' style={{width: '30%'}}>장르</td>
                </tr>
                <tr></tr>
              </Table>
            </form>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}
export default AlbumRegister;
/*




        <div className="container">
            <div style={{margin: "auto", textAlign: "center", marginBottom: "1rem"}}> 
            <form onSubmit={this.handleSubmit}>
                <h2>앨범등록</h2>
            <div className="formGroup" style={{margin: "1rem", textAlign: "left", marginBottom: "1rem"}}>
              <Table className="album"> 
                <tr>
                  <th>썸네일</th>
                  <td><input name="thumbnail" type="file" name="file" label = "사진" onChange={null}/></td>
                </tr>
                <tr>
                  <th>앨범명</th>
                  <td><TextField
                        variant="outlined"
                        margin="normal"
                        name="title" />
                  </td>
                </tr>
                <tr>
                  <th>카테고리</th>
                  <td>
                    <Select
                    native
         //         value={state.category}
         //         onChange={handleChange('category')}
                  inputProps={{
                  name: 'category',
                  id: 'select_category',
                  margin:"normal",
                
                  }}
                >
                <option value="" />
                <option value="정규">정규</option>
                <option value="미니">미니</option>
                <option value={30}>싱글</option>
                <option value={40}>OST</option>

                </Select>
                </td>
                </tr>
                <tr>
                  <th>장르</th>
                  <td><Select
                  native
         //         value={state.category}
         //         onChange={handleChange('category')}
                  inputProps={{
                  name: 'category',
                  id: 'select_category',
                  margin:"normal",
                  
                  }}
                >
                <option value="" />
                <option value={10}>DANCE</option>
                <option value={20}>POP</option>
                <option value={30}>EDM</option>

                </Select>
                </td>
                </tr>
                <tr>
                  <th>발매일</th>
                  <td><TextField
                      margin="normal"
                      id="created"
                      name="created"
                      type="date"
                      defaultValue="2020-02-18"
                      InputLabelProps={{
                      shrink: true,
                      }} /></td>
                </tr>
                <tr>
                  <th>앨범소개</th>
                  <td>
                    <TextareaAutosize
                      rowsMax={10}
                      aria-label="maximum height"
                      placeholder="앨범소개"
                      defaultValue="앨범 상세 소개를 입력해주세요"
                      />
                    </td>
                </tr>
              </Table>
              <Table className="albumDetail">
                <tr>
                  <th>트랙번호</th>
                  <td></td>
                </tr>
                <tr>
                  <th>곡이름</th>
                  <td></td>
                </tr>
                <tr>
                  <th>타이틀</th>
                  <td>
                    
                </td>
                </tr>
              </Table>
           
            </div>
             // 테이블 추가
            <Button
              margin="normal"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"> Sign Up</Button>
          </form>

            </div>

*/