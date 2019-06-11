import { 
    UPDATE_AUTH_INPUT,
    UPDATE_AUTH_TOKEN,
    AUTH_FAIL
} from '../actions/actionTypes.js';


const authenticationReducer = {
   username: '',
   password: '',
   isLoginFail: false,
   token: ''
};

export default (state = authenticationReducer, action) => {
    switch (action.type) {
        case UPDATE_AUTH_INPUT: 
            const { name, value } = action.payload
            return {
                ...state,
                [name]: value
            }
        case UPDATE_AUTH_TOKEN: 
            const { token } = action.payload    
            return {
                ...state,
                token,
                username: '',
                password: ''
            }  
        case AUTH_FAIL: 
            return {
                ...state,
                isLoginFail: true
        }              
        default:
            return state;
    }
}

