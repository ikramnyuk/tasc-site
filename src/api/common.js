import {service} from '../service/request';

export function sendEmail(data) {
    return service({
        url: 'https://smpt-api.herokuapp.com/mail/send',
        method: 'post',
        data
    });
}