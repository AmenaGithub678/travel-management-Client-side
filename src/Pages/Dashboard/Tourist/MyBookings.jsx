import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import { axiosSecure } from '../../../hooks/useAxiosSecure';

const MyBookings = () => {
  const { user } = useAuth();

  const { 
    data: bookings = [], isLoading 
  } = useQuery({
    queryKey: ['myBookings', user?.email],
queryFn: async () => {
  const res = await axiosSecure.get(`/bookings?touristEmail=${user?.email}`);
  return res.data;
},
enabled: !!user?.email
  });

  const handleCancel = async (id) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to cancel this booking?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it!'
    });

    if (confirm.isConfirmed) {
      const res = await axiosSecure.delete(`/bookings/${id}`);
      if (res.data.deletedCount > 0) {
        Swal.fire('Cancelled!', 'Your booking has been cancelled.', 'success');
      }
    }
  };

  if (isLoading) return <div className="text-center py-10">Loading...</div>;

    return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">My Bookings</h2>

      {/* Table view for md+ screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th>#</th>
              <th>Package</th>
              <th>Guide</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, idx) => (
              <tr key={booking._id}>
                <td>{idx + 1}</td>
                <td>{booking.packageName}</td>
                <td>{booking.guideName || 'N/A'}</td>
                <td>{new Date(booking.tourDate).toLocaleDateString()}</td>
                <td>${booking.price}</td>
                <td className="capitalize">{booking.status}</td>
                <td>
                  {booking.status === 'pending' ? (
                    <div className="flex gap-2">
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-sm btn-success">Pay</button>
                      </Link>
                      <button
                        className="btn btn-sm btn-error"
                        onClick={() => handleCancel(booking._id)}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <span>—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card view for mobile screens */}
      <div className="block md:hidden space-y-4">
        {bookings.map((booking, idx) => (
          <div key={booking._id} className="bg-white shadow-md rounded-lg p-4 space-y-2">
            <h3 className="text-lg font-semibold">{booking.packageName}</h3>
            <p><span className="font-medium">Guide:</span> {booking.guideName || 'N/A'}</p>
            <p><span className="font-medium">Date:</span> {new Date(booking.tourDate).toLocaleDateString()}</p>
            <p><span className="font-medium">Price:</span> ${booking.price}</p>
            <p><span className="font-medium">Status:</span> <span className="capitalize">{booking.status}</span></p>
            <div className="flex gap-2">
              {booking.status === 'pending' ? (
                <>
                  <Link to={`/dashboard/payment/${booking._id}`}>
                    <button className="btn btn-sm btn-success">Pay</button>
                  </Link>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleCancel(booking._id)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <span className="text-gray-500">No Actions</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default MyBookings;