import { Link } from 'react-router-dom'
import Button from '../Button'
import { BiCameraMovie, BiSearchAlt} from "react-icons/bi";

const Navbar = ()=> {
  return (
    <nav>
     <h2>
      <Link to="/"><BiCameraMovie/> LOOCK-MOVIES</Link>
      </h2>
      <form >
        <input required type="text" placeholder='Search the movie' />
        <Button label='Search' variant='secondary'/>
      </form>
     </nav>
  )
}

Navbar.propTypes = {}

export default Navbar