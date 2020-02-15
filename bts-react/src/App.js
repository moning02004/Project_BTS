import React, { Fragment } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './container/Main'
import SignUp from './container/SignUp'
import Header from './component/Header';
import Footer from './component/Footer';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <BrowserRouter>
          <Route exact path="/" component={Main} />
          <Route path="/signup" component={SignUp}/>
        </BrowserRouter>
        <Footer />
      </Fragment>
    );
  }
}

export default App;