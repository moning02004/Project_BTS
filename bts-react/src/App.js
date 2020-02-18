import React, { Fragment } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './component/Header'
import Footer from './component/Footer'

import Main from './container/Main'
import SignUp from './container/SignUp'
import Login from './container/Login';
import Profile from './container/Profile'
import PostList from './container/PostList'
import PostDetail from './container/PostDetail'
import Register from './container/Register'

import './App.css'

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
<<<<<<< HEAD
=======
     let Header_Hide = window.location.pathname === '/signup' ? null : <Header />
     let Footer_Hide = window.location.pathname === '/signup' ? null : <Footer />

>>>>>>> upstream/master
    return (
      <Fragment>
        <BrowserRouter>
          <Route exact path="/" component={Main} user={this.state.user} />
          <Route path="/login" component={Login} registerUser={this.setUser} />
          <Route path="/signup" component={SignUp}/>
          <Route path="/profile" component={Profile}/>
          <Route exact path="/post" component={PostList}/>
          <Route exact path="/post/:id" component={PostDetail}/>
          <Route exact path="/register" component={Register}/>

        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;