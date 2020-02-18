import React, { Fragment } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Main from './container/Main'
import SignUp from './container/SignUp'
import Login from './container/Login';
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
    return (
      <Fragment>
        <BrowserRouter>
          <Route exact path="/" component={Main} user={this.state.user} />
          <Route path="/login" component={Login} registerUser={this.setUser} />
          <Route path="/signup" component={SignUp}/>
          {/* <Route path="/profile" component={Profile}/> */}
          {/* <Route exact path="/post" component={PostList}/> */}
          {/* <Route exact path="/post/:id" component={PostDetail}/> */}
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;