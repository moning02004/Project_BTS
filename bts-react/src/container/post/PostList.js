import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow'; 
import Button from '@material-ui/core/Button';
import Header from '../../component/Header';
import Footer from '../../component/Footer';

const axios = require('axios');

class PostList extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        post_list: [], // post 리스트
        currentPage : 1, // 현재 페이지 위치
        pageSize : 10, // 한 페이지에 보여줄 컨텐츠 갯수
    }
  }

 
componentDidMount() {
  axios.get('http://127.0.0.1:8000/post/').then(response => {
      let responses = response.data;
      responses.forEach(element => {
          const {post_list} = this.state;
          this.setState({
            post_list: post_list.concat(element)
          })
      });
  });
}
handleClickAlbum = (e) => {
  console.log(e.currentTarget);
}
  
  handleChangePage = (event, newPage) => {
      this.setPage(newPage);
    };
  
    handleChangeRowsPerPage = event => {
      this.setRowsPerPage(+event.target.value);
      this.setPage(0);
    };
  
    render(){
        return(
          <React.Fragment>
            <Header />
              <div lassName="container" style={{marginLeft: "3rem", marginTop: "3rem", marginRight: "3rem"}}>
                  <div style={{margin: "auto", textAlign: "center", marginBottom: "1rem"}}>

                    <Table className="table" style={{margin: "auto", width: '80%'}} >
                      <TableHead>
                        <TableRow>
                          <TableCell align='left' style={{width: '10%'}}>번호</TableCell>
                          <TableCell align='left' style={{width: '50%'}}>제목</TableCell>
                          <TableCell align='left' style={{width: '10%'}}>작성자</TableCell>
                          <TableCell align='left' style={{width: '30%'}}>작성일자</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                      {this.state.post_list.map(post =>
                        <TableRow key={post.id}>
                          <TableCell align='left'>{post.id}</TableCell>
                          <TableCell align='left'><a href='/post/:{post.id}' style={{textDecoration: 'none', color: "black"}}>{post.title}</a></TableCell>
                          <TableCell align='left'>{post.username}</TableCell>
                          <TableCell align='left'>{post.updated}</TableCell>
                        </TableRow>
                      )}
                      </TableBody>
                      </Table>             
                        
                      <Button color="primary" size="1rem">글쓰기</Button> 
                  </div>
              </div>
              <Footer/>
          </React.Fragment>
        );
    }
}

export default PostList;  
///////
////////////////


/*


/////////

export default function StickyHeadTable() {
      constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password2: '',
      nickname: '',
      check_username: false
    }
  }
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

   


 */