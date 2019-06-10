import axios from 'axios';
const loginUrl = 'http://localhost:8888/login';

export const authenticate = (data) => {
    return axios.post(loginUrl, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
