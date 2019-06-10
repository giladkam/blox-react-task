import { 
    UPDATE_USER_TOKENS
} from '../actions/actionTypes.js';


const cryptoWatchlist = {
    tokens: [],
    tokensIdList: []
};

export default (state = cryptoWatchlist, action) => {
    switch (action.type) {
        case UPDATE_USER_TOKENS: 
        const { tokens, tokensIdList } = action.payload
        return {
            ...state,
            tokens,
            tokensIdList
        }
        default:
            return state;
    }
}

