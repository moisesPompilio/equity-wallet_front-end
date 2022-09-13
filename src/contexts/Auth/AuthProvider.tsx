import { AuthContext } from './AuthContext';
import { User } from '../../types/User';
import { useState, useEffect } from 'react';
import { useApi } from '../../hooks/userApi';
import { Token } from '../../types/token';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [token, setToken] = useState<Token | null>(null);
    const api = useApi();
    useEffect(() => {
        const validateToken = () => {
            const storageDataToken = localStorage.getItem("authToken");
            const storageDataRefreshToken = localStorage.getItem("authRefreshToken");
            if (storageDataToken && storageDataRefreshToken) {
                setToken({ token: storageDataToken, refreshToken: storageDataRefreshToken })
            }
        }
        validateToken();
    }, [])

    const login = async (email: string, password: string) => {
        try {
            const data = await api.login(email, password);
            if (data.token, data.refreshToken) {
                setToken({ token: data.token, refreshToken: data.refreshToken })
                setTokens(data);
                return { validation: true, message: "successful login" }
            } else {
                return { validation: false, message: "Login failed" }
            }
        } catch (error) {
            console.error(error)
            return { validation: false, message: error }
        }

    }
    const singout = async () => {
        setToken(null)
        let token: Token = { token: "", refreshToken: "" };
        setTokens(token);
    }
    const setTokens = (token: Token) => {
        localStorage.setItem("authToken", token.token);
        localStorage.setItem("authRefreshToken", token.refreshToken);
    }
    return (
        <AuthContext.Provider value={{ login, singout, token }}>
            {children}
        </AuthContext.Provider>
    )
}