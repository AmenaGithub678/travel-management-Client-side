import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link, NavLink, useNavigate } from 'react-router';
import { useQuery } from '@tanstack/react-query';

const Profile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Get full tourist user info from DB
  const { data: userInfo = {}, refetch } = useQuery({
    queryKey: ['tourist-user', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/tourist-users/${user.email}`);
      return res.data;
    },
  });

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (userInfo) {
      reset({
        name: userInfo?.name || '',
        photo: userInfo?.photo || '',
        phone: userInfo?.phone || '',
        address: userInfo?.address || '',
      });
    }
  }, [userInfo, reset]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await axiosSecure.patch(`/tourist-users/${userInfo.email}`, data);
      if (res.data.modifiedCount > 0 || res.data.acknowledged) {
        Swal.fire('Success', 'Your profile has been updated!', 'success');
        setIsModalOpen(false);
        refetch();
      } else {
        Swal.fire('No Change', 'No data was updated.', 'info');
      }
    } catch (error) {
      Swal.fire('Error', 'Something went wrong!', 'error');
    } finally {
      setIsLoading(false);
    }
  };

    return (
   <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">👋 Welcome, {userInfo?.name}</h2>

      {/* Show user info */}
      <div className="bg-white rounded-lg shadow p-4 mb-4 space-y-2">
        <img
          src={userInfo?.photo}
          alt="User"
          className="w-24 h-24 rounded-full object-cover border"
        />
        <p><strong>Name:</strong> {userInfo?.name}</p>
        <p><strong>Email:</strong> {userInfo?.email}</p>
        <p><strong>Role:</strong> {userInfo?.role || 'tourist'}</p>
        
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          className="btn btn-outline"
          onClick={() => setIsModalOpen(true)}
        >
          ✏️ Edit Profile
        </button>
 <button
          className="btn btn-primary"
          onClick={() => navigate('/dashboard/join-guide')}
        >
          🧭 Go Back To Apply page
</button>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                type="text"
                {...register('name')}
                className="input input-bordered w-full"
                placeholder="Your name"
              />
              <input
                type="text"
                {...register('photo')}
                className="input input-bordered w-full"
                placeholder="Photo URL"
              />
               <input
                type="text"
                {...register('phone')}
                className="input input-bordered w-full"
                placeholder="Phone Number"
              /> 
               <input
                type="text"
                {...register('address')}
                className="input input-bordered w-full"
                placeholder="Address"
              /> 
              <input
                type="email"
                value={userInfo?.email}
                disabled
                className="input input-bordered w-full bg-gray-100"
              />
              <input
                type="text"
                value={userInfo?.role || 'tourist'}
                disabled
                className="input input-bordered w-full bg-gray-100"
              />
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isLoading}
                >
                  {isLoading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    );
};

export default Profile;