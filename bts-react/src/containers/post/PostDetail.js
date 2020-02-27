import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow'; 
import Button from '@material-ui/core/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { RouteComponentProps } from 'react-router';

const axios = require('axios');

class PostDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: '', // 
            post_detail_list: [],
        }
       this.id = this.props.match.params.id;
      }

      componentDidMount() {
        axios.get('http://127.0.0.1:8000/post/').then(response => {
            this.setState({post_detail_list: response.data});
            
        });
      }
    render(){
      //  const {id} = match.params.id;

      console.log(this.params);
        return(
          <React.Fragment>
            <Header />

            <div className="root" style={{marginLeft: "3rem", marginTop: "3rem", marginRight: "3rem"}}>
                  <div style={{margin: "auto", textAlign: "center", marginBottom: "1rem"}}>
                        입력 {this.id}
                      <DetailList post_detail_list={this.state.post_detail_list}/>
                {/*       {this.state.post_detail_list.map(postDetail =>
                           {postDetail.title}
                           )}
                            */} 
                      <Button color="primary" size="1rem">수정</Button> 
                      <Button color="primary" size="1rem">삭제</Button> 

                  </div>
              </div>
              <Footer />
          </React.Fragment>
        );
 
    }
}

function DetailList({post_detail_list}){
  return (
    
  <ul key={post_detail_list.id}>
    {post_detail_list.map(post =>
    //  <li>{post.title}</li>
      <li>{post.id} </li>
      )}
  </ul>
  );
}
export default PostDetail;



