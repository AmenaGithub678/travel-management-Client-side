import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageProfile = () => {
 const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);

  const { data: admin = {}, isLoading: loadingUser } = useQuery({
    queryKey: ['adminUser', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/role?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  const { data: stats = {}, isLoading: loadingStats } = useQuery({
    queryKey: ['adminStats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-stats');
      return res.data;
    },
  });

  const { register, handleSubmit, reset } = useForm();

  const mutation = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.patch(`/tourist-users/${user.email}`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['adminUser']);
      setIsEditing(false);
      Swal.fire('Success', 'Profile updated successfully', 'success');
    }
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  if (loadingUser || loadingStats) return <p className="text-center mt-10">Loading...</p>;



    return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-xl space-y-6">
      <h2 className="text-2xl font-bold">Welcome, {admin.name}</h2>
      
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
        <div className="bg-base-200 rounded-xl p-4 shadow">
          <p className="text-sm text-gray-500">Total Payment</p>
          <p className="text-xl font-semibold text-green-600">${(stats.totalPayment / 100).toFixed(2)}</p>
        </div>
        <div className="bg-base-200 rounded-xl p-4 shadow">
          <p className="text-sm text-gray-500">Tour Guides</p>
          <p className="text-xl font-semibold">{stats.totalTourGuides}</p>
        </div>
        <div className="bg-base-200 rounded-xl p-4 shadow">
          <p className="text-sm text-gray-500">Packages</p>
          <p className="text-xl font-semibold">{stats.totalPackages}</p>
        </div>
        <div className="bg-base-200 rounded-xl p-4 shadow">
          <p className="text-sm text-gray-500">Clients</p>
          <p className="text-xl font-semibold">{stats.totalClients}</p>
        </div>
        <div className="bg-base-200 rounded-xl p-4 shadow">
          <p className="text-sm text-gray-500">Stories</p>
          <p className="text-xl font-semibold">{stats.totalStories}</p>
        </div>
      </div>

      {/* Admin Info */}
      <div className="flex items-center gap-6">
        <img src={admin.photo} alt="Admin" className="w-24 h-24 rounded-full object-cover" />
        <div>
          <p><strong>Name:</strong> {admin.name}</p>
          <p><strong>Email:</strong> {admin.email}</p>
          <p><strong>Role:</strong> {admin.role}</p>
        </div>
        <button
          onClick={() => {
            reset({ name: admin.name, photo: admin.photo });
            setIsEditing(true);
          }}
          className="btn btn-sm btn-outline ml-auto"
        >
          Edit
        </button>
      </div>

      {/* Modal Edit */}
      {isEditing && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 border-t pt-4">
          <div>
            <label className="block font-medium">Name</label>
            <input {...register("name")} defaultValue={admin.name} className="input input-bordered w-full" />
          </div>
          <div>
            <label className="block font-medium">Photo URL</label>
            <input {...register("photo")} defaultValue={admin.photo} className="input input-bordered w-full" />
          </div>
          <div className="flex gap-4">
            <button type="submit" className="btn btn-primary">Save Changes</button>
            <button type="button" className="btn btn-ghost" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </form>
      )}
    </div>
    );
};

export default ManageProfile;


