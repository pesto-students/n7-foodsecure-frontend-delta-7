import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

const apiHeaders = () => {
    return {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'content-type': 'application/json',
        'role' : `${localStorage.getItem('role')}`
    }
}

export async function getData({ url, headers = {}, query }) {
    url = process.env.REACT_APP_API_BASE_URL + url;

    return new Promise((resolve, reject) => {
        trackPromise(axios.get(url, {
            headers: {
                ...headers, ...apiHeaders()
            }
        })
            .then(res => {
                resolve(res.data);
            }).catch(error => {
                if (error.message === 'Request failed with status code 401') {
                    localStorage.setItem('token', '');
                    window.location = "/login";
                } else {
                    reject(error);
                }

            }));
    })
}

export async function postData({ url, headers = {}, query, body }) {
    url = process.env.REACT_APP_API_BASE_URL + url;

    return new Promise((resolve, reject) => {
        trackPromise(axios.post(url, body, {
            headers: {
                ...headers, ...apiHeaders()
            }
        }).then(res => {
            resolve(res.data);
        }).catch(error => {
            if (error.message === 'Request failed with status code 401') {
                localStorage.setItem('token', '');
                window.location = "/login";
            } else {
                reject(error);
            }

        }))
    })
}