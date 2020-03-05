import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './containers/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const theme = createMuiTheme({
    typography: {
        fontFamily: '"Noto Sans KR", serif',
    },
});

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
