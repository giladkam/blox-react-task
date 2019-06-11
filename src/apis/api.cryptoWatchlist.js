import axios from 'axios';
const userTokensUrl = 'http://localhost:8888/user/tokens';
const tokensDetailsUrl = 'http://localhost:8888/tokens-info';

export const getUserTokens = (authToken) => {
    return axios.get(userTokensUrl,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken
        }
    });
}

export const userTokensDetails = (authToken, tokensIds) => {
    return axios.post(tokensDetailsUrl,{
        "tokenIds": tokensIds
        },{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken
        }
    });
}

export const updateUserTokens = (authToken, tokensIds) => {
    return axios.post(userTokensUrl,{
        "tokenIds": tokensIds
        },{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken
        }
    });
}

export const getAllTokens = (authToken) => {
    return axios.get(tokensDetailsUrl,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken
        }
    });
}