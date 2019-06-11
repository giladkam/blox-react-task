import { getUserTokens, userTokensDetails, updateUserTokens, getAllTokens } from '../apis/api.cryptoWatchlist';
import { UPDATE_USER_TOKENS, UPDATE_ALL_TOKENS, UPDATE_ADDED_TOKEN } from './actionTypes';
import {handleInputChange} from './general';

export const fetchUserTokens = (dispatch, cerdentials) => {
    (async () => {
        try {
        let res = await getUserTokens(cerdentials);
        const tokenIds = res.data.data.map((obj) => {
            return Object.values(obj)[0]
        });
         res = await userTokensDetails(cerdentials, tokenIds)
            return dispatch({
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

export const removeToken = (dispatch, event, cerdentials, removedTokenId, tokensList) => {
    const newTokenIdsList = tokensList.filter(token => token != removedTokenId);
    (async () => {
        try {
            await updateUserTokens(cerdentials, newTokenIdsList);
            fetchUserTokens(dispatch,cerdentials)
        } catch (e) {
            console.log(e)
        }
    })();
}

export const handleSelectOnChange = (dispatch, event) => {
    handleInputChange(dispatch, event, UPDATE_ADDED_TOKEN);
} 

export const addToken = (dispatch, event, cerdentials, addedToken, tokensList) => {
    event.preventDefault();
    
    tokensList.push(addedToken);
    (async () => {
        try {
            let res = await updateUserTokens(cerdentials, tokensList);
            fetchUserTokens(dispatch,cerdentials);
        } catch (e) {
            console.log(e)
        }
    })();
}


export const fetchAllTokens = (dispatch, cerdentials) => {
    (async () => {
        try {
            let res = await getAllTokens(cerdentials);
            return dispatch({
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
