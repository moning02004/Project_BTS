import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Category from './container/Category';


class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Category />
        <Footer />
      </div>
    );
  }
}

export default App;