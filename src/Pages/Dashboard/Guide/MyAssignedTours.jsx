import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { axiosSecure } from '../../../hooks/useAxiosSecure';

const MyAssignedTours = () => {
     const { user } = useAuth();
  const email = user?.email;

  const { data: assignedTours = [], refetch } = useQuery({
    queryKey: ['assignedTours', email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/assigned-tours?email=${email}`);
      return res.data;
    },
  });

  const handleAccept = async (id) => {
    try {
      const res = await axiosSecure.patch(`/assigned-tours/${id}`, {
        status: 'accepted',
      });
      if (res.data.modifiedCount > 0) {
        Swal.fire('Success', 'Tour Accepted', 'success');
        refetch();
      }
    } catch (error) {
      // console.error(error);
      Swal.fire('Error', 'Something went wrong', 'error');
    }
  };

  const handleReject = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You want to reject this tour?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, reject it!',
    });

    if (result.isConfirmed) {
      try {
        const res = await axiosSecure.patch(`/assigned-tours/${id}`, {
          status: 'rejected',
        });
        if (res.data.modifiedCount > 0) {
          Swal.fire('Rejected', 'Tour has been rejected', 'success');
          refetch();
        }
      } catch (error) {
        // console.error(error);
        Swal.fire('Error', 'Something went wrong', 'error');
      }
    }
  };

    return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Assigned Tours</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th>#</th>
              <th>Package</th>
              <th>Tourist</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {assignedTours.map((tour, index) => (
              <tr key={tour._id}>
                <td>{index + 1}</td>
                <td>{tour.packageName}</td>
                <td>{tour.touristName}</td>
                <td>{new Date(tour.tourDate).toLocaleDateString()}</td>
                <td>{tour.price}৳</td>
                <td className="capitalize">{tour.status}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => handleAccept(tour._id)}
                    disabled={tour.status !== 'in review'}
                    className={`btn btn-sm ${
                      tour.status === 'in review'
                        ? 'btn-success'
                        : 'btn-disabled'
                    }`}
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(tour._id)}
                    disabled={tour.status !== 'in review'}
                    className="btn btn-sm btn-error"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
            {assignedTours.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No assigned tours found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyAssignedTours;