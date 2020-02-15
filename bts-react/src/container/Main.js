import React from 'react';
import Category from './Category';
import Content from './Content';


class Main extends React.Component {
    render() {
        return (
            <div>
                <Category />
                <Content />
            </div>
        );
    }
}

export default Main;