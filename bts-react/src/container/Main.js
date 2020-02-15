import React from 'react';
import Category from './Category';
import Content from './Content';
import Footer from '../component/Footer';


class Main extends React.Component {
    render() {
        return (
            <div>
                <Category />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default Main;