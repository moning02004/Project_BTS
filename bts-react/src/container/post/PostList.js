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

const data = [
    {
        post_id : '1',
        title : 'in',
        author :'army',
        write_date :'20200217'
    },
    {
        post_id : '2',
        title : 'cn',
        author : 'bts',
        write_date :'20200217'
    },
    {
        post_id: '3',
        title : 'eat',
        author :'jin',
        write_date : '20200217'
    },
    {
        post_id :  '4',
        title : 'bts good',
        author :'army',
        write_date : '20200217'
    },
    {
        post_id : '5',
        title : 'wow',
        author :'good',
        write_date : '20200217'
    },
    {
        post_id : '6',
        title : 'in',
        author :'army',
        write_date :'20200217'
    },
    {
        post_id : '7',
        title : 'jimin',
        author :'jimin',
        write_date : '20200218'
    },
    {
        post_id : '8',
        title : '집이다',
        author : '방탄',
        write_date : '20200218'
    },
    {
        post_id : '9',
        title : '컴백축하',
        author : '방탄',
        write_date : '20200218'
    },
    {
        post_id : '10',
        title : '아....',
        author : '슈가',
        write_date : '20200219'
    },
    {
        post_id : '11',
        title : '으아아아아아아',
        author : '비티에스',
        write_date : '20200219'
    },

]
class PostList extends React.Component {
/*
    handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    handleChangeRowsPerPage = event => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  */
    render(){
        return(
          <React.Fragment>
            <Header />
              <div lassName="container" style={{marginLeft: "3rem", marginTop: "3rem", marginRight: "3rem"}}>
                  <div style={{margin: "auto", textAlign: "center", marginBottom: "1rem"}}>
                                 
                      <Paper style={{margin: "auto", width: '100%'}}>
                      <TableContainer style={{margin: "auto", maxHeight: 440}}>
                          <Table stickyHeader aria-label="sticky table">
                              <TableHead>
                                  <TableRow>
                                    <TableCell minWidth = "30" align="center" >번호</TableCell>
                                    <TableCell minWidth = "200" align ="center">제목</TableCell>
                                    <TableCell minWidth = "100" align ="center">작성자</TableCell>
                                    <TableCell minWidth = "170" align ="center">작성일자</TableCell>
                                  </TableRow>
                              </TableHead>
                              <TableBody>
                            왜 안나올까
                            아아아아아아..........
                              </TableBody>
                          </Table>
                      </TableContainer>
                      
                      </Paper>

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