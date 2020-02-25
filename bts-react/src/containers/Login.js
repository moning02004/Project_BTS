import * as actions from '../actions/Authentication';
import { connect } from 'react-redux';
import LoginView from '../components/LoginView';


const mapStateToProps = (state) => ({
    status: state.auth.login.status,
    token: state.auth.login.token
})

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (username, password) => {
        return dispatch(actions.loginRequest(username, password));
    }
});

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginView)

export default Login;