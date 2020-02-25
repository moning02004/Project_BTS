import * as actions from '../actions/Authentication'
import { connect } from "react-redux";
import SignupView from "../components/SignupView";

const mapStateToProps = (state) => ({
    status: state.auth.signup.status
})
const mapDispatchToProps = (dispatch) => ({
    onSubmit: (username, password, nickname) => {
        return dispatch(actions.signupRequest(username, password, nickname));
    },
    onCheck: (username) => {
        return dispatch(actions.checkUsernameRequest(username))
    }
})

const Signup = connect(mapStateToProps, mapDispatchToProps)(SignupView);
export default Signup;