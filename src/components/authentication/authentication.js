import React from 'react';
import { connect } from 'react-redux';
import './authentication.css';
import { authHandleInputChange, submitAuthForm } from '../../actions/authentication';

class Authentication extends React.Component {

    componentWillMount() {
       localStorage.removeItem('credentials');
    }
    
    render () {
        const { username, password, isLoginFail } = this.props.authentication
        return (
            <form className="authentication" 
                onSubmit={(event) => this.props.submitAuthForm(event, username, password)}>
                <input 
                    type="text"
                    name="username" 
                    value={username} 
                    className="authentication__input" 
                    onChange={this.props.authHandleInputChange} 
                />
                <input 
                    type="password" 
                    name="password" 
                    value={password}
                    className="authentication__input"
                    onChange={this.props.authHandleInputChange} 
                />
                <button>Login</button>
                {
                isLoginFail &&
                <div className="authentication__error-msg">
                    User or password are invalid!
                </div>
                }
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authentication: state.authenticationReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        authHandleInputChange: (event) => authHandleInputChange(dispatch, event),
        submitAuthForm: (event,username,password) => submitAuthForm(dispatch,event,username,password)
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Authentication)