import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import { Table, TableRow, TableCell, TableBody, TableHead} from '@material-ui/core';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const axios = require('axios')
const track = [
  '1','2','3','4','5','6','7','8','9','10',
  '11','12','13','14','15','16','17','18','19','20',
  '21','22','23','24','25', '26', '27','28', '29','30'
];


class AlbumRegister extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        category_list: [],
        genre_list: [],
        
        music_list: [{
          track: '',
          music_name: '',
          is_title: ''
        }],
 /*       thumbnail: '',
        title: '',
        category: '',
        genre: '',
        created: '',
        content : '',
  */
    }
  }

  handleChange = (e) => {
    this.nextState = {};
    this.nextState[e.target.name] = e.target.value;
    this.setState({
        ...this.state,  
        music_list: this.nextState.concat(this.music_list)
    });
    
    console.log(this.state);
  }
  handleSubmit = (e) => {
    console.log(e);
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
 
render(){
    
return(
  <React.Fragment>
   <Header />
    <div className="root" style={{marginLeft: "3rem", marginTop: "3rem", marginRight: "3rem"}}>
      <div style={{margin: "auto", textAlign: "center", marginBottom: "1rem"}}>
        <form onSubmit={this.handleSubmit}>
        <h4>앨범 정보</h4>
          <Table className="album_Table" style={{margin: "auto", width: '60%'}} >
          {/* 앨범 정보 */}
            <TableRow>
              <TableCell align='left' style={{width: '20%' }}>썸네일</TableCell>
              <TableCell align='left' style={{width: '80%'}}><input name="thumbnail" id="thumbnail" type="file" name="file" label = "사진" onChange={null}/></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='left' style={{width: '20%'}}>앨범명</TableCell>
              <TableCell align='left' style={{width: '80%'}}>
                <TextField fullWidth id="title" margin="normal" name="title" width ="70%"/>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='left' style={{width: '20%'}}>카테고리</TableCell>
              <TableCell align='left' style={{width: '80%'}}>
              <Select
                native
                inputProps={{
                name: 'category',
                id: 'category',
                margin:"normal",
                }}
              >
              {this.state.category_list.map(category =>
                <option value="">{category.keyword}</option>
              )}
              </Select>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='left' style={{width: '20%'}}>장르</TableCell>
              <TableCell align='left' style={{width: '80%'}}>
              <Select
                native
         //     value={state.category}
         //     onChange={handleChange('category')}
                inputProps={{
                name: 'genre',
                id: 'genre',
                margin:"normal",
                }}
              >
              }
            {this.state.genre_list.map(genre =>
            <option value="">{genre.keyword}</option>
            )}
              </Select>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='left' style={{width: '20%'}}>발매일</TableCell>
              <TableCell align='left' style={{width: '80%'}}>
                <TextField
                  margin="normal"
                  id="created"
                  name="created"
                  type="date"
                  defaultValue="2020-02-25"
                  InputLabelProps={{
                  shrink: true,
                  }} />
                </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='left' style={{width: '20%'}}>앨범소개</TableCell>
              <TableCell align='left' style={{width: '80%'}}>
              <TextField
                     id="outlined-multiline-static"
                      multiline
                      rows="5"
                      variant="outlined"
                      fullWidth={true}
                      />
              </TableCell>
            </TableRow>
          </Table>
          <br/><br/>

         <h4>상세 정보</h4>
          <Table className="input_Table" style={{margin: "auto", width: '60%'}}>
           <TableRow >
             <TableCell align='left' style={{width: '20%'}}>
               <Select
                labelId="demo-mutiple-name-label"
                native
                inputProps={{
                name: 'track',
                id: 'track',
                margin:"normal",
              }}
              onChange={this.handleChange}
              value={this.state.value}
              >
              {track.map(track =>
              <option value={track}>{track}</option>
              )}
              </Select>
            </TableCell>
            <TableCell align='left' style={{width: '50%'}}>
              <TextField id="music_name" margin="normal" name="music_name"  width ="70%" onChange={this.handleChange} value={this.state.value}/>
            </TableCell>
            <TableCell align='left' style={{width: '30%'}}>
              <RadioGroup aria-label="position" id="is_title" name="is_title" row onChange={this.handleChange} value={this.state.value}>
                <FormControlLabel value="yes" control={<Radio color="primary" />} label="yes" labelPlacement="end"/>
                <FormControlLabel value="no" control={<Radio color="primary" />} label="no" labelPlacement="end"/>
              </RadioGroup>
            </TableCell>
            <TableCell>
             <Button variant="contained" color="primary" onClick={this.addRow}>추가</Button>
            </TableCell>
          </TableRow>    
         </Table>

           {/* 앨범 디테일 */}   
          <Table className="albumDetail_Table" style={{margin: "auto", width: '60%'}} >
           <TableHead>
             <TableRow>
               <TableCell align='left' style={{width: '20%'}}>트랙번호</TableCell>
               <TableCell align='left' style={{width: '50%'}}>곡명</TableCell>
               <TableCell align='left' style={{width: '30%'}}>타이틀</TableCell>
               <TableCell></TableCell>
            </TableRow>
           </TableHead>
    
            <TableBody>
                   
            </TableBody>
          </Table>
          
            <br/><br />
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

var ListBox = React.createClass({
        getInitialState:function(){
            return{
                data:[]
            }
        },
        addARow:function(){
            var tempStateData = this.state.data;
            tempStateData.push(
        {"gidx":125, "home_name":"nc", "away_name":"hw","date":"2016-03-30"}
            );
 
            console.log(tempStateData);
            this.setState({data:tempStateData
            });
        },
        render:function(){
            console.log("render");
            console.log(this.state);
            return(
            <div className="list_box">
                <ButtonBox  addARow={this.addARow} />
                <ScoreTable />
            </div>
            )
        },
        componentDidMount:function(){
            this.setState({data:gv_json_data});
        }
    });
 
var ButtonBox = React.createClass({
    handleClickButton:function(event){
        this.props.addARow();
    },
    render:function(){
        console.log("button box render");
        console.log(this.props);
        return(
            <div className="button_box">
                <button onClick={this.handleClickButton}>click me</button>
            </div>
        )
    }
});
 
var ScoreTable = React.createClass({
    render:function(){
        console.log(gv_json_data);
        var ar_rows = [];
 
        $.each(gv_json_data, function(key, value){
            ar_rows.push(<ScoreTableTr key={key} row={value} />);
        });
 
        return(
            <table>
                <tbody>
                    {ar_rows}
                </tbody>
            </table>
        )
    }
});
 
var ScoreTableTr = React.createClass({
    render:function(){
        console.log(this.props.row);
        return(
            <tr className="score_table_tr">
                    <td>{this.props.row['gidx']}</td>
                    <td>{this.props.row['home_name']}</td>
                    <td>{this.props.row['away_name']}</td>
                    <td>{this.props.row['date']}</td>
                </tr>
        )
    }
});
 
        ReactDOM.render(
  React.createElement(ListBox, null),
  document.getElementById('content')
);
   
    </script>
</head>
<body>
    hello world
    <div id="content" >
        content
    </div>
</body>
</html>
*/