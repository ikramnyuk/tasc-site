import axios from 'axios';

const service = axios.create({
    timeout: 8000
});

service.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json';

    return config
}, error => {
    console.log(error)
    Promise.reject(error)
});

service.interceptors.response.use(
    response => response,
    error => {
        console.log('err' + error)
        return Promise.reject(error.response)
    }
);

export {service};
