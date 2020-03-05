import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import BTSProfile from './BTSProfile';
import Main from '../containers/Main';
import AlbumRegister from '../containers/album/AlbumRegister';
import PostDetail from '../containers/post/PostDetail';
import PostList from '../containers/post/PostList';
import PostAdd from '../containers/post/PostAdd';

import PostEdit from '../containers/post/PostEdit';
import UserList from '../containers/user/UserList';
import PoliceList from './PoliceList';

import Signup from './Signup';
import Signin from './Signin';
import { statusRequest } from '../actions/Authentication';
import AlbumDetail from './album/AlbumDetail';

class App extends React.Component {

    componentDidMount() {
        let signinData = sessionStorage.getItem("KEY")
        if (!signinData) return;
        signinData = JSON.parse(atob(signinData))
        if (!signinData.isAuth) return ;

        this.props.getStatus(signinData.token.user_id).then(() => {
        });
    }
    render() {
        return (
            <BrowserRouter >
                <Route exact path="/" component={ Main } />
                <Route path="/signin" component={ Signin } />
                <Route path="/signup" component={ Signup }/>
                <Route path="/btsProfile" component={ BTSProfile }/>
                
                <Switch>
                    <Route exact path="/album/register" component={ AlbumRegister }/>
                    <Route exact path="/album/:id" component={ AlbumDetail }/>
                    <Route exact path="/post/:id"  component={ PostDetail }/>
                    <Route exact path="/postAdd"  component={ PostAdd }/>
                    <Route exact path="/post/edit/:id"  component={ PostEdit }/>
                    <Route exact path="/post" component={ PostList }/>
                    <Route exact path="/policeList" component={ PoliceList }/>

                    
                </Switch>
                <Route path="/userList" component={ UserList }/> 

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