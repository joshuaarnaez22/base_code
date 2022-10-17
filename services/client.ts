import axios from 'axios';

const errorResponseHandler = (error: any) => {
    console.log(error);
};

export const axiosClient = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});
axiosClient.interceptors.request.use(function (response) {
    return response;
}, errorResponseHandler);
