import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import MainLayout from '../layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AuthLayout from '../layouts/AuthLayout';
import Community from '../Pages/Community/Community';
import About from '../Pages/About/About';
import Trips from '../Pages/Trips/Trips';
import TourGuideProfile from '../Pages/PackageDetails/TourGuideProfile/TourGuideProfile';
import PackageDetails from '../Pages/PackageDetails/PackageDetails';
import TourGuideList from '../Pages/PackageDetails/TourGuideList';
import PrivateRoute from '../Routes/PrivateRoute';
import DashBoardLayout from '../layouts/DashBoardLayout';
import MyBookings from '../Pages/Dashboard/Tourist/MyBookings';
import ManageStories from '../Pages/Dashboard/Tourist/ManageStories';
import JoinGuide from '../Pages/Dashboard/Tourist/JoinGuide';
import AddStories from '../Pages/Dashboard/Tourist/AddStories';
import UpdateStory from '../Pages/Dashboard/Tourist/UpdateStory';
import Profile from '../Pages/Dashboard/Tourist/Profile';
import AddPackage from '../Pages/Dashboard/Admin/AddPackage';
import Payment from '../Pages/Dashboard/Payment/Payment';
import PaymentHistory from '../Pages/Dashboard/Payment/PaymentHistory';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
            path: 'package-details/:id',
            Component: PackageDetails,
        },
        {
        path: '/guide/:id',
        Component: TourGuideList,
        },
        {
            path: 'tour-guide/:id',
            Component: TourGuideProfile,
        },
        {
            path: 'community',
            Component: Community,
        },
        {
            path: 'about-us',
            Component: About,
        },
        {
            path: 'trips',
            Component: Trips,
        },


    ]
  },
  {
    path: '/',
   element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
       }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute>
      <DashBoardLayout></DashBoardLayout>
    </PrivateRoute>,
    children: [
      // Tourist
      { 
        path: 'my-bookings', 
        element: <MyBookings></MyBookings> 
      },
      {
      path: 'payment/:bookingId', 
        element: <Payment></Payment>
      },
      {
    path:'payment-history',
    element: <PaymentHistory></PaymentHistory>
      },
      { 
        path: 'manage-stories', 
        element: <ManageStories></ManageStories>
      },
      { 
        path: 'join-guide', 
        element: <JoinGuide></JoinGuide> ,
      },
      {
        path: 'add-stories', 
        element:  <AddStories></AddStories>
      },
      {
        path: 'update-story/:id', 
        element:  <UpdateStory></UpdateStory>
      },
      {
        path: 'tourist-profile',
       element: <Profile></Profile>
      },

//  Guide
// { path: 'my-assigned-tours', element: <GuideRoute><MyAssignedTours /></GuideRoute> },
// { path: 'add-stories', element: <GuideRoute><AddStories /></GuideRoute> },
// { path: 'manage-stories', element: <GuideRoute><ManageStories /></GuideRoute> },

// ADMIN
{
  path: 'add-packages',
  element: <AddPackage></AddPackage>
}
    ]
  }


]);

export default router;