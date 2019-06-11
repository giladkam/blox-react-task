import {handleInputChange , updateAuthenticationToken} from './general';
import { authenticate } from '../apis/api.authentication';
import { 
    UPDATE_AUTH_INPUT,
    AUTH_FAIL
    } from './actionTypes';



export const authHandleInputChange = (dispatch, event) => {
    handleInputChange(dispatch, event, UPDATE_AUTH_INPUT);
};

export const submitAuthForm = (dispatch, event, username, password, ownProps) => {
    event.preventDefault();
    const credentials = JSON.stringify({password, username});

    (async () => {
        try {
        const res = await authenticate(credentials);
        localStorage.setItem('credentials', res.data.data.token);
        updateAuthenticationToken(dispatch, res.data.data.token)
            ownProps.history.push('/watchlist');
        } catch (e) {
            dispatch({
                type: AUTH_FAIL
            })
        }
    })();
};