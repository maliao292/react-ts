// import App from 'react'
import axios, { AxiosResponse } from './axios'
const baseUrl = process.env.REACT_APP_BASE_URL
// const token: string | null = sessionStorage.getItem('token')

interface User {
    username: string;
    password: string;
    captcha: string;
}

let user: User = {
    username: 'mario',
    password: '123',
    captcha: '7p2xd'
}

axios({
    method: 'POST',
    url: baseUrl + '/sys/login',
    params: user
}).then((res: AxiosResponse) => {
    console.log(res);

    
})