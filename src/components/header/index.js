import './index.scss'
import  logo from '../../assests/images/logo.svg'
import {Link} from 'react-router-dom'
export default function Header(){
return(
<header  >
{/* <nav class="navbar navbar-dark bg-dark"> */}



 <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-4">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">
        <img src={logo} alt="Resume" height="50"/>
        </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto my-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/portfolio">Portfolio</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact</Link>
        </li>
       
         </ul> 
        
       <form class="d-flex" role="search">
         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> 
         {/* <button class="btn btn-outline-success" type="submit">Search</button>  */}
      </form>
    </div>
  </div>
</nav> 
{/* </nav> */}
</header>
)}