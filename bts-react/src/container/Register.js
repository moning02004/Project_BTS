import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { Table } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


class Register extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
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



  render(){
    return(
      <React.Fragment>
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
                <option value={10}>정규</option>
                <option value={20}>미니</option>
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
        
        </div>
      </React.Fragment>
    );
  }
}
export default Register;
/*
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function RadioButtonsGroup() {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
          />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender2" value={value} onChange={handleChange}>
          <FormControlLabel
            value="female"
            control={<Radio color="primary" />}
            label="Female"
            labelPlacement="start"
          />
          <FormControlLabel
            value="male"
            control={<Radio color="primary" />}
            label="Male"
            labelPlacement="start"
          />
          <FormControlLabel
            value="other"
            control={<Radio color="primary" />}
            label="Other"
            labelPlacement="start"
          />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
            labelPlacement="start"
          />
        </RadioGroup>
        <FormHelperText>labelPlacement start</FormHelperText>
      </FormControl>
    </div>
  );
}

*/