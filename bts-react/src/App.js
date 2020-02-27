import React, { Fragment } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Main from './container/Main'
import SignUp from './container/SignUp'
import Login from './container/Login';
import Profile from './container/Profile'
import PostList from './container/post/PostList'
import PostDetail from './container/post/PostDetail'
import UserList from './container/user/UserList'

import './App.css'
import AlbumRegister from './container/album/AlbumRegister';

class App extends React.Component {
  state = {
    user: null
  }
  setUser = (user) => {
    this.setState({
      user: user
    })
  }
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Route exact path="/" component={Main} user={this.state.user} />
          <Route path="/login" component={Login} registerUser={this.setUser} />
          <Route path="/signup" component={SignUp}/>
          <Route path="/profile" component={Profile}/>
          <Route exact path="/post" component={PostList}/>
          <Route exact path="/post/:id" component={PostDetail}/>
          <Route exact path="/register" component={AlbumRegister}/>
          <Route exact path="/userList" component={UserList}/>

        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;