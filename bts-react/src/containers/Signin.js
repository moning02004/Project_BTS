import * as actions from '../actions/Authentication';
import { connect } from 'react-redux';
import SigninView from '../components/SigninView';


const mapStateToProps = (state) => ({
    status: state.auth.signin.status,
    token: state.auth.signin.token
})

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (username, password) => {
        return dispatch(actions.signinRequest(username, password));
    }
});

const Signin = connect(mapStateToProps, mapDispatchToProps)(SigninView)

export default Signin;