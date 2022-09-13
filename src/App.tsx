import { useContext } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
import Login from './pages/Login';
import "./styles/App.css"
import { Signup } from './pages/Signup';
import Home from './pages/Home';
import * as C from "./styles/app.styles"
import Button from './components/Button';

function App() {
    const auth = useContext(AuthContext);
    return (
        <C.Container>
            <C.Header>
                <C.HeaderText>Equity Wallet</C.HeaderText>
                {auth.token && <div className='btn-logout'><Button label='Logout' variant='outline' size='medium' onClick={auth.singout}/></div>}
            </C.Header>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/home' element={<RequireAuth><Home /></RequireAuth>} />
                <Route path="*" element={<Login />} />
            </Routes>
        </C.Container>
    );
}


export default App;