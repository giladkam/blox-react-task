import {handleInputChange} from './general';
import { authenticate } from '../apis/api.authentication';
import { 
    UPDATE_AUTH_INPUT,
    AUTH_SUCCEED,
    AUTH_FAIL
} from './actionTypes';



export const authHandleInputChange = (dispatch, event) => {
    handleInputChange(dispatch, event, UPDATE_AUTH_INPUT);
};

export const submitAuthForm = (dispatch, event, username, password) => {
    event.preventDefault();
    const credentials = JSON.stringify({password, username});

    (async () => {
        try {
        const res = await authenticate(credentials);
        localStorage.setItem('credentials', res.data.data.token);
             return dispatch({
                type: AUTH_SUCCEED,
                payload: {
                    token: res.data.data.token
                }
            });

        } catch (e) {
             return dispatch({
                type: AUTH_FAIL
            })
        }
    })();
};