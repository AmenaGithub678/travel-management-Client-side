import React from 'react';
import { NavLink, Outlet } from 'react-router';
import TourLogo from '../Logo/TourLogo';
import useUserRole from '../hooks/UseUserRole/useUserRole';

const DashBoardLayout = () => {
const { role, loading } = useUserRole();
  if (loading) return <div>Loading Dashboard...</div>;
    return (
       <div className="drawer lg:drawer-open">
     <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
{/* Navbar */}
        <div className="navbar bg-base-300 w-full lg:hidden">
            <div className="flex-none ">
            <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
            <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             className="inline-block h-6 w-6 stroke-current"
            >
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
        ></path>
    </svg>
     </label>
    </div>
    <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>
                    
                </div>
{/* Page content here */}
     <Outlet></Outlet>
{/* Page content here */}

    </div>
    <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-accent text-base-content min-h-full w-80 p-4">
    <TourLogo />

    <li><NavLink to="/">Home</NavLink></li>

    {/* Shared by All */}
    <li><NavLink to="/dashboard/add-stories">Add Stories</NavLink></li>
    <li><NavLink to="/dashboard/manage-stories">Manage Stories</NavLink></li>

    {/* Tourist Only */}
    {role === 'tourist' && (
        <>
            <li><NavLink to="/dashboard/my-bookings">My Bookings</NavLink></li>
            <li><NavLink to="/dashboard/payment-history">Payment History</NavLink></li>
            <li><NavLink to="/dashboard/join-guide">Join as Guide</NavLink></li>
            <li><NavLink to="/dashboard/tourist-profile">Manage Profile</NavLink></li>
        </>
    )}

    {/* Tour Guide Only */}
    {role === 'tour-guide' && (
        <>
            <li><NavLink to="/dashboard/assigned-tours">My Assigned Tours</NavLink></li>
            <li><NavLink to="/dashboard/guide-profile">Manage Profile</NavLink></li>
        </>
    )}

    {/* Admin Only */}
    {role === 'admin' && (
        <>
            <li><NavLink to="/dashboard/admin-profile">Manage Profile</NavLink></li>
            <li><NavLink to="/dashboard/assigned-tours">My Assigned Tours</NavLink></li>
            <li><NavLink to="/dashboard/add-packages">Add Packages</NavLink></li>
            <li><NavLink to="/dashboard/ManageCandidates">Manage Candidates</NavLink></li>
        </>
    )}
</ul>

    </div>
    </div>
    );
};

export default DashBoardLayout;