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

  // ✅ Fetch Admin Info from admin-users collection
  const { data: admin = {}, isLoading: loadingUser } = useQuery({
    queryKey: ['adminUser', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin-users/${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  // ✅ Fetch admin stats
  const { data: stats = {}, isLoading: loadingStats } = useQuery({
    queryKey: ['adminStats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-stats');
      return res.data;
    },
  });

  const { register, handleSubmit, reset } = useForm();

  // ✅ PATCH to update admin info
  const mutation = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.patch(`/admin-users/${user.email}`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['adminUser']);
      setIsEditing(false);
      Swal.fire('Success', 'Admin profile updated!', 'success');
    },
  });

  const onSubmit = (data) => mutation.mutate(data);

  if (loadingUser || loadingStats) return <p className="text-center mt-10">Loading...</p>;

    return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">👋 Welcome, {admin.name}</h1>

      {/* ✅ STATS */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-base-200 p-4 rounded-xl text-center shadow">
          <p className="text-sm text-gray-500">Total Payment</p>
          <p className="text-xl font-semibold text-green-600">${(stats.totalPayment / 100).toFixed(2)}</p>
        </div>
        <div className="bg-base-200 p-4 rounded-xl text-center shadow">
          <p className="text-sm text-gray-500">Tour Guides</p>
          <p className="text-xl font-semibold">{stats.totalTourGuides}</p>
        </div>
        <div className="bg-base-200 p-4 rounded-xl text-center shadow">
          <p className="text-sm text-gray-500">Packages</p>
          <p className="text-xl font-semibold">{stats.totalPackages}</p>
        </div>
        <div className="bg-base-200 p-4 rounded-xl text-center shadow">
          <p className="text-sm text-gray-500">Clients</p>
          <p className="text-xl font-semibold">{stats.totalClients}</p>
        </div>
        <div className="bg-base-200 p-4 rounded-xl text-center shadow">
          <p className="text-sm text-gray-500">Stories</p>
          <p className="text-xl font-semibold">{stats.totalStories}</p>
        </div>
      </div>

      {/* ✅ ADMIN INFO */}
      <div className="flex items-center gap-6 bg-white rounded-xl p-6 shadow mb-6">
        <img src={admin.photo} alt={admin.name} className="w-24 h-24 rounded-full object-cover" />
        <div>
          <p><strong>Name:</strong> {admin.name}</p>
          <p><strong>Email:</strong> {admin.email}</p>
          <p><strong>Role:</strong> {admin.role}</p>
          <p><strong>Phone:</strong> {admin.phone || 'N/A'}</p>
          <p><strong>Address:</strong> {admin.address || 'N/A'}</p>
        </div>
        <button
          onClick={() => {
            reset({
              name: admin.name,
              photo: admin.photo,
              phone: admin.phone,
              address: admin.address,
            });
            setIsEditing(true);
          }}
          className="btn btn-sm btn-outline ml-auto"
        >
          Edit
        </button>
      </div>

      {/* ✅ EDIT MODAL */}
      {isEditing && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 shadow rounded-xl">
          <div>
            <label className="block font-medium">Name</label>
            <input {...register("name")} defaultValue={admin.name} className="input input-bordered w-full" />
          </div>
          <div>
            <label className="block font-medium">Photo URL</label>
            <input {...register("photo")} defaultValue={admin.photo} className="input input-bordered w-full" />
          </div>
          <div>
            <label className="block font-medium">Phone</label>
            <input {...register("phone")} defaultValue={admin.phone} className="input input-bordered w-full" />
          </div>
          <div>
            <label className="block font-medium">Address</label>
            <input {...register("address")} defaultValue={admin.address} className="input input-bordered w-full" />
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


