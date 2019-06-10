import { 
    UPDATE_AUTH_INPUT,
    AUTH_SUCCEED,
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
        case AUTH_SUCCEED: 
            console.log(action.payload);
            const { token } = action.payload    
            return {
                ...state,
                token,
                username: '',
                password: ''
            }  
        case AUTH_FAIL: 
            console.log('fail');    
            return {
                ...state,
                isLoginFail: true
        }              
        default:
            return state;
    }
}

