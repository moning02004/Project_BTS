import React, { Fragment } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Main from './container/Main'
import SignUp from './container/SignUp'
import Header from './component/Header'
import Footer from "./component/Footer";
import Profile from './container/Profile'
import PostList from './container/PostList'
import PostDetail from './container/PostDetail'

class App extends React.Component {
  render() {
    // /signup페이지에서는 헤더 삭제
    let Header_Hide = window.location.pathname === '/signup' ? null : <Header />
    let Footer_Hide = window.location.pathname === '/signup' ? null : <Footer />

    return (
      <Fragment>
        {Header_Hide} 
        <BrowserRouter>
          <Route exact path="/" component={Main} />
          <Route path="/signup" component={SignUp}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/postList" component={PostList}/>

        </BrowserRouter>
        {Footer_Hide}
      </Fragment>
    );
  }
}

export default App;