import { 
    UPDATE_USER_TOKENS,
    UPDATE_ALL_TOKENS,
    UPDATE_ADDED_TOKEN
} from '../actions/actionTypes.js';


const cryptoWatchlist = {
    tokens: [],
    tokensIdList: [],
    allTokens: [],
    addedToken: '',
};

export default (state = cryptoWatchlist, action) => {
    switch (action.type) {
        case UPDATE_USER_TOKENS: 
            const { tokens, tokensIdList } = action.payload;
            return {
                ...state,
                tokens,
                tokensIdList
            }
        case UPDATE_ALL_TOKENS: 
            const { allTokens } = action.payload;
            return {
                ...state,
                allTokens
            }
        case UPDATE_ADDED_TOKEN:
            const { name, value } = action.payload;
            return {
                ...state,
                [name]: value
            }
        default:
            return state;
    }
}

