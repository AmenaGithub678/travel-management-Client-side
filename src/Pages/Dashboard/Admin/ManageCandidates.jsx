import React from 'react';
import Swal from 'sweetalert2';
import { axiosSecure } from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ManageCandidates = () => {
  // Get all guide applications
  const { data: applications = [], refetch, isLoading } = useQuery({
    queryKey: ['guideApplications'],
    queryFn: async () => {
      const res = await axiosSecure.get('/apply-guide');
      return res.data;
    }
  });
  const handleAccept = async (email) => {
    try {
      // await axiosSecure.patch(`/users/role/${email}`);   
       await axiosSecure.delete(`/apply-guide/${email}`); 
      Swal.fire('Accepted!', 'User promoted to Tour Guide.', 'success');
      refetch();
    } catch (error) {
      Swal.fire('Error!', 'Something went wrong.', 'error');
    }
  };

  // ❌ Reject handler: Just Delete
  const handleReject = async (email) => {
    try {
      await axiosSecure.delete(`/apply-guide/${email}`);
      Swal.fire('Rejected!', 'Application deleted.', 'info');
      refetch();
    } catch (error) {
      Swal.fire('Error!', 'Something went wrong.', 'error');
    }
  };

  if (isLoading) return <p className="text-center font-semibold text-lg">Loading Applications...</p>;



    return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Manage Tour Guide Applications</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Experience</th>
              <th>Specialty</th>
              <th>Current Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={app._id}>
                <td>{index + 1}</td>
                <td>{app.name}</td>
                <td>{app.email}</td>
                <td>{app.experience}</td>
                <td>{app.specialty}</td>
                <td>{app.role || 'tourist'}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => handleAccept(app.email)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(app.email)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
            {applications.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default ManageCandidates;