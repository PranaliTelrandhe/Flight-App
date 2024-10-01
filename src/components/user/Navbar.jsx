import React, { useState } from "react";
import FlightIcon from '@mui/icons-material/Flight';
import { Link, Outlet } from "react-router-dom";
import { Dropdown } from "bootstrap";


import './Navbar.css'


const Navbar = () => {
    const[isMobile,setIsMobile]=useState(false);
    return(
        <div>
            
       <nav className='navbar navbar-expand-lg'>
       <li style={{color:"white"}} className='nav-item nav-link'> <FlightIcon/></li>
       <button 
                    className='navbar-toggler '
                    type='button'
                    onClick={() => setIsMobile(!isMobile)}
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

      <ul className={`navbar-links navbar-nav ms-auto ${isMobile ? "mobile-menu" : ""}`} >
      
        <li className='nav-item'><Link className='nav-link' to="/flight">Flight</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/account">My Account</Link></li>
        <li className="nav-item dropdown"><Link className="nav-link dropdown-toggle" href="#" role="button" 
        data-bs-toggle="dropdown" aria-expanded="false"> Manage Booking</Link>
        <ul className="dropdown-menu">
       <li className='nav-item'><Link class="dropdown-item" to="/modifybooking" style={{color:'black', background:'white',margin:'2px'}}>ModifySearchDetails</Link></li>
       <li className='nav-item'><Link class="dropdown-item" to="/cancelbooking" style={{color:'black', background:'white',margin:'2px'}}>Cancel Booking</Link></li>
      
</ul>

</li>

        
        <li className='nav-item'><Link className='nav-link' to="/support">Support</Link></li>
       <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" href="#" role="button" 
                            data-bs-toggle="dropdown" aria-expanded="false">Country
                        </Link>
                        <ul className="dropdown-menu">
                            <li className='nav-item'>
                                <Link className="dropdown-item" to="/country/usa" style={{color:'black',                         background:'white', margin:'2px'}}>United States</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className="dropdown-item" to="/country/canada" style={{color:'black', background:'white', margin:'2px'}}>Canada</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className="dropdown-item" to="/country/uk" style={{color:'black', background:'white', margin:'2px'}}>United Kingdom</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className="dropdown-item" to="/country/india" style={{color:'black', background:'white', margin:'2px'}}>India</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className="dropdown-item" to="/country/australia" style={{color:'black', background:'white', margin:'2px'}}>Australia</Link>
                            </li>
                        </ul>
                    </li>

      

      </ul>
      <ul className={`navbar-links navbar-nav ms-auto ${isMobile ? "mobile-menu" : ""}`} id="buttons" >
        <li className='nav-item rounded-4'><Link className='nav-link' to="/login">Login</Link>
        </li>
        <li className='nav-item rounded-4'><Link className='nav-link' to="/SignUp">Sign Up</Link>
        </li>
      </ul>
      
    </nav> 
    <Outlet/> 
    </div>  

    );
}



export default Navbar;