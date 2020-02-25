import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import MemberProfile from '../containers/MemberProfile';
import Main from '../containers/Main';
import AlbumRegister from '../containers/album/AlbumRegister';
import PostDetail from '../containers/post/PostDetail';
import PostList from '../containers/post/PostList';
import SignUp from '../containers/user/SignUp';
import Login from '../containers/Login';
import { statusRequest } from '../actions/Authentication';

class App extends React.Component {

    componentDidMount() {
        console.log('App is started!')
        function getCookie(name) {
            var value = "; " + document.cookie; 
            var parts = value.split("; " + name + "="); 
            if (parts.length === 2) return parts.pop().split(";").shift();
        }
        let loginData = getCookie('key')
        console.log(loginData);
        if (!loginData) return;
        loginData = JSON.parse(atob(loginData))
        if (!loginData.isAuth) return ;

        this.props.getStatus(loginData.user_id).then(
            (e) => {
                console.log('app')
            }
        )
    }
    render() {
        return (
            <BrowserRouter >
                <Route exact path="/" component={ Main } />
                <Route path="/login" component={ Login } />
                <Route path="/signup" component={ SignUp }/>
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