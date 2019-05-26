import request from '../utils/request';

export function query() {
    return request('/api/users');
}

let URI = 'http://localhost:3001'; //     // `http://52haha.top:3001`

let wsHost = 'ws://localhost:8006/'
//http://52haha.top:3001
if (process.env.NODE_ENV == 'production') {
    URI = `http://47.96.15.69:3001`
    wsHost = `ws://47.96.15.69:8006`
}
// URI = `http://47.96.15.69:3001`
export const WS_HOST = wsHost;


export function getYuce() {
    return request(URI + '/api/forecast');
}

export function getData() {
    return request(URI + '/api/data');
}
