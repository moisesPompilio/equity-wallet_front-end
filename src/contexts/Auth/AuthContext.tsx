import { createContext } from 'react';
import { ResponseLogin } from '../../types/ResponseLogin';
import { Token } from '../../types/token';
import { User } from '../../types/User';

export type AuthContextType = {
    token: Token | null;
    login: (email: string, password: string) => Promise<ResponseLogin>
    singout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);