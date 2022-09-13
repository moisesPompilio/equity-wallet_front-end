import { api } from "../config/Axios"
import { User } from "../types/User";

export const useApi = () => ({
    login: async (email: string, password: string) => {
        const response = await api.post("users/login", { email, password }).then(res => {
            return res.data
        }).catch(error => {
            throw new Error(error.response.data.message);
        });
        return response;
    },
    signup: async (user: User) => {
        const response = await api.post("users", user).then(res => {
            return res.data
        }).catch(error => {
            throw new Error(error.response.data.message);
        });
        return response;
    }
})