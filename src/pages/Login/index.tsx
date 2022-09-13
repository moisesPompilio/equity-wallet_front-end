import * as C from './styles'
import { useState, useEffect, useContext } from 'react';

//import { MovieCard } from "../components/MovieCard"
import Button from '../../components/Button/index';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    if (password && email) {
      const isLogged = await auth.login(email, password);
      if (isLogged.validation) {
        navigate("/home")
      } else {
        alert(isLogged.message)
      }
    } else {
      alert("Fill in the fields")
    }
  }
  const signup = () => {
    navigate("/signup")
  }




  return (
    <C.Container>
      <C.Body>
        <C.AreaLogin>
          <C.Center>
            <C.Title> Login </C.Title>
          </C.Center>
          <C.Center>
            <C.Input type="email" placeholder="E-mail" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </C.Center>
          <C.Center>
            <C.Input type="password" placeholder="Password" name="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </C.Center>
          <C.Center>
            <C.Button>
              <Button variant='primary' size='large' onClick={handleLogin} label='Log in' />
            </C.Button>
            <C.Button>
              <Button variant='secondary' size='large' onClick={signup} label='Signup' />
            </C.Button>
          </C.Center>
        </C.AreaLogin>
      </C.Body>
    </C.Container>
  )
}

export default Login