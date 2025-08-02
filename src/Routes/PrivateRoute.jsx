import React from 'react';
import useAuth from '../hooks/useAuth';
import { useLocation } from 'react-router';
 import { Navigate } from 'react-router';
import { RingLoader } from 'react-spinners';
const PrivateRoute = ({children}) => {

    const { user, loading } = useAuth();
   
    const location = useLocation();
    // console.log(location.pathname);

    if (loading) {
        return <RingLoader />
    }

    if (!user) {
       return <Navigate to="/login"></Navigate>
    }

    return children;
};

export default PrivateRoute;