import { 
    UPDATE_AUTH_TOKEN
    } from './actionTypes';

export const handleInputChange = (dispatch,event,type) => {
    const target = event.target;
    const value = target.type ==='checkbox' ? target.checked : target.value;
    const name = target.name;

    return dispatch({
        type,
        payload: {
            name, value
        }
    })
}

export const updateAuthenticationToken = (dispatch,token) => {
    dispatch({
        type: UPDATE_AUTH_TOKEN,
        payload: {
            token: token
        }
    });
}