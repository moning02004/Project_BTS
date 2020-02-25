import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import MemberProfile from '../containers/MemberProfile';
import Main from '../containers/Main';
import AlbumRegister from '../containers/album/AlbumRegister';
import PostDetail from '../containers/post/PostDetail';
import PostList from '../containers/post/PostList';
import Signup from './Signup';
import Signin from './Signin';
import { statusRequest } from '../actions/Authentication';

class App extends React.Component {

    componentDidMount() {
        function getCookie(name) {
            var value = "; " + document.cookie; 
            var parts = value.split("; " + name + "="); 
            if (parts.length === 2) return parts.pop().split(";").shift();
        }
        let signinData = getCookie('key')
        if (!signinData) return;
        signinData = JSON.parse(atob(signinData))
        console.log(signinData);
        if (!signinData.isAuth) return ;

        this.props.getStatus(signinData.user_id).then(
            (e) => {
                console.log('app')
            }
        )
    }
    render() {
        return (
            <BrowserRouter >
                <Route exact path="/" component={ Main } />
                <Route path="/signin" component={ Signin } />
                <Route path="/signup" component={ Signup }/>
                <Route path="/member/profile" component={ MemberProfile }/>
                <Route exact path="/post" component={ PostList }/>
                <Route exact path="/post/:id" component={ PostDetail }/>
                <Route exact path="/register" component={ AlbumRegister }/>
            </BrowserRouter>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getStatus: (user_id) => {
        return dispatch(statusRequest(user_id));
    }
})

App = connect(undefined, mapDispatchToProps)(App);
export default App;