import './index.scss'
import {Link} from 'react-router-dom'
export default function Footer(){
    return(
        <footer className='bg-dark text-light'>
       <div className='container-fluid pt-3'> 
       <div className='row'>
        <div className='col-6'>
           <p>&copy; Kashish Khokhar...</p>
        </div>

        <div className='col-6 text-end'>
        <Link class="nav-link d-inline-block " aria-current="page" to="/">Home</Link>
        <Link class="nav-link d-inline-block ms-2" aria-current="page" to="/about">About</Link>
        <Link class="nav-link d-inline-block ms-2" aria-current="page" to="/portfolio">Portfolio</Link>
     
            <Link class="nav-link d-inline-block ms-2" aria-current="page" to="/contact">Contacts</Link>
       </div>
       </div>
       </div>
    </footer>
    )
}