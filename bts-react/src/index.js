import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import MemberProfile from './containers/MemberProfile';
import Main from './containers/Main';
import AlbumRegister from './containers/album/AlbumRegister';
import PostDetail from './containers/post/PostDetail';
import PostList from './containers/post/PostList';
import SignUp from './containers/user/SignUp';
import Login from './containers/user/Login';


const theme = createMuiTheme({
    typography: {
        fontFamily: '"Noto Sans KR", serif',
    },
});

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter >
            <Route exact path="/" component={ Main } />
            <Route path="/login" component={ Login } />
            <Route path="/signup" component={ SignUp }/>
            <Route path="/member/profile" component={ MemberProfile }/>
            <Route exact path="/post" component={ PostList }/>
            <Route exact path="/post/:id" component={ PostDetail }/>
            <Route exact path="/register" component={ AlbumRegister }/>
          </BrowserRouter>
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
