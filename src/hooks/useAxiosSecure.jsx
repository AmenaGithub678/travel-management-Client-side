import React from 'react';
import axios from 'axios'
export const axiosSecure = axios.create(
    {
  baseURL: `https://touriest-management-system.vercel.app`,
    }
)
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;