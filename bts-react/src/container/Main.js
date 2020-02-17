import React from 'react';
import Category from './Category';
import Content from './Content';
import Header from '../component/Header';
import Footer from '../component/Footer';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'all'
        }
    }
    render() {
        return (
            <div>
                <Header />
                <Category />
                <Content category={this.state.category} />
                <Footer />
            </div>
        );
    }
}

export default Main;