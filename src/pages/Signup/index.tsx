import * as C from './styles'
import { useState, useEffect, useContext } from 'react';

//import { MovieCard } from "../components/MovieCard"
import Button from '../../components/Button/index';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../hooks/userApi';

export const Signup = () => {

    const api = useApi();
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleLogin = async () => {
        const isLogged = await auth.login(email, password);
        if (isLogged.validation) {
            navigate("/home")
        } else {
            alert(isLogged.message)
        }
    }
    const signup = async () => {
        try {
            if (password && email && name) {
                const isSignup = await api.signup({ password, email, name })
                if (isSignup.id) {
                    handleLogin();
                } else {
                    alert("Failed sign up")
                }
            } else {
                alert("Fill in the fields")
            }
        } catch (error) {
            alert(error);
        }
    }
    const returnLogin = () => {
        navigate("/")
    }




    return (
        <C.Container>
            <C.Body>
                <C.AreaLogin>
                    <C.Center>
                        <C.Title> Sign up </C.Title>
                    </C.Center>
                    <C.Center>
                        <C.Input type="text" placeholder="Name" name="name" value={name} onChange={e => setName(e.target.value)} required />
                    </C.Center>
                    <C.Center>
                        <C.Input type="email" placeholder="E-mail" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
                    </C.Center>
                    <C.Center>
                        <C.Input type="password" placeholder="Password" name="password" value={password} onChange={e => setPassword(e.target.value)} required />
                    </C.Center>
                    <C.Center>
                        <C.Button>
                            <Button variant='primary' size='large' onClick={signup} label='Signup' />
                        </C.Button>
                        <C.Button>
                            <Button variant='secondary' size='large' onClick={returnLogin} label='Return' />
                        </C.Button>
                    </C.Center>
                </C.AreaLogin>
            </C.Body>
        </C.Container>
    )
}