import React from 'react';
import { Link } from 'react-router';
import { NavLink } from 'react-router';
import { useNavigate } from 'react-router';
import TourLogo from '../Logo/TourLogo';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
const Navbar = () => {
const {user,logOut}= useAuth();
const navigate = useNavigate();

const handleSignOut = () =>{
         logOut()
         .then( () =>{
    Swal.fire({
          icon: 'success',
          title: 'Login Successfully!!',
          text: 'You have successfully logged Out!',
          showConfirmButton: false,
          timer: 2000
        });

      navigate("/login");
 })
    
     .catch((error)=>{
     console.log(error);
   })
     }
const navItems = <>
 <li className=' font-semibold 
       text-lg 
       text-primary'>
     <NavLink className={({       isActive }) =>
               isActive ? "text-secondary font-bold" : "text-primary font-semibold"
            } to='/'>Home</NavLink></li>
 <li className=' font-semibold 
       text-lg 
       text-primary'>
     <NavLink className={({       isActive }) =>
               isActive ? "text-secondary font-bold" : "text-primary font-semibold"
            } to='/package_details'>Packages</NavLink></li>           
       <li className=' font-semibold text-lg text-primary'>
           <NavLink className={({ isActive }) =>
               isActive ? "text-secondary font-bold" : "text-primary font-semibold"
             } 
             to='/community'>Community</NavLink></li>
       <li className=' font-semibold text-lg text-[#f000b8]'>
                 <NavLink className={({ isActive }) =>
               isActive ? "text-secondary font-bold" : "text-primary font-semibold"
             } to='/about-us'>About</NavLink></li>
       <li className=' font-semibold text-lg text-[#f000b8]'>
                 <NavLink className={({ isActive }) =>
               isActive ? "text-secondary font-bold" : "text-primary font-semibold"
             } to='/trips'>Trips</NavLink></li>

    </>


    return (
<div 
    className="navbar bg-base-100 shadow-sm">
<div 
    className="navbar-start">
            <div 
            className="dropdown">
                <div 
                tabIndex={0} 
                role="button" 
                className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
  <div className="btn btn-ghost text-xl">
 <TourLogo></TourLogo>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
      
 {
user ? <>
<button 
 onClick={handleSignOut}
className='btn bg-info'
>
SignOut
</button>
</> :
  <>
<Link to="/register">
<button className="btn btn-outline btn-success mr-2">
  Register
</button>
</Link>
<Link to="/login">
<button className="btn btn-outline btn-success">LogIn</button>
    </Link>
  </>

       }            
       </div>
        </div>
    );
};

export default Navbar;