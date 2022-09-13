import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../../pages/Login';
import { AuthContext } from './AuthContext';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate();
    if (!auth.token) {
        navigate("/");
        return <Login />
    }
    return children;
}