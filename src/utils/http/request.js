import axios from './axios';
import {Message} from 'element-ui';

function buildUrl(path) {
    return 'http://10.8.153.11:8080/base-portal' + path
}

function buildOptions(params) {
    let options = {};
    if (params) {
        options.params = params;
    }
    return options;
}

/**
 *
 * @param axiosPromise promise对象
 * @param success 回调函数
 */
function handleResponse(axiosPromise, success) {
    axiosPromise.then(({data}) => {
        if (data.returnCode === 1) {
            if (success) {
                success(data.content);
            } else {
                Message.success({
                    message: data.returnMsg,
                    duration: 1000
                });
            }
        } else {
            Message.error({
                message: data.returnMsg,
                duration: 1000
            });
        }
    });
}

export default {

    get(url, params, success) {
        handleResponse(axios.get(buildUrl(url), buildOptions(params)), success);
    },

    post(url, params, data, success) {
        handleResponse(axios.post(buildUrl(url), data, buildOptions(params)), success);
    },

    put(url, params, data, success) {
        handleResponse(axios.put(buildUrl(url), data, buildOptions(params)), success);
    },

    delete(url, params, success) {
        handleResponse(axios.delete(buildUrl(url), buildOptions(params)), success);
    }

}