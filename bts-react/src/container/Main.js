import React from 'react';
import Content from './Content';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Button } from '@material-ui/core';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'all',
            authenticated: false
        }
    }
    render() {
        return (
            <div>
                <Header />
                
                <div style={{borderTop: `1px solid #ffdddd`}}>
                    <div style={{display: "flex", justifyContent: "space-around", width: "50%", margin: "auto"}}>
                        <Button>전체</Button>
                        <Button>정규</Button>
                        <Button>미니</Button>
                        <Button>싱글</Button>
                        <Button>OST</Button>
                    </div>
                </div>
                
                <Content category={this.state.category} />
                <Footer />
            </div>
        );
    }
}

export default Main;