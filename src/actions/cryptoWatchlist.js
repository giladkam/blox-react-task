import { getUserTokens, userTokensDetails, updateUserTokens } from '../apis/api.cryptoWatchlist';
import { UPDATE_USER_TOKENS } from './actionTypes';

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

    const newTokenIdsList = tokensList.filter(token => token !== removedTokenId);
    (async () => {
        try {
            let res = await updateUserTokens(cerdentials, newTokenIdsList);
            return dispatch({
                type: UPDATE_USER_TOKENS,
                payload: {
                    tokens: res.data.data,
                    tokensIdList: newTokenIdsList
                }
            })
        } catch (e) {
            console.log(e)
        }
    })();
}
