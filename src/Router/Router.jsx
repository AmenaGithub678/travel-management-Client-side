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
import PackageDetails from '../Pages/PackageDetails/PackageDetails';
import TourGuideProfile from '../Pages/PackageDetails/TourGuideProfile/TourGuideProfile';
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
            path: 'package_details',
            Component: PackageDetails,
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
]);

export default router;