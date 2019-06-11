import { getUserTokens, userTokensDetails, updateUserTokens, getAllTokens } from '../apis/api.cryptoWatchlist';
import { UPDATE_USER_TOKENS, UPDATE_ALL_TOKENS, UPDATE_ADDED_TOKEN } from './actionTypes';
import {handleInputChange} from './general';

export const fetchUserTokens = (dispatch, authToken) => {
    (async () => {
        try {
        let res = await getUserTokens(authToken);
        const tokenIds = res.data.data.map((obj) => {
            return Object.values(obj)[0]
        });
         res = await userTokensDetails(authToken, tokenIds)
            dispatch({
                type: UPDATE_USER_TOKENS,
                payload: {
                    tokens: res.data.data,
                    tokensIdList: tokenIds
                }
            })
        } catch (e) {
            console.log(e)
        }
    })();
}

export const removeToken = (dispatch, event, authToken, removedTokenId, tokensList) => {
    const newTokenIdsList = tokensList.filter(token => token != removedTokenId);
    (async () => {
        try {
            await updateUserTokens(authToken, newTokenIdsList);
            fetchUserTokens(dispatch,authToken)
        } catch (e) {
            console.log(e)
        }
    })();
}

export const handleSelectOnChange = (dispatch, event) => {
    handleInputChange(dispatch, event, UPDATE_ADDED_TOKEN);
} 

export const addToken = (dispatch, event, authToken, addedToken, tokensList) => {
    event.preventDefault();
    if(!addedToken) {
        return;
    }
    
    tokensList.push(addedToken);
    (async () => {
        try {
            let res = await updateUserTokens(authToken, tokensList);
            fetchUserTokens(dispatch,authToken);
        } catch (e) {
            console.log(e)
        }
    })();
}


export const fetchAllTokens = (dispatch, authToken) => {
    (async () => {
        try {
            let res = await getAllTokens(authToken);
            dispatch({
                type: UPDATE_ALL_TOKENS,
                payload: {
                    allTokens: res.data.data
                }
            })
        } catch (e) {
            console.log(e)
        }
    })();
}
