import React, { Fragment } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Main from './container/Main'
import SignUp from './container/SignUp'
import Login from './container/Login';
import './App.css'

class App extends React.Component {
  render() {
    // let Header_Hide = window.location.pathname === '/signup' ? null : <Header />
    // let Footer_Hide = window.location.pathname === '/signup' ? null : <Footer />

    return (
      <Fragment>
        <BrowserRouter>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login}/>
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