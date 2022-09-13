import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'authorization': `bearer ${localStorage.getItem("authToken")}`
    }
})

api.interceptors.response.use(response => {

    return response
}, err => {
    return new Promise(async (resolve, reject) => {
        const originalReq = await err
        let refreshToken = await localStorage.getItem("authRefreshToken");
        if (originalReq.response.status === 401 && err.config && !err.config._retry && refreshToken != null) {
            originalReq._retry == true;
            let res = await api.post("auth", {
                refreshToken: refreshToken
            }).then(async res => {
                localStorage.setItem("authToken", res.data.token);
                localStorage.setItem("authRefreshToken", res.data.refreshToken);

                originalReq.config.headers['authorization'] = await `Bearer ${res.data.token}`

                return await axios(originalReq.config).then((response) => {
                    return response;
                }).catch(err => {
                    return err;
                });
            }).catch(err => {
                reject(err);
            })
            resolve(res);
        } else if ((originalReq.response.status === 401 && err.config && err.config._retry)) {
            localStorage.setItem("authToken", "");
            localStorage.setItem("authRefreshToken", "");
        } else {
            reject(err)
        }
    })
})