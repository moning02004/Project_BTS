import React from 'react';
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core';

const CategoryView = ({keyword, setCatAll, setCatRegular, setCatMini, setCatSingle, setCatOST}) => {
    return (
        <div style={{borderTop: `1px solid #ffdddd`}}>
            <div>{ keyword }</div>
            <div style={{display: "flex", justifyContent: "space-around", width: "50%", margin: "auto"}}>
                <Button onClick={ setCatAll } value="1">전체</Button>
                <Button onClick={ setCatRegular }>정규</Button>
                <Button onClick={ setCatMini }>미니</Button>
                <Button onClick={ setCatSingle }>싱글</Button>
                <Button onClick={ setCatOST }>OST</Button>
            </div>
        </div>
    );
}

CategoryView.propTypes = {
    keyword: PropTypes.string,
    setCatAll: PropTypes.func,
    setCatRegular: PropTypes.func,
    setCatMini: PropTypes.func,
    setCatSingle: PropTypes.func,
    setCatOST: PropTypes.func
}
CategoryView.defaultProps = {
    keyword: '',
    setCatAll: () => {console.log("setCatAll not defined");},
    setCatRegular: () => {console.log("setCatRegular not defined");},
    setCatMini: () => {console.log("setCatMini not defined");}, 
    setCatSingle: () => {console.log("setCatSingle not defined");}, 
    setCatOST: () => {console.log("setCatOST not defined");}
}

export default CategoryView;