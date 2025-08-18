import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import TourLogo from '../Logo/TourLogo';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Logout Successfully!!',
          text: 'You have successfully logged Out!',
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/login");
      })
      .catch((error) => {});
  };


  const publicRoutes = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-secondary font-bold" : "text-primary font-semibold"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-secondary font-bold" : "text-primary font-semibold"
          }
          to="/community"
        >
          Community
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-secondary font-bold" : "text-primary font-semibold"
          }
          to="/about-us"
        >
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar shadow-sm bg-info sticky 
              top-0 z-50 mx-auto">
      <div className="navbar-start mx-auto px-4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {publicRoutes}

            
            {user && (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-secondary font-bold" : "text-primary font-semibold"
                    }
                    to="/trips"
                  >
                    Trips
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-secondary font-bold" : "text-primary font-semibold"
                    }
                    to="/offers"
                  >
                    Offers
                  </NavLink>
                </li>
              </>
            )}

            {!user && (
              <>
                <li>
                  <Link to="/register" className="btn btn-outline btn-success mb-2 w-20">
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="btn btn-outline btn-success mb-2 w-20">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="btn btn-ghost text-xl">
          <TourLogo />
        </div>
      </div>

      {/* ⭐ Changed: Center part এখন শুধু public routes দেখাবে */}
      <div className="navbar-center hidden lg:flex max-w-7xl mx-auto px-4">
        <ul className="menu menu-horizontal px-1">
          {publicRoutes}
        </ul>
      </div>

      <div className="navbar-end max-w-7xl mx-auto px-4">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
                <img
                  src={user.photoURL || "https://i.ibb.co/L6Z9KHY/avatar.png"}
                  alt="Profile"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-60"
            >
              <li className="text-sm font-semibold text-gray-600">
                {user.displayName}
              </li>
              <li className="text-xs text-gray-500 mb-2">{user.email}</li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>

              {/* ⭐ Changed: এখানে Trips & Offers ড্রপডাউনেও রাখা হলো */}
              <li>
                <Link to="/trips">Trips</Link>
              </li>
              <li>
                <Link to="/offers">Offers</Link>
              </li>

              <li>
                <button
                  onClick={handleSignOut}
                  className="btn btn-sm bg-error text-white mt-2"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="hidden lg:flex gap-2">
            <Link to="/register">
              <button className="btn btn-outline btn-primary">Register</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-outline btn-primary">LogIn</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
