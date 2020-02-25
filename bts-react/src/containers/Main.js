import React from 'react';
import Content from './Content';
import Header from '../components/Header';
import Footer from '../components/Footer';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default Main;