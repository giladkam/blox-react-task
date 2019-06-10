import axios from 'axios';
const userTokensUrl = 'http://localhost:8888/user/tokens';
const tokensDetailsUrl = 'http://localhost:8888/tokens-info';

export const getUserTokens = (cerdentials) => {
    return axios.get(userTokensUrl,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': cerdentials
        }
    });
}

export const userTokensDetails = (cerdentials, tokensIds) => {
    return axios.post(tokensDetailsUrl,{
        "tokenIds": tokensIds
        },{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': cerdentials
        }
    });
}

export const updateUserTokens = (cerdentials, tokensIds) => {
    return axios.post(userTokensUrl,{
        "tokenIds": tokensIds
        },{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': cerdentials
        }
    });
}
