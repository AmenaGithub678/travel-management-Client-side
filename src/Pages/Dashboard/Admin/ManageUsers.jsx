import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageUsers = () => {
const axiosSecure = useAxiosSecure();
  const [roleFilter, setRoleFilter] = useState('all');
  const [page, setPage] = useState(1);
  const limit = 10;

  // Fetch paginated + filtered users
  const { data = {}, isLoading, refetch } = useQuery({
    queryKey: ['allUsers', roleFilter, page],
    queryFn: async () => {
      const roleParam = roleFilter === 'all' ? '' : `&role=${roleFilter}`;
      const res = await axiosSecure.get(`/users?page=${page}&limit=${limit}${roleParam}`);
      return res.data;
    },
  });

  const users = data.users || [];
  const total = data.total || 0;
  const totalPages = Math.ceil(total / limit);

  const handlePromote = async (email) => {
    try {
      const res = await axiosSecure.patch(`/users/role/${email}`);
      if (res.data?.message?.includes('promoted')) {
        Swal.fire('Success!', 'User promoted to Tour Guide!', 'success');
        refetch();
      } else {
        Swal.fire('Info', res.data?.message || 'No changes made', 'info');
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Failed to promote user', 'error');
    }
  };

  if (isLoading) return <p>Loading users...</p>;


    return (
<div className="p-6">
      {/* Filter Dropdown */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-primary">👥 Manage Users</h2>
        <select
          value={roleFilter}
          onChange={(e) => {
            setPage(1);
            setRoleFilter(e.target.value);
          }}
          className="select select-bordered text-primary"
        >
          <option value="all">All</option>
          <option value="tour-guide">Tour Guide</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {/* 📋 Users Table */}
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Photo</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td>{(page - 1) * limit + idx + 1}</td>
                <td>{user.name || 'N/A'}</td>
                <td>{user.email}</td>
                <td>
                  <img
                    src={user.photo || '/default-avatar.png'}
                    alt="User"
                    onError={(e) => (e.target.src = '/default-avatar.png')}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="capitalize">{user.role || 'tourist'}</td>
                <td>
                  {user.role !== 'tour-guide' ? (
                    <button
                      onClick={() => handlePromote(user.email)}
                      className="btn btn-xs btn-primary"
                    >
                      Promote to Guide
                    </button>
                  ) : (
                    <span className="text-primary
                    font-medium">Guide</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 📦 Pagination UI */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
        <p className="text-sm text-gray-600">
          Showing {(page - 1) * limit + 1}–{Math.min(page * limit, total)} of {total}
        </p>

        <div className="join">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            className="join-item btn btn-sm"
            disabled={page === 1}
          >
            «
          </button>

          {[...Array(totalPages).keys()]
            .filter((p) => {
              const num = p + 1;
              return num === 1 || num === totalPages || (num >= page - 1 && num <= page + 1);
            })
            .map((p, i, arr) => {
              const current = p + 1;
              const prev = arr[i - 1] ? arr[i - 1] + 1 : 0;
              const showDots = current - prev > 1;
              return (
                <React.Fragment key={p}>
                  {showDots && <button className="join-item btn btn-sm btn-disabled">...</button>}
                  <button
                    onClick={() => setPage(current)}
                    className={`join-item btn btn-sm ${page === current ? 'btn-active btn-success' : ''}`}
                  >
                    {current}
                  </button>
                </React.Fragment>
              );
            })}

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            className="join-item btn btn-sm"
            disabled={page === totalPages}
          >
            »
          </button>
        </div>
      </div>
    </div>
    );
};

export default ManageUsers;