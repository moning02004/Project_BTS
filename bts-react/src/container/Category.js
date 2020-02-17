import React from 'react';
import { Button } from '@material-ui/core';

class Category extends React.Component {

    render() {
        return (
            <div style={{borderTop: `1px solid #ffdddd`}}>
                <div style={{display: "flex", justifyContent: "space-around", width: "50%", margin: "auto"}}>
                    <Button>전체</Button>
                    <Button>정규</Button>
                    <Button>미니</Button>
                    <Button>싱글</Button>
                    <Button>OST</Button>
                </div>

            </div>
            );
    }
}

export default Category;